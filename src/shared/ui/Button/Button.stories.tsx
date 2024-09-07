import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Text',
  },
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Background: Story = {
  args: {
    children: 'background',
    theme: ThemeButton.BACKGROUND,
  },
}

export const BackgroundInverted: Story = {
  args: {
    children: 'backgroundInverted',
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
}

export const SquareSizeM: Story = {
  args: {
    children: '<',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
}

export const SquareSizeL: Story = {
  args: {
    children: '<',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
}

export const SquareSizeXL: Story = {
  args: {
    children: '<',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    theme: ThemeButton.BACKGROUND,
    size: ButtonSize.M,
    disabled: true,
  },
}
