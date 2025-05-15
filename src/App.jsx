import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Who from './pages/Who'
import Products from './pages/Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/who' Component={Who}></Route>
          <Route path='/products' Component={Products}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
