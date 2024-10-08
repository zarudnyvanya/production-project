import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('To be in the document', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('Test clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toHaveClass('clear')
  })
})
