import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'

import { Input } from './input'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'เช่น p-space-16 หรือ text-xl',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: (args) => (
    <label className="grid max-w-sm gap-space-8" htmlFor="storybook-utility-input">
      <span className="text-sm font-bold">Utility class</span>
      <Input {...args} id="storybook-utility-input" />
    </label>
  ),
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    value: 'invalid value',
    readOnly: true,
  },
}

export const TypeInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')

    await userEvent.type(input, 'text-xl')
    await expect(input).toHaveValue('text-xl')
  },
}
