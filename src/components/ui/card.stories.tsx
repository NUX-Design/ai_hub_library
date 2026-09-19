import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Card anatomy</CardTitle>
        <CardDescription>Reusable header, content and footer slots.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text-secondary">Content stays readable across the design themes.</p>
      </CardContent>
      <CardFooter>
        <span className="text-sm font-bold">Ready to build?</span>
      </CardFooter>
    </Card>
  ),
}

export const Compact: Story = {
  render: () => (
    <Card className="w-full max-w-sm" size="sm">
      <CardHeader>
        <CardTitle>Compact card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text-secondary">A smaller spacing variant.</p>
      </CardContent>
    </Card>
  ),
}
