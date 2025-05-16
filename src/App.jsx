import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Who from './pages/Who'
import Products from './pages/Products'
import DefaultLayout from './layouts/DefaultLayout'

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
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
