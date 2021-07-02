/*
 * Guinda - Audio widgets for web views
 * Copyright (C) 2021 Luciano Iam <oss@lucianoiam.com>
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

export default await (async () => {

    // Load library synchronously

    await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'awww.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    // Create exported object

    const lib = {
        ResizeHandle: ResizeHandle,
        Knob: Knob
    };

    // Nullify (some) loaded symbols

    ResizeHandle = null;
    Knob = null;

    return lib;

}) ();
