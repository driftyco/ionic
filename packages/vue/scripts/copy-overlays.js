const DocsJson = require('@ionic/core/dist/docs.json');
const fs = require('fs');

function generateOverlays() {
  const components = [
    {
      tag: 'ion-action-sheet',
      controller: 'actionSheetController',
      name: 'IonActionSheet'
    },
    {
      tag: 'ion-alert',
      controller: 'alertController',
      name: 'IonAlert'
    },
    {
      tag: 'ion-loading',
      controller: 'loadingController',
      name: 'IonLoading'
    },
    {
      tag: 'ion-picker',
      controller: 'pickerController',
      name: 'IonPicker'
    },
    {
      tag: 'ion-toast',
      controller: 'toastController',
      name: 'IonToast'
    }
  ]

  let controllerImports = [];
  let componentImports = [];
  let componentDefinitions = [];

  components.forEach(component => {
    const docsBlock = getDocsBlock(component.tag);
    const props = getPropsFromDocsBlock(docsBlock);

    componentImports.push(`import { ${component.name} as ${component.name}Cmp } from '@ionic/core/components/${component.tag}.js'`);
    controllerImports.push(component.controller);
    componentDefinitions.push(`
export const ${component.name} = /*@__PURE__*/ defineOverlayContainer<JSX.${component.name}>('${component.tag}', ${component.name}Cmp, [${props.join(', ')}], ${component.controller});
    `);
  });

  const template = `/* auto-generated vue overlay proxies */

import {
  JSX,
  ${controllerImports.join(',\n  ')},
} from '@ionic/core/components';

${componentImports.join('\n')}

import { defineOverlayContainer } from '../vue-component-lib/overlays';
${componentDefinitions.join('')}
`;

  fs.writeFileSync('./src/components/Overlays.ts', template);
}

function getDocsBlock(tag) {
  return DocsJson.components.find(block => block.tag === tag);
}

function getPropsFromDocsBlock(docsBlock) {
  return docsBlock.props.map(prop => `'${prop.name}'`);
}

function main() {
  generateOverlays();
}

main();
