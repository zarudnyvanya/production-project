import { Meta, StoryObj } from '@storybook/react/*'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
}

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
