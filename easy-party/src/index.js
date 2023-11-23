import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import Index from './Pages/PageMap/Index' 
import './Pages/Styles/index.css';
=======
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
>>>>>>> main

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}></RouterProvider>
);


