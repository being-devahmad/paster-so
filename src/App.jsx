import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import Main from './pages/Main'

function App() {

  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Main />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
