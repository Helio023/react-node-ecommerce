import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './global.css';

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
