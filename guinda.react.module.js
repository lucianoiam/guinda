// SPDX-FileCopyrightText: 2025 Luciano Iam <oss@lucianoiam.com>
// SPDX-License-Identifier: MIT

import * as preact from 'preact';

window.React = { createElement: preact.h, ...preact };

await import('./guinda.js');
await import('./guinda.react.js');

const R = window.Guinda.React;

export const KnobComponent = R.KnobComponent;
export const FaderComponent = R.FaderComponent;
export const ButtonComponent = R.ButtonComponent;

delete window.Guinda;
