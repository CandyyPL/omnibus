import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from '@/views/Welcome/Welcome'
import PrivateRoute from '@/auth/PrivateRoute'
import Auth from '@/views/Auth/Auth'
import Dashboard from '@/views/Dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Auth type='register' />} />
        <Route path='/login' element={<Auth type='login' />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
