import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader/SectionHeader';
import Product from './Product/Product';
import { publicRequest } from '../../../makeRequest';

const Container = styled.div`
  padding: 50px 30px;
`;
const ProductList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    category
      ? publicRequest
          .get(`/products?category=${category}`)
          .then((res) => setProducts(res.data.products))
      : publicRequest
          .get('/products')
          .then((res) => setProducts(res.data.products));
  }, [category]);

  return (
    <Container>
      <SectionHeader text='Popular products' />
      <ProductList>
        {products.map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </ProductList>
    </Container>
  );
};

export default Products;
