import SwitchVue from "./Switch.vue"
import { Meta, StoryObj } from "@storybook/vue3"

const meta = {
    title: 'Example/Switch',
    component: SwitchVue,
    tags: ['autodocs'],
    argTypes: {
        selected: { control: 'select', options: [true, false] },
        disabled: { control: 'select', options: [true, false] },
        onClick: { action: 'clicked'}
    },
    args: {
        selected: false,
        disabled: false,
    }
} satisfies Meta<typeof SwitchVue>;

export default meta

type Story = StoryObj<typeof meta>

export const Selected: Story = {
    args: {
        selected: true
    }
}
export const Unselect: Story = {
    args: {
        selected: false
    }
}
export const Disabled: Story = {
    args: {
        disabled: true
    }
}