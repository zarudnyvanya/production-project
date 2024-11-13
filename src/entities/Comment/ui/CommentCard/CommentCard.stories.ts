import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const Default: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Text Comment lorem generate self to you',
      user: {
        id: '1',
        username: 'Pupkin',
        avatar: 'https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-14.webp',
      },
    },
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
