import styled from 'styled-components';
import {
  ShoppingBagOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all .5s ease;
`;

const Container = styled.div`
  background-color: #f5fbfd;
  min-width: 280px;
  height: 350px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 999;
`;

const Icon = styled.div`
  margin-right: 15px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  transform: scale(1);

  &:hover {
    background-color: #000;
    color: #fff;
    transform: scale(1.18);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <ShoppingBagOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
