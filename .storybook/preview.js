/* global window */

import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import customElements from '../custom-elements.json';

setCustomElements(customElements);

addParameters({
  docs: {
    inlineStories: false,
    iframeHeight: '200px',
  },
});

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context('../src', true, /\.src\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}

export const parameters = {
  options: {
    storySort: {
      order: ['Welcome', 'Button'],
    },
  },
};
