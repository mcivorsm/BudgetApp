import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from "react-router";

import LoginForm from './components/LoginForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import { RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path:"/", element: <App/>},
  {path:"/login", element: <LoginForm/>},
  {path:"/signup", element: <SignUpForm/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
);
