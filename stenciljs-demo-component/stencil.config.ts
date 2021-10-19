import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';


export const config: Config = {
  namespace: 'stenciljs-demo-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'stenciljs-demo-component',
      proxiesFile: '../stenciljs-react-wrapper/src/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
