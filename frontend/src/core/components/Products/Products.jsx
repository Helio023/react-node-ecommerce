import styled from 'styled-components';
import { popularProducts } from '../../utils/data';
import SectionHeader from '../SectionHeader/SectionHeader';
import Product from './Product/Product';

const Container = styled.div`
  padding: 50px 30px;
`;
const ProductList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      <SectionHeader text='Popular products' />
      <ProductList>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ProductList>
    </Container>
  );
};

export default Products;
