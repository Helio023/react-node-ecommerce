import styled from 'styled-components';
import { categories } from '../../utils/data';
import SectionHeader from '../SectionHeader/SectionHeader';
import Category from './Category/Category';

const Container = styled.div`
  padding: 50px 30px;
`;

const CategContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Categories = () => {
  return (
    <Container>
      <SectionHeader text='Categories' />
      <CategContainer>
        {categories.map((item) => (
          <Category item={item} key={item.id}/>
        ))}
      </CategContainer>
    </Container>
  );
};

export default Categories;
