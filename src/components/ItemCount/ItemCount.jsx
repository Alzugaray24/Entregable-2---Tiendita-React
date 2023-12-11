import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Box, Heading } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, increment, decrement } = useCounter(initialValue, stock)

  return (
    <Box ml={2}>
        <Button colorScheme='blue' onClick={decrement}>-</Button>
        <Heading>{count}</Heading>
        <Button colorScheme='blue' onClick={increment}>+</Button>
        <Button onClick={()=> onAdd(count)}>Agregar al carrito</Button>
    </Box>
  )
}

export default ItemCount
