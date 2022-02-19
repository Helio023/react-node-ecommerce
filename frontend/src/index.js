import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import cartReducer from './core/redux/cartRedux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import './global.css';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

reactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
