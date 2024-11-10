import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'lorem ipsum blalbla',
  },
}

export const onlyTitle: Story = {
  args: {
    title: 'Title',
  },
}

export const onlyText: Story = {
  args: {
    text: 'lorem ipsum blalbla',
  },
}

export const sizeTextL: Story = {
  args: {
    text: 'lorem ipsum blalbla',
    size: TextSize.L,
  },
}

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'lorem ipsum blalbla',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const onlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const onlyTextDark: Story = {
  args: {
    text: 'lorem ipsum blalbla',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'lorem ipsum blalbla',
    theme: TextTheme.ERROR,
  },
}

export const ErrorDark: Story = {
  args: {
    title: 'Title',
    text: 'lorem ipsum blalbla',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
