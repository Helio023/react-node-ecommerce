import styled from '@emotion/styled';
import { SendOutlined } from '@mui/icons-material';
import SectionHeader from '../SectionHeader/SectionHeader';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  padding: 50px 30px;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  border-radius: 5px;
  flex-direction: column;
`;
const Description = styled.p`
  font-size: 24px;
  margin-bottom: 15px;
`;
const InputContainer = styled.div`
  background-color: #fff;
  width: 50%;
  border: 1px solid lightgray;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;
const Input = styled.input`
  height: 100%;
  width: 90%;
  padding-left: 20px;
  border: none;
  font-size: 18px;
`;
const Button = styled.button`
    width: 10%;
    height: 100%;
    outline: 1px solid lightgray;
    border: none;
    background-color: teal;
    color: #fff;
    border-radius: 0 5px 5px 0;

`;
const Icon = styled(SendOutlined)``;

const NewsLetter = () => {
  return (
    <Container>
      <TitleContainer>
        <SectionHeader text='Newsletter' />
      </TitleContainer>
      <Description>Get timely updates for your favourite products!</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Icon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
