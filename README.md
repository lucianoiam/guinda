# Guinda 🍒

GUIs in Digital Audio

A small single file library of audio oriented widgets for use in web views.

### Features

* ECMAScript 2015 (ES6)
* Leverages [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) standard
* Touch-first but also mouse friendly
* SVG graphics with CSS styling
* Event driven
* Minimalistic design

### Widgets

* Knob
* Fader
* Resize handle

### Example

Live demo [here](https://raw.githack.com/lucianoiam/guinda/master/demo.html)

Pure HTML:

```HTML
<body>

   <g-knob
      min="0"
      max="1"
      oninput="console.log(`The new knob value is ${this.value}`)">
   <g-knob>

   <script src="guinda.js"></script>

</body>
```

Programmatically:

```JavaScript
const knob = document.createElement('g-knob');

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

knob.opt.min = 0;

knob.setAttribute('max', 1.0);

```

The library can be imported as a module. Note that the module version simply
consists in a shim that loads the regular version and exports its symbols.
```JavaScript
import Guinda from './guinda.mjs';

const knob = new Guinda.Knob({min: 0, max: 1});
```
