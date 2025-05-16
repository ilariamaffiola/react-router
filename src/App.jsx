import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Who from './pages/Who'
import Products from './pages/products/Products'
import DefaultLayout from './layouts/DefaultLayout'
import DetailProduct from './pages/products/DetailProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}> 
            <Route path='/' Component={Homepage} />
            <Route path='/who' Component={Who} />
            <Route path='/products'>
              <Route index Component={Products}/>
              <Route path=':id' Component={DetailProduct}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
