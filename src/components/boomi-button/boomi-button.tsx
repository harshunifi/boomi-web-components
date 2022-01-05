import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'boomi-button',
  styleUrl: 'boomi-button.css',
  shadow: true,
})
export class BoomiButton {
  /**
   * The type of button, primary or secondary
   */
  @Prop() flavor: string;

  // private getFlavor(): string {
  //   return this.flavor;
  // }

  render() {

    return (
      <Host>
        <button class={this.flavor}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
