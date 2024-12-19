import { Flex, FlexProps } from '../Flex/Flex'

type VStack = Omit<FlexProps, 'direction'>

export const VStack = (props: VStack) => {
  const { align = 'start' } = props

  return <Flex {...props} direction="column" align={align} />
}
