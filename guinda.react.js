// SPDX-FileCopyrightText: 2021-2025 Luciano Iam <oss@lucianoiam.com>
// SPDX-License-Identifier: MIT

(() => {

   const createElement =
      (typeof React !== 'undefined' && typeof React.createElement === 'function') ? React.createElement :
      (typeof h === 'function') ? h :
      null;

   if (! createElement) {
      throw new Error('No valid createElement function found');
   }

   const R = {};

   for (const [name, clazz] of Object.entries(window.Guinda)) {
      const attributes = clazz._attributes || [];
      const defaultProps = {};

      let valueParser = null;

      for (const attr of attributes) {
         if (attr.parser) {
            if (attr.key === 'value') {
               valueParser = attr.parser;
            } else if (attr.key === 'scale') {
               // TODO
            } else {
               defaultProps[attr.key] = attr.default;
            }
         }
      }

      const Component = function (props) {
         return createElement('g-' + name.toLowerCase(), {
            ...props,
            value: valueParser?.(props.value) ?? props.value
         });
      };

      const className = `${name}Component`;

      Component.defaultProps = defaultProps;
      Component.displayName = className;

      R[className] = Component;
   }

   window.Guinda.React = R;

})();
