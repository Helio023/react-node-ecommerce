import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from '../../utils/data';
import { useState } from 'react';

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
  display: flex;
  position: relative;
`;

const SlideWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  overflow-x: hidden;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  background-color: #${(props) => props.bg};
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: transform 1.3s ease;
`;
const SlideInfo = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SlideImage = styled.div`
  width: 50vw;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 999;
  border: 1px solid #bbb;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
`;
const SubTitle = styled.h4`
  font-size: 18px;
  margin-top: 15px;
  font-weight: 500;
  text-transform: uppercase;
`;
const Button = styled.button`
  width: max-content;
  margin-top: 20px;
  padding: 15px 30px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  font-size: 20px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <SlideWrapper>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id} slideIndex={slideIndex}>
            <SlideImage>
              <Image src={item.img} alt={item.title} />
            </SlideImage>
            <SlideInfo>
              <Title>{item.title}</Title>
              <SubTitle>{item.desc}</SubTitle>
              <Button>Shop now</Button>
            </SlideInfo>
          </Slide>
        ))}
      </SlideWrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
