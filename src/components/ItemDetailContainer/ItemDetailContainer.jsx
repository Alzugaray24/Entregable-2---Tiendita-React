import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getProductById } from '../../data/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setIsLoading(true)
        getProductById(itemId)
            .then((prod) => {
                setProduct(prod)
            })
            .catch((err) => console.log(err))
            .finally(()=> {
                setIsLoading(false)})
    }, [itemId])


  return (
    <Flex direction="column" align="center" m={4}>
      <Box>
        <Heading>{product.nombre}</Heading>
      </Box>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <ItemDetail {...product} />
      )}
    </Flex>
  )
}

export default ItemDetailContainer
