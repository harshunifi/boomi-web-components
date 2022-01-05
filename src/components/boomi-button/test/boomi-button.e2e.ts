import { newE2EPage } from '@stencil/core/testing';

describe('boomi-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boomi-button></boomi-button>');

    const element = await page.find('boomi-button');
    expect(element).toHaveClass('hydrated');
  });
});
