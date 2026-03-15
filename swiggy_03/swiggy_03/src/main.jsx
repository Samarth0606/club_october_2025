import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Offer from './components/Offer.jsx';
import Signin from './components/Signin.jsx';
import Cart from './components/Cart.jsx';
import Help from './components/Help.jsx';
import Body from './components/Body.jsx';
import Error from './components/Error.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import RealTime from './components/RealTime.jsx';

const appProvider = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error /> ,
    children: [
      {
        path:'/',
        element: <Body />
      },
      {
        path:'/help',
        element: <Help />
      },
      {
        path:'/cart',
        element: <Cart />
      },
      {
        path:'/signin',
        element: <Signin />
      },
      {
        path:'/offer',
        element: <Offer />
      },
      {
        path: '/restaurant/:id' ,
        element: <RestaurantDetails />
      },
      {
        path: '/clock' ,
        element: <RealTime />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appProvider}> </RouterProvider>
)
