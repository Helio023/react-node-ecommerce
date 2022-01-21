import styled from 'styled-components';
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;
const FormContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const FormBase = ({ children }) => {
  return (
    <Container>
      <FormContainer>{children}</FormContainer>
    </Container>
  );
};

export default FormBase;
