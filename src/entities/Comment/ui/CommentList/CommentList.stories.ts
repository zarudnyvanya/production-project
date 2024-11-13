import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
}

export default meta
type Story = StoryObj<typeof CommentList>

export const Default: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hi',
        user: {
          id: '1',
          username: 'admin',
          avatar: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg',
        },
      },
      {
        id: '2',
        text: 'bye',
        user: {
          id: '2',
          username: 'user',
          avatar: 'https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-14.webp',
        },
      },
    ],
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
