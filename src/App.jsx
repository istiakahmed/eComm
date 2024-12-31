
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home/Home'
import Men from './Components/Men/Men'
import ProductCart from './Components/Products/Productcart'
import Ladies from './Components/Ladies/Ladies'

function App() {

  // ================ Routing part
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* =========== Layout ============== */}
        <Route path='/' element={<LayoutOne />} >
        <Route index element={<Home />} />
        <Route path='/Men' element ={<Men />} />
        <Route path='/product' element={<ProductCart />} />
        <Route path='/ladies' element={<Ladies />} />

        </Route>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={myRoute} />
       
    </>
  )
}

export default App
