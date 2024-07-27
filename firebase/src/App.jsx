import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './components/Sidenav'
import TopNav from './components/TopNav'
import Dashboard from './pages/dashboard/Dashboard'
import Transcation from './pages/transaction/Transcation'
import Support from './pages/support/Support'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import RecentTransaction from './pages/dashboard/component/RecentTransaction'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Dashboard/>
  },
  {
  path:"/Transaction",
  element:<Transcation/>
  },
  {
  path:"/Support",
  element:<Support/>
  }
])

function App() {
 
  return (
    <>
       
        <RouterProvider router={router} />
    </>
  )
}

export default App
