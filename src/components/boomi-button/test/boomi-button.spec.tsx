import { newSpecPage } from '@stencil/core/testing';
import { BoomiButton } from '../boomi-button';

describe('boomi-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoomiButton],
      html: `<boomi-button></boomi-button>`,
    });
    expect(page.root).toEqualHtml(`
      <boomi-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boomi-button>
    `);
  });
});
