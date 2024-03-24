import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuestionManager from '@/views/QM/QuestionManager'
import Dashboard from '@/views/Dashboard/Dashboard'
import PrivateRoute from '@/auth/PrivateRoute'
import Welcome from '@/views/Welcome/Welcome'
import Auth from '@/views/Auth/Auth'
import Quiz from '@/views/Quiz/Quiz'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Auth type="register" />} />
        <Route path="/login" element={<Auth type="login" />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />
        <Route
          path="/qm"
          element={
            <PrivateRoute>
              <QuestionManager />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
