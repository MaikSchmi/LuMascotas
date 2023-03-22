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
          <Route path="/process" element={<Process/>}></Route>
          <Route path="/about-me" element={<AboutMe/>}></Route>
          <Route path="/reviews" element={<Reviews/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
