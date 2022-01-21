import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Anouncement from '../../components/Anouncemment/Anouncement';
import Footer from '../../components/Footer/Footer';
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 0 30px;
`;
const CartHeader = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  color: #bbb;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopBtns = styled.button`
  background-color: ${(props) =>
    props.color === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => (props.color === 'filled' ? 'white' : 'black')};
  border: ${(props) => (props.color === 'filled' ? 'none' : '1px solid black')};
  padding: 15px 30px;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  cursor: pointer;
`;
const Textbtns = styled.span`
  margin-left: 20px;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;
const TextBtnContainer = styled.div``;
const ProductContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid #eee;
  border-radius: 10px;
  max-height: 400px;
  padding: 10px;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;
const PriceDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;
const Details = styled.div``;
const DetText = styled.p`
  font-size: 18px;
  &:not(:first-child) {
    margin-top: 25px;
  }
`;

const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  margin-top: 25px;
`;

const AddRemoveBtns = styled.div`
  display: flex;
  align-items: center;
`;
const AddBtn = styled(Add)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const RemoveBtn = styled(Remove)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const Quantity = styled.span`
  margin: 0 5px;
  font-size: 30px;
`;
const PriceContainer = styled.p`
  margin-top: 25px;
  font-size: 40px;
  font-weight: 400;
`;

const SummaryTitle = styled.h2`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  align-items: center;
  
`;

const ProductsCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const SummaryText = styled.p`
  font-size: ${(props) => (props.size === 'big' ? '25px' : '18px')};
  font-weight: ${(props) => (props.size === 'big' ? 600 : 'normal')};
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  text-transform: capitalize;
  `;

const Button = styled.button`
  width: 100%;
  text-transform: capitalize;
  border-radius: 5px;
  font-size: 18px;
  background-color: #000;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px 30px;
  margin-top: 30px;
`;

const Cart = () => {
  return (
    <Container>
      <Header>
        <Navbar />
        <Anouncement />
        <Wrapper>
          <CartHeader>Your cart</CartHeader>
          <ButtonContainer>
            <TopBtns type='button'>Continue shopping</TopBtns>
            <TextBtnContainer>
              <Textbtns>Shopping cart (2)</Textbtns>
              <Textbtns>Your wishlist (0)</Textbtns>
            </TextBtnContainer>
            <TopBtns type='button' color='filled'>
              Checkout now
            </TopBtns>
          </ButtonContainer>

          <ProductContainer>
            <ProductsCont>
              <ProductDetails>
                <ProductDetail>
                  <Image src='https://i.ibb.co/hCJvCHn/bg.png' />
                  <Details>
                    <DetText>
                      <b>Product:</b> Name of the product here
                    </DetText>
                    <DetText>
                      <b>ID:</b> 135454412456
                    </DetText>
                    <Color />
                    <DetText>
                      <b>Size:</b> 32
                    </DetText>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <AddRemoveBtns>
                    <RemoveBtn />
                    <Quantity>2</Quantity>
                    <AddBtn />
                  </AddRemoveBtns>
                  <PriceContainer>$ 20</PriceContainer>
                </PriceDetail>
              </ProductDetails>
            </ProductsCont>
            <Summary>
              <SummaryTitle>Order summary</SummaryTitle>
              <SummaryText>
                Subtotal <span>$80</span>
              </SummaryText>
              <SummaryText>
                Estimated shiping <span>$5</span>
              </SummaryText>
              <SummaryText>
                Shiping discount <span>$5</span>
              </SummaryText>
              <SummaryText size='big'>
                Total <span>$80</span>
              </SummaryText>
              <Button >Checkout now</Button>
            </Summary>
          </ProductContainer>
        </Wrapper>
        <Footer />
      </Header>
    </Container>
  );
};

export default Cart;
