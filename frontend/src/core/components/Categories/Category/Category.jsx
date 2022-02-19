import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 50vh;
  border-radius: 5px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  outline: none;
  padding: 15px 30px;
  background-color: #fff;
  color: gray;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Category = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default Category;
