import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Укажите опцию',
  },
}

export const WithLabelAndOptions: Story = {
  args: {
    label: 'Укажите опцию',
    options: [
      { value: '1', content: 'React' },
      { value: '2', content: 'Vue' },
      { value: '3', content: 'Angular' },
    ],
  },
}
