import './App.css'

import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from "./components/Home";
import {Services} from "./components/Services";
import {Product} from "./components/Product";
import {ContactUs} from "./components/ContactUs";
import {Consulting} from "./components/Consulting";
import {Marketing} from "./components/Marketing";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Product />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/consulting' element={<Consulting/>} />
      </Routes>
    </Router>
  )
}

export default App
