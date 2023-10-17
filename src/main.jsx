import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes.jsx';
import {
    types,
    transitions,
    positions,
    Provider as AlertProvider,
} from 'react-alert';
import { AlertTemplate } from './utils/alertTemplate';

const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 2000,
    offset: '30px',
    transition: transitions.SCALE,
    type: types.SUCCESS,
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AlertProvider template={AlertTemplate} {...options}>
            <RouterProvider router={router} />
        </AlertProvider>
    </React.StrictMode>
);
