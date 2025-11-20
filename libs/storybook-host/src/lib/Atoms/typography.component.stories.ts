import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@goias-ssi/typography';

type TypographyAndCustomArgs = TypographyComponent & { text: string }

const meta: Meta<TypographyAndCustomArgs> = {
  component: TypographyComponent,
  args: {
    text: 'Texto atualizado'
  },
  render: ({ text, ...args }) => ({
    props: args,
    template: `
    <go-typography ${argsToTemplate(args)}>
      ${text}
    </go-typography>
    `
  }),
  parameters: {
    controls: {
      include: ['variant', 'size', 'text']
    }
  }
};

export default meta;

type Story = StoryObj<TypographyAndCustomArgs>;

export const Title1: Story = {
  args: {
    variant: "title1",
    text: "Texto atualizado 123"
  },
};

export const Title2: Story = {
  args: {
    variant: "title2"
  },
};

export const TextLarge: Story = {
  args: {
    variant: "normal"
  },
};

export const TextMedium: Story = {
  args: {
    ...TextLarge.args,
    size: 'md'
  },
};

export const Title2WithMediumSize: Story = {
  args: {
    ...Title2.args,
    size: 'md'
  },
};

export const Paragraph: Story = {
  args: {
    ...TextLarge.args,
  },
  render: (args) => ({
    props: args,
    template: `
    <p>
      <go-typography ${argsToTemplate(args)}>
        Novo conteúdo
      </go-typography>
    </p>
    `
  })
};