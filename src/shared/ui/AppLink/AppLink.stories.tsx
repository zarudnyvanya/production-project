import type { Meta, StoryObj } from '@storybook/react/'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta = {
  title: 'shared/AppLink',
  component: AppLink,
}

export default meta

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  args: {
    children: 'link',
    theme: AppLinkTheme.PRIMARY,
  },
}

export const PrimaryDark: Story = {
  args: {
    children: 'link',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Secondary: Story = {
  args: {
    children: 'link',
    theme: AppLinkTheme.SECONDARY,
  },
}

export const SecondaryDark: Story = {
  args: {
    children: 'link',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
