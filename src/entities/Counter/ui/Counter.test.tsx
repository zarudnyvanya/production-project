import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender'
import { Counter } from './Counter'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('get title', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })

    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', async () => {
    const user = userEvent.setup()

    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })

    await user.click(screen.getByTestId('increment-btn'))

    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('decrement', async () => {
    const user = userEvent.setup()

    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })

    await user.click(screen.getByTestId('decrement-btn'))

    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
