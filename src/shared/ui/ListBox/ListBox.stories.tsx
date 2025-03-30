import { Meta, StoryObj } from '@storybook/react/'
import { ListBox } from './ListBox'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta = {
  title: 'shared/ListBox',
  component: ListBox,
}

export default meta

type Story = StoryObj<typeof ListBox>

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
