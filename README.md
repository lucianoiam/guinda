# Guinda

A small single file library of audio oriented widgets for use in web views. Originally created for building the user interface in [Castello Reverb](https://github.com/lucianoiam/castello) VST desktop plugin.

Guinda is also the Spanish word for a kind of cherry and is pronounced like *geenda*.

### Features

* ECMAScript 2015 (ES6)
* Leverages [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) HTML standard
* Touch and mouse friendly
* SVG based, allows CSS styling
* Event driven
* Minimalistic design

### Widgets

* Knob
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

The library can be imported as a module. Note that the module version is just a
shim that loads the regular version and exports its classes. It makes use of the
`export default await` construct which works on Firefox and Chrome but does not
seem to work on Safari as of Jul '21.
```JavaScript
import Guinda from './guinda.mjs';

const knob = new Guinda.Knob({min: 0, max: 1});
```
