import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/app.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ingresar from './pages/Ingresar'
import Registrarse from './pages/Registrarse'
import NoContent from './pages/NoContent'

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Routes>
          <Route
            path='/intelligenttutor/'
            element={<Home/>}
          />
          <Route
            path='/intelligenttutor/ingresar/'
            element={<Ingresar/>}
          />
          <Route
            path='/intelligenttutor/registrarse/'
            element={<Registrarse/>}
          />
          <Route
            path='/intelligenttutor/404/'
            element={<NoContent/>}
          />
        </Routes>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
