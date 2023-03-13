import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Clients from './pages/Clients'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-me" element={<AboutMe/>}></Route>
          <Route path="/clients" element={<Clients/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
