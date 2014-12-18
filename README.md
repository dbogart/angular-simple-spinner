angular-simple-spinner
======================

Custom directive for a simple angular loading spinner during state change for apps using ui-router.

To install:

`bower install angular-simple-spinner`

Add /angular_simple_spinner.js and dist/angular-simple-spinner.css to your index.html.:

```html
<script src="bower_components/angular-simple-spinner/angular_simple_spinner.js"></script>
```
```html
<link rel="stylesheet" href="bower_components/angular-simple-spinner/angular-simple-spinner.css">
```
Add to your list of dependencies for your main angular module:

`'angularSimpleSpinner'`

In the body of index.html add template:

```html
<!-- load spinner -->
<div simple-spinner>
    <!-- icon/animation of your choice below -->
    <span class="btn btn-lg btn-primary">
        <i class="fa fa-circle-o-notch fa-spin"></i> Loading...
    </span>
</div>
```

Any loading icon, animation, gif, etc. may be used between the div tags. We recommend the spinner icons from fa-icons:
http://fortawesome.github.io/Font-Awesome/icons/

Add the fa-icons css template if you use one of their icons: 
http://fortawesome.github.io/Font-Awesome/get-started/
