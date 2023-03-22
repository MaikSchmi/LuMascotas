import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Reviews from './pages/Reviews'
import Process from './pages/Process'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/proceso" element={<Process/>}></Route>
          <Route path="/sobre-mi" element={<AboutMe/>}></Route>
          <Route path="/resenas" element={<Reviews/>}></Route>
          <Route path="/contacto" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
