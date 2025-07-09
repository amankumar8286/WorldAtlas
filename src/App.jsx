import React from 'react';

import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
import { AppLayout } from './components/Layout/AppLayout';
import { ErrorPage } from './pages/Error';


const router = createBrowserRouter([
    {

        children: [
            {
                path: '/',
                element: <Home />,
            },

            {
                path: 'About',
                element: <About />,
            },

            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'country',
                element: <Country />
            }
            ,
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }

]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>
};

export default App;