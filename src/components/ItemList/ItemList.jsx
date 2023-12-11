import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'

const ItemList = ({ data }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-around">

        {data.map((productos) => (
            <Box 
              key={productos.id} 
              boxShadow='lg' 
              m={2}
              maxW="sm"  
              minW="sm"
              >
                <Item {...productos} />
            </Box>
        ))}
    </Flex>
  )
}

export default ItemList
