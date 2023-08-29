import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Contact from './pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product/:id" element={user ? <Product/>: <Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
