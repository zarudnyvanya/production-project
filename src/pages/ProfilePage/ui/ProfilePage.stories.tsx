import { Meta, StoryObj } from '@storybook/react/*'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'

const meta: Meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
