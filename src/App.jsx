import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuestionManager from '@/views/QM/QuestionManager'
import Dashboard from '@/components/Dashboard/Dashboard'
import PrivateRoute from '@/auth/PrivateRoute'
import Welcome from '@/views/Welcome/Welcome'
import Auth from '@/views/Auth/Auth'
import Quiz from '@/views/Quiz/Quiz'
import Panel from '@/views/Panel/Panel'
import Ranking from '@/components/Ranking/Ranking'
import Settings from '@/components/Settings/Settings'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Auth type='register' />} />
        <Route path='/login' element={<Auth type='login' />} />
        <Route
          path='/dashboard'
          element={<PrivateRoute route={<Panel Component={<Dashboard />} />} />}
        />
        <Route
          path='/ranking'
          element={<PrivateRoute route={<Panel Component={<Ranking />} />} />}
        />
        <Route
          path='/settings'
          element={<PrivateRoute route={<Panel Component={<Settings />} />} />}
        />
        <Route path='/quiz' element={<Panel Component={<Quiz />} />} />
        <Route path='/qm' element={<Panel Component={<QuestionManager />} />} />
      </Routes>
    </Router>
  )
}

export default App
