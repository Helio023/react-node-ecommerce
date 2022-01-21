import styled from 'styled-components';
import Anouncement from '../../components/Anouncemment/Anouncement';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
const ProductImage = styled.div`
  height: 500px;
  flex: 1;
  border-radius: 10px;
  border: 1px solid #eee;
`;
const ProductInfo = styled.div`
  flex: 1;
  padding: 0 30px;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
`;
const Description = styled.p`
  margin: 25px 0;
`;
const Price = styled.p`
  font-size: 44px;
  font-weight: 200;
`;
const FilterContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const ColorFilter = styled.div`
  display: flex;
  align-items: center;
`;
const SizeFilter = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 26px;
  font-weight: 500;
  margin-right: 15px;
`;
const Color = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
`;
const Option = styled.option``;

const ProductToCard = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;
const AddRemoveBts = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  border: 2px solid teal;
  outline: none;
  padding: 15px 30px;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  margin-left: 200px;
  background-color: transparent;
`;
const Quantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 5px;
  width: 30px;
  border: 1px solid teal;
  border-radius: 5px;
  margin: 0 10px;
`;

const AddBtn = styled(Add)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const RemoveBtn = styled(Remove)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const ProductDetails = () => {
  return (
    <Container>
      <Header>
        <Navbar />
        <Anouncement />
        <Wrapper>
          <ProductImage>
            <Image src='https://i.ibb.co/Rzg7qp5/pexels-godisable-jacob-1024032-removebg.png' />
          </ProductImage>
          <ProductInfo>
            <Title>Product name</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              velit tenetur. Consequatur asperiores numquam inventore doloremque
              perspiciatis at veniam, fugit optio, quae adipisci corporis,
              tempora ipsam cum. Corrupti, ut ab.
            </Description>
            <Price>$ 20</Price>
            <FilterContainer>
              <ColorFilter>
                <FilterTitle>color</FilterTitle>
                <Color color='red' />
                <Color color='blue' />
                <Color color='yellow' />
              </ColorFilter>

              <SizeFilter>
                <FilterTitle>Size</FilterTitle>
                <Select>
                  <Option disabled selected>
                    Sizes
                  </Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                </Select>
              </SizeFilter>
            </FilterContainer>
            <ProductToCard>
              <AddRemoveBts>
                <RemoveBtn />
                <Quantity>1</Quantity> <AddBtn />
              </AddRemoveBts>
              <Button>Add to cart</Button>
            </ProductToCard>
          </ProductInfo>
        </Wrapper>
        <Footer />
      </Header>
    </Container>
  );
};

export default ProductDetails;
