import { Box } from '@chakra-ui/react';
import { BiCart } from 'react-icons/bi';
import './CartWidget.css'
const CartWidget = () => {
    return (
        <Box width={'40%'} ml={4} display="flex" align="center" justify={'space-around'}>
            <BiCart size={50} color='#fff' />
            <span className='cartQuantity'>3</span>
        </Box>
    )
}

export default CartWidget
