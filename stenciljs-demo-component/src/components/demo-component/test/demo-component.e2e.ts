import { newE2EPage } from '@stencil/core/testing';

describe('demo-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-component></demo-component>');

    const element = await page.find('demo-component');
    expect(element).toHaveClass('hydrated');
  });
});
