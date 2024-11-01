import { Meta, StoryObj } from '@storybook/react/*'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const meta: Meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const Dark: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
    ThemeDecorator(Theme.DARK),
  ],
}
