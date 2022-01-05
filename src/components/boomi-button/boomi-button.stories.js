import { html } from 'lit-html';

export default {
  title: 'Components/Boomi Button',
  component: 'boomi-button', // which is also found in the `custom-elements.json`
  argTypes: {
    flavor: { control: { type: 'select', options: ["primary", "secondary"] } },
    text: { control: {type: 'text'}}
  }
};

export const basic = ({ flavor, text }) => html`
<boomi-button flavor="secondary">Secondary Button</boomi-button>
<boomi-button flavor="primary">Primary Button</boomi-button>
</br>
</br>
<boomi-button flavor="${flavor || 'primary'}">${text || "Play with me!"}</boomi-button>
`;
basic.args = {
  flavor: "primary",
  text: 'Play with me!'
};