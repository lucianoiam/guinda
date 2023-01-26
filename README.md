# Guinda 🍒

*Graphical User Interfaces and Digital Audio*

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
* Button
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

knob.props.min = 0;
knob.props.max = 1;

knob.addEventListener('input', (ev) => {

    console.log(`The new knob value is ${ev.target.value}`);

});

document.body.appendChild(knob);
```

Properties can be passed at instantiation time using the `new` operator:

```JavaScript
const knob = new Knob({min: 0, max: 1});
```

Properties can be also updated any time after instantiation:

```JavaScript
const knob = new Knob();

knob.props.min = 0;

knob.setAttribute('max', 1.0);

