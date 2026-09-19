import { StrictMode } from 'react'
import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <StrictMode>
        <div className="min-h-screen bg-surface-canvas p-space-24 text-text-primary">
          <Story />
        </div>
      </StrictMode>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
}

export default preview
