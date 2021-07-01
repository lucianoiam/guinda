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

Live demo [here](https://raw.githack.com/lucianoiam/awww/master/demo.html)

Pure HTML:

```HTML
<body>

   <a-knob
      min="0"
      max="1"
      oninput="`The new knob value is ${this.value}`">
   <a-knob>

   <script src="awww.js"></script>

</body>
```

Programmatically:

```JavaScript
const knob = document.createElement('a-knob');

knob.opt.min = 0;
knob.opt.max = 1;

knob.addEventListener('input', (ev) => {

    console.log(`The new knob value is ${ev.target.value}`);

});

document.body.addChild(knob);
```

Using the `new` operator allows to pass options at instantiation time:

```JavaScript
// TODO: ES6 module does not exist yet

import Knob from './awww-module.js';

const knob = new Knob({min: 0, max: 1});
```

Originally created for building the user interface of [Castello Reverb](https://github.com/lucianoiam/castello-rev) VST/LV2 desktop plugin (WIP)

![](http://textfiles.com/underconstruction/AtAthensOracle1388imagesconstruct.gif) This project is also pretty much work in progress ![](http://textfiles.com/underconstruction/AtAthensOracle1388imagesconstruct.gif)
