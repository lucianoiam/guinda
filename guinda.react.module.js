// SPDX-FileCopyrightText: 2025 Luciano Iam <oss@lucianoiam.com>
// SPDX-License-Identifier: MIT

import * as preact from '/vendor/preact.module.js';

window.React = { createElement: preact.h, ...preact };

await import('./guinda.js');
await import('./guinda.react.js');

export const KnobComponent = window.Guinda.React.KnobComponent;
export const FaderComponent = window.Guinda.React.FaderComponent;
export const ButtonComponent = window.Guinda.React.ButtonComponent;

delete window.Guinda;
