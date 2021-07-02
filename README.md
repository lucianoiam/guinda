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

Options can be passed at instantiation time using the `new` operator:

```JavaScript
const knob = new Knob({min: 0, max: 1});
```

Options can be also updated any time after instantiation:

```JavaScript
const knob = new Knob();

knob.opt.minValue = 0;

knob.setAttribute('max', 1.0);

```

The library can be imported as a module. Note that the module version is just a
shim that loads the regular version and exports its classes. It makes use of the
`export default await` construct which works on Firefox and Chrome but does not
seem to work on Safari as of Jul '21.
```JavaScript
import Awww from './awww-mod.js';

const knob = new Awww.Knob({min: 0, max: 1});
```

Originally created for building the user interface of [Castello Reverb](https://github.com/lucianoiam/castello-rev) VST/LV2 desktop plugin (WIP)

![](http://textfiles.com/underconstruction/AtAthensOracle1388imagesconstruct.gif) This project is also pretty much work in progress ![](http://textfiles.com/underconstruction/AtAthensOracle1388imagesconstruct.gif)
