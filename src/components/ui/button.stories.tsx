import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'

import { Button, type ButtonState } from './button'

const buttonStates: ButtonState[] = [
  'Default',
  'Hover',
  'Pressed',
  'Focus',
  'Disabled',
  'Loading',
]

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Get Started',
    onClick: fn(),
  },
  argTypes: {
    state: {
      control: 'select',
      options: buttonStates,
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-space-12">
      {buttonStates.map((state) => (
        <Button key={state} state={state}>
          {state === 'Loading' ? 'Loading…' : 'Get Started'}
        </Button>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    state: 'Disabled',
  },
}

export const Loading: Story = {
  args: {
    state: 'Loading',
  },
}

export const ClickInteraction: Story = {
  args: {
    children: 'Get Started',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Get Started' })

    await expect(button).toBeEnabled()
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}
