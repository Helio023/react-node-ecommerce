import styled from 'styled-components';
const Container = styled.div`
  background-color: teal;
  padding: 15px;
`;
const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
`;

const Anouncement = () => {
  return (
    <Container>
      <Text>Super deal! Free shipping on Orders over $50</Text>
    </Container>
  );
};

export default Anouncement;
