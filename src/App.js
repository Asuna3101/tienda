import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './views/homepage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
