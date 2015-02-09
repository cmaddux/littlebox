# littlebox
Super simple to use, CSS-only icons

![littlebox](http://littlebox.cabmaddux.com/lib/lblogoPNG.png "littlebox logo")

![littlebox explained](http://littlebox.cabmaddux.com/lib/lbexplained.png "littlebox explained")

[A demo of littlebox icons in use.](http://littlebox.cabmaddux.com "littlebox")

# Using littlebox

#####Step 1: Install littlebox through Bower or download littlebox and reference it in your project (along with Bootstrap, if not already initialized):
```
bower install littlebox
```
or

```
<link rel="stylesheet" type="text/css" href="lib/littlebox.min.css" />
<link rel="stylesheet" type="text/css" href="lib/bootstrap.min.css" />
```

#####Step 2: Add a littlebox icon to your project. The same structure is used for any littlebox:
```
<div class="lb-icon lb-*"></div>
```

Each littlebox icon is made up of three or fewer elements, but can be called with as a single element with class .lb-icon followed by the .lb-* class associated with the requested icon.

# Customization
Each littlebox icon is built using borders, so an icon's color (or even individual elements within an icon) can be styled in your CSS:

```
.lb-*, .lb-*::before, .lb::after {
  border-color: /*YOUR COLOR HERE*/
}
```

# Compatibility
Compatibility is still being reveiwed. 

# Contributing
Suggestions, feedback and contributions to the icon library or compatibility would be greatly appreciated.

# ToDo
* Compatibility testing
* Add to icon library
* Improve animation compatibility
* Make usable as button groups and input addons


