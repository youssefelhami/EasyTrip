import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

import { RouterProvider } from 'react-router-dom';
import router from './router';
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Navbar />
    <RouterProvider router={router}/>
  </React.StrictMode>
);