import Home from '@/pages/Home/Home'
import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<p>Login Page</p>} />
      </Routes>
    </Router>
  )
}

export default App
