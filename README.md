# Awww

Audio Warpin' Web Widgets, a single file library of audio oriented widgets for use in web views.

### Features

* ECMAScript 2015 (ES6)
* Leverages [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) HTML standard
* Touch and mouse friendly
* SVG based, allows CSS styling
* Event driven
* Minimalistic design

### Example

Live demo [here](https://rawcdn.githack.com/lucianoiam/awww/master/demo.html)

```JavaScript
const gain = document.createElement('a-knob');

gain.opt.minValue = 0;
gain.opt.maxValue = 1;

document.body.addChild(gain);

gain.addEventListener('input', (ev) => {

    console.log(`The new gain knob value is ${ev.target.value}`);

});
```

Originally created for building the user interface of [Castello Reverb](https://github.com/lucianoiam/castello-rev) VST/LV2 desktop plugin (WIP)

![](http://textfiles.com/underconstruction/AtAthensOracle1388imagesconstruct.gif) This project is also pretty much work in progress ![](http://textfiles.com/underconstruction/AtAthensOracle1388imagesconstruct.gif)
