import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from "./AppRoutes";
import {Provider} from "react-redux";
import configureStore from "./shared/redux/confitureStore";

ReactDOM.render(
    <Provider store={configureStore}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
