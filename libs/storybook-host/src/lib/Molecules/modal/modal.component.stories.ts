import { argsToTemplate, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ModalComponent } from '@goias-ssi/modal';
import { ButtonIdGoiasComponent } from '@goias-ssi/button-id-goias';
import { TypographyComponent } from '@goias-ssi/typography';

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonIdGoiasComponent,
        TypographyComponent
      ]
    })
  ],
  render: (args) => ({
    props: args,
    template: `
      <go-modal ${argsToTemplate(args)}>
      <go-typography variant="normal">This is an example of modal content.</go-typography>
      <button-id-goias (click)="isOpen = false" label="Autenticar"></button-id-goias>
      </go-modal>
    `,
  })
};
export default meta;
type Story = StoryObj<ModalComponent>;

export const Open: Story = {
  args: {
    isOpen: true,
    modalTitle: 'Example Modal Title'
  },
};

export const Closed: Story = {
  args: {
    ...Open.args,
    isOpen: false
  },
};
