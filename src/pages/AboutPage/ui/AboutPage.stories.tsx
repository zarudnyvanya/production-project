import { Meta, StoryObj } from '@storybook/react/*'
import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
}

export default meta

type Story = StoryObj<typeof AboutPage>

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
