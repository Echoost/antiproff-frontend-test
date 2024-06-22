import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './app/store.ts';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Contact, contactLoader } from './pages/contact/index.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'contacts/:contactId',
        loader: contactLoader,
        element: <Contact />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
