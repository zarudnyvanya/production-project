import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddCommentForm from './AddCommentForm'

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Default: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
}
