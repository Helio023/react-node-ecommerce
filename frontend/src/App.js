import { Routes, Route } from 'react-router-dom';
import Home from './core/pages/Home/Home';
import styled from 'styled-components';
import ProductPage from './core/pages/ProductsPage/ProductPage';
import ProductDetails from './core/pages/ProductDetails/ProductDetails';
import Register from './core/pages/Register/Register';
import Login from './core/pages/Login/Login';
import Cart from './core/pages/Cart/Cart';

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<ProductPage />} />
        <Route path='products/:productid' element={<ProductDetails />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </Container>
  );
};

export default App;
