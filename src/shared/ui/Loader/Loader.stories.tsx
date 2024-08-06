import { Meta, StoryObj } from '@storybook/react/'
import { Loader } from './Loader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta = {
  title: 'shared/Loader',
  component: Loader,
}

export default meta

type Story = StoryObj<typeof Loader>

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
