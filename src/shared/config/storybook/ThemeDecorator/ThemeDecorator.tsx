/* eslint-disable react/display-name */
import { Decorator } from '@storybook/react/*'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => {
    return (
      <ThemeProvider>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    )
  }