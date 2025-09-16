import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonIdGoiasComponent } from '@goias/button-id-goias';

const meta: Meta<ButtonIdGoiasComponent> = {
    component: ButtonIdGoiasComponent,
}

export default meta;

type Story = StoryObj<ButtonIdGoiasComponent>;

export const PrimaryButton: Story = {};
export const SecondaryButton: Story = {};