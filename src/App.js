import logo from './logo.svg';
import './App.css';
import Router from './config/Router';
import { Box } from '@mui/material';
import store from './config/redux/store/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Box>
      <Provider store={store}>
        <Router />
      </Provider>
    </Box>
  );
}

export default App;

