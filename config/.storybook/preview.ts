import { StoreDecorator } from './../../src/shared/config/storybook/StoreDecorator/StoreDecorator'
import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from './../../src/app/providers/ThemeProvider'
import { StyleDecorator } from './../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import type { Preview } from '@storybook/react'
import './../../src/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator({})],
}

export default preview
