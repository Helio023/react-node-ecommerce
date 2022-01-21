import React from 'react';
import styled from 'styled-components';
import { SearchOutlined, MailOutline } from '@mui/icons-material';
import { Badge } from '@mui/material';
import WebLogo from '../../Logo/Logo';

// Styles

const Nav = styled.nav`
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const NavCenter = styled.div`
  flex: 1;
  text-align: center;
`;

const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Language = styled.div``;
const SearchContainer = styled.div`
  padding: 0 10px;
  border-radius: 5px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  height: 100%;
  padding: 8px 25px 8px 5px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
const CartIcon = styled(SearchOutlined)`
  color: gray;
  transform: translateX(-25px);
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
const MenuItem = styled.li`
  margin-right: 20px;
  color: gray;
`;

const MailIcon = styled(MailOutline)`
  color: gray;
`;

//Component
const Navbar = () => {
  return (
    <Nav>
      <NavLeft>
        <Language>Lang</Language>
        <SearchContainer>
          <SearchInput />
          <CartIcon />
        </SearchContainer>
      </NavLeft>
      <NavCenter>
        <WebLogo />
      </NavCenter>
      <NavRight>
        <Menu>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <MailIcon />
            </Badge>
          </MenuItem>
        </Menu>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
