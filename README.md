# Ripplr

Ripplr is an animation library for Javascript that creates a ripple effect.

Functionality is restricted to be used on an HTML element that meets the following criteria of CSS rules:

- display: inline-block || block;
- position: relative;
- overflow: hidden;

The script injects a div inside the clicked element and sets it up with styles and classes that create the effect, after which the element gets removed from the DOM.
