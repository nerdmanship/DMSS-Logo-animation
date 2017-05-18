# Logo animation for DMSS Conference
### Digital Marketing Skill Share – the next iteration of Digital Marketing Conferences

This is an interactive logo animation that aims to illustrate how DMSS is a conference all about sharing actionable skills. The logotype iterates from its first static state into a new dynamic state in which each node organically fuels the collective center. When the logotype is done animating the animation guides the users attention to the call to action by moving the particles there.

### [Launch project](https://nerdmanship.github.io/DMSS-Logo-animation/dist)

## Links

* #### [Nerdmanship Custom](http://www.nerdmanship.com/) (Author)
* #### [Live website](https://www.dmss.io/) (dmss.io)


## `Usage`

1. **Download the scripts** to your javascript directory.

Right click and choose 'save link as...' to save the files:
* [logoAnimation.min.js](https://github.com/nerdmanship/DMSS-Logo-animation/blob/master/dist/js/logoAnimation.min.js)
* [buttonAnimation.min.js](https://github.com/nerdmanship/DMSS-Logo-animation/blob/master/dist/js/buttonAnimation.min.js)

** Note ** that these are the only files you need – the scripts create the graphics.

2. **Add the scripts** on your page:

```html
<!-- Load the script in this order: -->
<script type="text/javascript" src="logoAnimation.min.js"></script>
<script type="text/javascript" src="buttonAnimation.min.js"></script>
```

3. **Create a div** in which you want to place the animated logotype

```html
<!-- Give it an ID, i.e. "wrapper": -->
<div id="wrapper"></div>
```

4. **Initialise the scripts** in your main js file, i.e. on page load.

```js
// The logo script takes two arguments: the div ID as a string and a delay in seconds (optional)
window.addEventListener("load", animateLogo("wrapper", 2));

// The button script takes one argument: the ID of the existing button which is to be animated
// This button *MUST* have a z-index value
window.addEventListener("load", animateButton("myButton"));
```

#### Further information
You can position and style the div as you would with any normal image wrapper. The logotype will take the dimensions that you give the wrapper.

## Dependencies
(Included in logoAnimation.min.js)
* GSAP TweenMax
* GSAP MorphSVGPlugin
* GSAP ModifiersPlugin

## Follow Nerdmanship Custom
* [Facebook](http://www.facebook.com/nerdmanship)
* [Twitter](http://www.twitter.com/stromqvist)
* [Dribbble](http://www.dribbble.com/stromqvist)
* [Codepen](http://www.codepen.io/nerdmanship)

## License

The code is available under the [MIT license](LICENSE.txt), but conference name (DMSS) and logotype is not.