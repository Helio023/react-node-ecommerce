import styled from 'styled-components';
import {
  FacebookOutlined,
  YouTube,
  Instagram,
  LocationOnOutlined,
  Phone,
  EmailOutlined,
} from '@mui/icons-material';
import Logo from '../../Logo/Logo';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 50px 30px;
`;
const FooterLeft = styled.div`
  flex: 1;
`;
const FooterCenter = styled.div`
  flex: 1;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterRight = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Description = styled.p`
  margin-top: 25px;
`;
const SocialContainer = styled.div`
  margin-top: 25px;
  display: flex;
`;
const IconLink = styled.a`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${(props) => props.color};
`;

const Facebook = styled(FacebookOutlined)`
  color: #fff;
`;
const Insta = styled(Instagram)`
  color: #fff;
`;
const Yb = styled(YouTube)`
  color: #fff;
`;

const FooterTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 25px;
`;
const Menu = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 15px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterLeft>
        <Logo />
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cum
          deleniti iusto rem et nihil, atque aliquid consectetur illo non est
          deserunt mollitia possimus, tempora quae quis iure placeat. Earum?
        </Description>
        <SocialContainer>
          <IconLink href='www.facebook.com' color='4267B2'>
            <Facebook />
          </IconLink>
          <IconLink href='www.youtube.com' color='FF0000'>
            <Yb />
          </IconLink>
          <IconLink href='www.instagram.com' color='CF2872'>
            <Insta />
          </IconLink>
        </SocialContainer>
      </FooterLeft>
      <FooterCenter>
        <FooterTitle>Useful links</FooterTitle>
        <Menu>
          <Item>Home</Item>
          <Item>Cart</Item>
          <Item>Man fashion</Item>
          <Item>Woman fashion</Item>
          <Item>Acessories</Item>
          <Item>My account</Item>
          <Item>Order tracking</Item>
          <Item>Wishlist</Item>
          <Item>Terms</Item>
        </Menu>
      </FooterCenter>
      <FooterRight>
        <FooterTitle>Contact</FooterTitle>
        <Menu>
          <Item>
            <LocationOnOutlined style={{ marginRight: '15px' }} /> Chambone-3,
            Maxixe, Inhambane
          </Item>
          <Item>
            <Phone style={{ marginRight: '15px' }} /> +258845031480
          </Item>
          <Item>
            <EmailOutlined style={{ marginRight: '15px' }} />{' '}
            helioengracialipinze@gmail.com
          </Item>
        </Menu>
      </FooterRight>
    </Container>
  );
};

export default Footer;
