import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'light',
        password: '123',
      },
    }),
  ],
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: {
        username: 'dark',
        password: '123',
      },
    }),
  ],
}

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'error',
        password: '123',
        error: 'Ошибка',
      },
    }),
  ],
}

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'loading',
        password: '123',
        isLoading: true,
      },
    }),
  ],
}
