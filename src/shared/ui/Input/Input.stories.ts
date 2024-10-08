import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    placeholder: 'Введите значение в инпут',
    value: 'input',
  },
}

export const Dark: Story = {
  args: {
    placeholder: 'Введите значение в инпут',
    value: 'input',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
