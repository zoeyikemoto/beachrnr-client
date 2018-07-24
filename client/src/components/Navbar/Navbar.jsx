import React from 'react';
import styled from 'styled-components';
import { Menu, Image } from 'semantic-ui-react';
import NavLink from 'react-router-dom/NavLink';
import icon from '../../../theming/images/icon.png'

const IconImage = styled(Image)`
  margin: '30px 10px';
`;

const StyledMenu = styled(Menu)`
  height: 90px;
  box-shadow: none !important;
  border: none !important;
  position: fixed;
`;

let Navbar = () => {
  return (
    <StyledMenu borderless pointing fixed='top'>
      <Menu.Item position="left">
        <NavLink to='/' activeClassName='active'>
          <IconImage src={icon} size='mini'/>
        </NavLink>
      </Menu.Item>
    </StyledMenu>
  )
}

module.exports = Navbar;
