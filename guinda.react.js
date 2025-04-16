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
      const attributeDescriptors = clazz._attributeDescriptors || [];
      const defaultProps = {};

      let valueParser = null;

      for (const descriptor of attributeDescriptors) {
         if (descriptor.parser) {
            if (descriptor.key === 'value') {
               valueParser = descriptor.parser;
            } else {
               defaultProps[descriptor.key] = descriptor.default;
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
