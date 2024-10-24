import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import Main from './pages/Main'
import Auth from './pages/Auth'

function App() {

  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Main />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
