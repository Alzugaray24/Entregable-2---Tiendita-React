import React from 'react';
import { Flex, Box, Spacer, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  const navigate = useNavigate();

  const navigateToCategory = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <Flex p="4" className='navFlex' align="center">
      <Box p="2">
        <Heading size="md" color="white">
          <Link to={'/'}>
            <img src={logo} width={'60%'} alt="Logo" />
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box display="flex" alignItems="center">
        <Link to="/" color="white" mr="4">
          Inicio
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />} width="180px">
            Categorías
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigateToCategory('Laptops')}>Laptops</MenuItem>
            <MenuItem onClick={() => navigateToCategory('Accesorios')}>Accesorios</MenuItem>
            <MenuItem onClick={() => navigateToCategory('Monitores')}>Monitores</MenuItem>
          </MenuList>
        </Menu>
        <CartWidget />
      </Box>
    </Flex>
  );
};

export default NavBar;
