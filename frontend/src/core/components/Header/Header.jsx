import styled from 'styled-components';
const Container = styled.header``;

const Header = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Header;
