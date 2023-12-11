import React from 'react'
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
const Item = ({ id, nombre, img, precio }) => {

  return (
    <Card maxW='sm' >
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius='lg'
          boxSize='100%'
          objectFit='cover' 
          h='400px' 
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            <Link to={`/product/${id}`}>
            Ver detalle
            </Link>
          </Button>
        </ButtonGroup>
        {/* <ItemCount initial={1} stock={5} /> */}
      </CardFooter>
    </Card>
  )
}

export default Item
