import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './views/homepage';
import Register from './views/Register';
import Login from './views/Login';
import PasswordRecovery from './views/PasswordRecovery';
import UserProfile from './views/UserProfile';
import PrivateRoute from './components/private/PrivateRoute';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/password/recovery',
    element: <PasswordRecovery />,
  },
  {
    path: '/user/profile',
    element: <PrivateRoute />,
    children: [
      { path: "", element: <UserProfile /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
