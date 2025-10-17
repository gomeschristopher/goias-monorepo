import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonIdGoiasComponent } from '@goias-ssi/button-id-goias';

const meta: Meta<ButtonIdGoiasComponent> = {
    component: ButtonIdGoiasComponent,
}

export default meta;

type Story = StoryObj<ButtonIdGoiasComponent>;

export const PrimaryButton: Story = {
    args: {
        label: 'Entrar com ID Goiás',
        disabled: false,
        variant: 'primary'
    }
};

export const SecondaryButton: Story = {
    args: {
        ...PrimaryButton.args,
        variant: 'secondary'
    }
};

export const DisabledButton: Story = {
    args: {
        ...PrimaryButton.args,
        disabled: true
    }
};