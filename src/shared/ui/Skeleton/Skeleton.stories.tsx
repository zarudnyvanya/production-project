import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './Skeleton'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  args: {
    width: 300,
    height: 300,
  },
}

export const withBorderRadius: Story = {
  args: {
    width: 300,
    height: 300,
    borderRadius: 30,
  },
  decorators: [ThemeDecorator(Theme.BLUE)],
}

export const Circle: Story = {
  args: {
    width: 300,
    height: 300,
    borderRadius: '50%',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Full: Story = {
  args: {
    width: '100%',
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
