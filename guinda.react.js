// SPDX-FileCopyrightText: 2021-2025 Luciano Iam <oss@lucianoiam.com>
// SPDX-License-Identifier: MIT

(() => {

class GuindaComponent extends React.Component {

    constructor() {
        super();

        this.ref = React.createRef();
        this.valueParser = this.constructor._attributeDescriptors.find(d => d.key == 'value').parser;
    }

    render() {
        const propsCopy = Object.assign({}, this.props);

        propsCopy.ref = this.ref;
        propsCopy.value = this.valueParser(this.props.value); // initial value

        // Preact handles input event automatically, React does not -- why?
        // Match behavior between both libraries
        delete propsCopy.onInput;

        this._handleInputEvent = (ev) => {
            if (this.props.onInput) {
                this.props.onInput(ev);
            }

            this.onInput(ev);
        };

        return React.createElement(this.constructor._tagName, propsCopy);
    }

    componentDidMount() {
        this.htmlElement.addEventListener('input', this._handleInputEvent);
    }

    componentWillUnmount() {
        this.htmlElement.removeEventListener('input', this._handleInputEvent);
    }

    // Preact updates element value automatically, React does not -- why?
    componentDidUpdate() {
        if (this.htmlElement) {
            this.htmlElement.value = this.valueParser(this.props.value);
        }
    }

    // Convenience getter for the underlying HTML element
    get htmlElement() {
        return this.ref.current;
    }

    // Convenience callback for subclasses
    onInput(ev) {}

}

const names = Object.keys(window.Guinda).filter(k => typeof(window.Guinda[k]) === 'function');
window.Guinda.React = {};

for (const name of names) {
    let cls = class extends GuindaComponent {};
    cls._tagName = 'g-' + name.toLowerCase();
    cls._attributeDescriptors = window.Guinda[name]._attributeDescriptors;
    window.Guinda.React[name + 'Component'] = cls;
}

Guinda.React.KnobComponent.defaultProps = {
    min: 0,
    max: 1,
    value: 0
};

Guinda.React.FaderComponent.defaultProps = {
    min: 0,
    max: 1,
    value: 0
};

Guinda.React.ButtonComponent.defaultProps = {
    value: false
};

})();
