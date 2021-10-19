import { newSpecPage } from '@stencil/core/testing';
import { DemoComponent } from '../demo-component';

describe('demo-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoComponent],
      html: `<demo-component></demo-component>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-component>
    `);
  });
});
