/* global require, describe, __dirname, it, Buffer, beforeEach, setTimeout */
(function() {
  'use strict';

  var gulp = require('gulp'),
    expect = require('chai').expect,
    proxyquire = require('proxyquire'),
    cacheStub = require('memory-cache'),
    minifyCSS = proxyquire('../', {
      'memory-cache': cacheStub
    }),
    CleanCSS = require('clean-css'),
    es = require('event-stream'),
    Stream = require('stream'),
    path = require('path'),
    fs = require('fs');

  require('mocha');

  cacheStub.debug(false);

  describe('gulp-minify-css caching', function() {
    var filename = path.join(__dirname, './fixture/index.css');
    var rawContents = fs.readFileSync(filename, 'utf8');
    var compiled = new CleanCSS().minify(rawContents);
    var src;
    var options = {
      cache: true,
      keepBreaks: false,
      processImport: true
    };
    var p = function(cb) {
      gulp.src(filename)
        .pipe(minifyCSS(options))
        .pipe(es.map(cb));
    };

    beforeEach(function() {
      cacheStub.clear();
    });

    describe('with buffers', function() {

      beforeEach(function() {
        src = gulp.src(filename);
      });

      it('should not use the cache if option is not given', function(done) {
        src
        .pipe(minifyCSS({}))
        .pipe(es.map(function(file){
          expect(cacheStub.size()).to.be.equal(0);
          done();
        }));
      });

      it('should use the cache if option is given', function(done) {
        src
        .pipe(minifyCSS(options))
        .pipe(es.map(function(file){
            expect(cacheStub.size()).to.be.equal(1);
            expect(cacheStub.get(filename)).to.deep.equal({
              raw: rawContents,
              minified: compiled,
              options: options
            });
            done();
        }));
      });

      it('should return the cached content if the cache is used', function(done) {
        p(function(file) {
          expect(file.contents.toString()).to.be.equal(compiled.styles);
          cacheStub.get(filename).minified.styles = 'cached data';

          p(function(cachedFile) {
            expect(cachedFile.contents.toString()).to.be.equal('cached data');
            done();
          });
        });
      });
    });

    describe('with streams', function() {

      beforeEach(function() {
        src = gulp.src(filename, { buffer: false });
      });

      it('should not use the cache if option is not given', function(done) {
        src
        .pipe(minifyCSS({}))
        .pipe(es.map(function(file){
            expect(cacheStub.size()).to.be.equal(0);
            done();
        }));
      });

      it('should use the cache if option is given', function(done) {
        src
        .pipe(minifyCSS(options))
        .pipe(es.map(function(file){
          setTimeout(function() {
            expect(cacheStub.size()).to.be.equal(1);
            expect(cacheStub.get(filename)).to.deep.equal({
              raw: rawContents,
              minified: compiled,
              options: options
            });
            done();
          }, 100);
        }));
      });

      it('should return the cached content if the cache is used', function(done) {
        p(function(file) {
          expect(file.contents.toString()).to.be.equal(compiled.styles);
          cacheStub.get(filename).minified.styles = 'cached data';

          p(function(cachedFile) {
            expect(cachedFile.contents.toString()).to.be.equal('cached data');
            done();
          });
        });
      });
    });

  });
})();
