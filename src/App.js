import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import RootLayout from './components/route/RootLayout';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import Personal from './pages/personal/Personal';

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/auth',
      element: <Auth />
    },
    {
      path: '/personal',
      element: <Personal />
    }
  ]
}])

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
