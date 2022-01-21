import styled from 'styled-components';

const Header = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
  color: gray;
  text-transform: uppercase;
`;
const SectionHeader = ({ text }) => {
  return <Header>{text}</Header>;
};

export default SectionHeader;
