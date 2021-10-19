import { Component, h, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'demo-component',
  styleUrl: 'demo-component.css',
  shadow: true,
})
export class DemoComponent {

 /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World!! I'm {this.getText()}</div>;
  }

}
