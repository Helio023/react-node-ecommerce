import styled from 'styled-components';
import Anouncement from '../../components/Anouncemment/Anouncement';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;
const FilterContainer = styled.div`
  padding: 30px;
`;
const Filters = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterLeft = styled.div`
  flex: 1;
`;
const FilterRight = styled.div`
  flex: 1;
`;
const FilterTitle = styled.span`
  font-size: 20px;
`;
const Select = styled.select`
  margin-left: 15px;
  width: 100px;
  border-radius: 5px;
  padding: 5px 10px;
`;
const Option = styled.option``;

const ProductsPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const val = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: val,
    });
  };

  return (
    <Container>
      <Header>
        <Navbar />
        <Anouncement />
      </Header>
      <FilterContainer>
        <SectionHeader text={category} />
        <Filters>
          <FilterLeft>
            <FilterTitle>
              Filter products:
              <Select name='color' onChange={handleFilters}>
                <Option disabled>Color</Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
              </Select>
              <Select name='size' onChange={handleFilters}>
                <Option disabled>Size</Option>
                <Option>xs</Option>
                <Option>s</Option>
                <Option>m</Option>
                <Option>l</Option>
                <Option>xl</Option>
              </Select>
            </FilterTitle>
          </FilterLeft>
          <FilterRight>
            <FilterTitle>
              Sort products:
              <Select onChange={e => setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="des">Price (desc)</Option>
              </Select>
            </FilterTitle>
          </FilterRight>
        </Filters>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
      <Footer />
    </Container>
  );
};

export default ProductsPage;
