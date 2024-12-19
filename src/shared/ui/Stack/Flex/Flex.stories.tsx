import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from './Flex'

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
}

export default meta
type Story = StoryObj<typeof Flex>

export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
}

export const RowGap4: Story = {
  args: {
    gap: 4,
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
}

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
}
