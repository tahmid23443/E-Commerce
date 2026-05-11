import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import ProductDeatils from './pages/ProductDeatils'
import Registation from './pages/Registation'
import Login from './pages/Login'
import ApiTest from './pages/ApiTest'
import Carts from './pages/Carts'

const App = () => {
  return (
    
       <BrowserRouter>
      <Routes>
         <Route path="/api" element={<ApiTest/>}/>
        <Route path="/" element={<Layout />} >
         <Route index element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="/shop" element={<Shop/>}/>
         <Route path="/shop/:id" element={<ProductDeatils/>}/>
         <Route path="/registation" element={<Registation/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/cart" element={<Carts/>}/>
         
         


        </Route>
       
      </Routes>
   </BrowserRouter>
    
  )
}

export default App

