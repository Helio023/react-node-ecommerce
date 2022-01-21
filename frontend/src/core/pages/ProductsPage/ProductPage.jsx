import styled from 'styled-components';
import Anouncement from '../../components/Anouncemment/Anouncement';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

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
  return (
    <Container>
      <Header>
        <Navbar />
        <Anouncement />
      </Header>
      <FilterContainer>
        <SectionHeader text='Dresses' />
        <Filters>
          <FilterLeft>
            <FilterTitle>
              Filter products:
              <Select>
                <Option disabled selected>
                  Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </FilterTitle>
          </FilterLeft>
          <FilterRight>
            <FilterTitle>
              Sort products:
              <Select>
                <Option selected disabled>
                  Newest
                </Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
              </Select>
            </FilterTitle>
          </FilterRight>
        </Filters>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductsPage;
