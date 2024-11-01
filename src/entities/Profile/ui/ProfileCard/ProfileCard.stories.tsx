import type { Meta, StoryObj } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
  args: {
    data: {
      age: '22',
      avatar: '',
      city: 'Rostov',
      country: Country.Russia,
      currency: Currency.RUB,
      firstName: 'Ivan',
      lastName: 'Pupkin',
      username: 'petya',
    },
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const WithError: Story = {
  args: {
    error: 'Error',
  },
}
