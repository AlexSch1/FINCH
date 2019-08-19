import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './assets/main.sass';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './redux/index';
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from 'react-router-dom';


const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));