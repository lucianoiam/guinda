/*
 * Guinda - Audio widgets for web views
 * Copyright (C) 2021-2023 Luciano Iam <oss@lucianoiam.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

(() => {

class GuindaComponent extends React.Component {

    constructor() {
        super();

        this.ref = React.createRef(); 
        this.valueParser = this.constructor._attributeDescriptors.find(d => d.key == 'value').parser;
    }

    render() {
        const props = Object.assign({}, this.props);

        props.ref = this.ref;
        props.value = this.valueParser(this.props.value); // initial value

        props.onInputCapture = (ev) => {
            if (this.props.onInput) {
                this.props.onInput(ev.nativeEvent || /*Preact*/ev);
                ev.stopPropagation(); // Preact
            }
        }

        // React - update value. Not needed for Preact?
        if (this.ref.current) {
            this.ref.current.value = this.valueParser(this.props.value);
        }

        return React.createElement(this.constructor._tagName, props);
    }

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
