import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Avatar, AvatarSize } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg',
  },
}

export const SizeM: Story = {
  args: {
    src: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg',
    size: AvatarSize.M,
  },
}

export const SizeL: Story = {
  args: {
    src: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg',
    size: AvatarSize.L,
  },
}

export const SizeCustom: Story = {
  args: {
    src: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg',
    customSize: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
