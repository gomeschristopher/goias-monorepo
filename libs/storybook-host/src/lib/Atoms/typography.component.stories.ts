import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@goias-ssi/typography';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
  render: (args) => ({
    props: args,
    template: `
    <go-typography ${argsToTemplate(args)}>
      Text
    </go-typography>
    `
  })
};

export default meta;

type Story = StoryObj<TypographyComponent>;

export const Primary: Story = {
  args: {
    variant: 'title3',
  },
};
