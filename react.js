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
        
        this._onInput = (ev) => {
            if (this.props.input) {
                this.props.input(ev.value);
            }

            this.onInput(ev.value);
        };
    }

    render() {
        this.ref = React.createRef();

        let props = this.props;
        props.ref = this.ref;

        return React.createElement(this.constructor.tagName, props);
    }

    componentDidMount() {
        this.ref.current.addEventListener('input', this._onInput);
    }

    componentWillUnmount() {
        this.ref.current.removeEventListener('input', this._onInput);
    }

    onInput(val) {}

}

window.Guinda.React = {};
const names = Object.keys(window.Guinda);

for (const name of names) {
    let cls = class extends GuindaComponent {};
    cls.tagName = 'g-' + name.toLowerCase();
    window.Guinda.React[name + 'Component'] = cls;
}

Guinda.React.KnobComponent.defaultProps = {
    min: 0,
    max: 1,
    now: 0,
    defaultValue: 0
};

Guinda.React.FaderComponent.defaultProps = {
    min: 0,
    max: 1,
    now: 0,
    defaultValue: 0
};

Guinda.React.ButtonComponent.defaultProps = {
    now: false,
    defaultValue: false
};

})();
