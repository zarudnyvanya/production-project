import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
}

export default meta
type Story = StoryObj<typeof Code>

export const Primary: Story = {
  args: {
    text: "const server = jsonServer.create()\n const router = jsonServer.router(path.resolve(__dirname, 'db.json'))\n server.use(jsonServer.defaults({}))",
  },
}

export const Dark: Story = {
  args: {
    text: "const server = jsonServer.create()\n const router = jsonServer.router(path.resolve(__dirname, 'db.json'))\n server.use(jsonServer.defaults({}))",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Blue: Story = {
  args: {
    text: "const server = jsonServer.create()\n const router = jsonServer.router(path.resolve(__dirname, 'db.json'))\n server.use(jsonServer.defaults({}))",
  },
  decorators: [ThemeDecorator(Theme.BLUE)],
}
