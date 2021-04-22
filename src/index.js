import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// react redux .....
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//  react redux ends here ..... 
//  provider will flow entire data of the redux through the application .
import rootReducer from './Services/Reducer/index';
const store = createStore(rootReducer);
// console.log({store});

ReactDOM.render(
 <Provider store={store}>
 <App />
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
