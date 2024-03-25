import { createBrowserRouter } from 'react-router-dom';

import Detail from '@/pages/detail';
import Home from '@/pages/Home';
import Login from '@/pages/Login'; 

const  router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/detail',
    element: <Detail />
  }
])
export  {router}