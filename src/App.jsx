import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home />
    },
    {
      path:"*",
      element: <NotFound /> 
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
