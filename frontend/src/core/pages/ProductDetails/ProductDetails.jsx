import styled from 'styled-components';
import Anouncement from '../../components/Anouncemment/Anouncement';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { publicRequest } from '../../../makeRequest';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';

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
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    publicRequest
      .get(`products/${id}`)
      .then((res) => setProduct(res.data.product));
  }, [id]);

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({...product, quantity, size, color}))
   
  }

  return (
    <Container>
      <Header>
        <Navbar />
        <Anouncement />
        <Wrapper>
          <ProductImage>
            <Image src={product.image} />
          </ProductImage>
          <ProductInfo>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>$ {product.price}</Price>
            <FilterContainer>
              <ColorFilter>
                <FilterTitle>color</FilterTitle>
                {product.color?.map((c) => (
                  <Color color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </ColorFilter>

              <SizeFilter>
                <FilterTitle>Size</FilterTitle>
                <Select onChange={(e) => setSize(e.target.value)}>
                  <Option disabled>Sizes</Option>
                  {product.size?.map((s) => (
                    <Option key={s}>{s}</Option>
                  ))}
                </Select>
              </SizeFilter>
            </FilterContainer>
            <ProductToCard>
              <AddRemoveBts>
                <RemoveBtn onClick={handleRemoveQuantity} />
                <Quantity>{quantity}</Quantity>
                <AddBtn onClick={handleAddQuantity} />
              </AddRemoveBts>
              <Button onClick={handleAddToCart}>Add to cart</Button>
            </ProductToCard>
          </ProductInfo>
        </Wrapper>
        <Footer />
      </Header>
    </Container>
  );
};

export default ProductDetails;
