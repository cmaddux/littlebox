# littlebox
Super simple to use, CSS-only icons

![littlebox](http://littlebox.cabmaddux.com/lib/lblogoPNG.png "littlebox logo")

![littlebox explained](http://littlebox.cabmaddux.com/lib/lbexplained.png "littlebox explained")

[A demo of littlebox icons in use.](http://littlebox.cabmaddux.com "littlebox")

# Using littlebox

#####Step 1: Install littlebox through [Bower](http://bower.io/search/?q=littlebox), [npm](https://www.npmjs.com/search?q=littlebox) or download littlebox and reference it in your project (along with Bootstrap, if not already initialized):
```
bower install littlebox
```

or

```
npm install --save littlebox
```

or

```
<link rel="stylesheet" type="text/css" href="dist/littlebox.min.css" />
<link rel="stylesheet" type="text/css" href="dist/bootstrap.min.css" />
```

#####Step 2: Add a littlebox icon to your project. The same structure is used for any littlebox:
```
<div class="lb-icon lb-*"></div>
```

Each littlebox icon is made up of three or fewer elements, but can be called with as a single element with class .lb-icon followed by the .lb-* class associated with the requested icon.

# Customization
Icon colors can be set a few ways:
* Set the littlebox icon's color directly via `color` or `border-color` (the ::before and ::after elements will inherit the parent's color):
```
.lb-* {
  border-color: /*YOUR COLOR HERE*/
}
```
or
```
.lb-* {
  color: /*YOUR COLOR HERE*/
}
```
* Put the littlebox icon inside a styled element and it will inherit the color of the parent:
```
<h2><div class="lb-icon lb-alert"></div>This is an alert</h2>
```
plus
```
h2 {
  color: red;
}
```
Will set the icon's color to red.

# Compatibility
Compatibility is still being reveiwed. 

# Contributing
Contrubutions are welcome:
* Fork the repository
* Have [NPM](https://www.npmjs.com) and [Gulp](http://gulpjs.com) installed. Inside the littlebox directory run the command `npm install` to install the littlebox dev dependencies, followed by `npm run watch` to automatically compile and minify changes.
* Find the littlebox.less file in the lib/ directory and make some awesome additions (They will be automatically compiled and minified into the dist/ directory).
* Once you're done, just open up a pull request!

# ToDo
* Make icons scalable with EM units
* Compatibility testing
* Add to icon library
* Improve animation compatibility


