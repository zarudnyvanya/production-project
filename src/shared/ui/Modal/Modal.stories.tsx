import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    children: 'lorem ipsum some text form modal component',
    isOpen: true,
  },
}

export const Dark: Story = {
  args: {
    children: 'lorem ipsum some text form modal component',
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
