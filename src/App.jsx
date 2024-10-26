import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuestionManager from '@/views/QM/QuestionManager'
import Dashboard from '@/components/Dashboard/Dashboard'
import PrivateRoute from '@/auth/PrivateRoute'
import Welcome from '@/views/Welcome/Welcome'
import Auth from '@/views/Auth/Auth'
import Quiz from '@/views/Quiz/Quiz'
import QuizSummary from '@/views/Quiz/QuizSummary/QuizSummary'
import Ranking from '@/components/Ranking/Ranking'
import Settings from '@/components/Settings/Settings'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Auth type='register' />} />
        <Route path='/login' element={<Auth type='login' />} />
        <Route path='/dashboard' element={<PrivateRoute route={<Dashboard />} />} />
        <Route path='/ranking' element={<PrivateRoute route={<Ranking />} />} />
        <Route path='/settings' element={<PrivateRoute route={<Settings />} />} />
        <Route path='/quiz' element={<PrivateRoute route={<Quiz />} />} />
        <Route path='/summary' element={<PrivateRoute route={<QuizSummary />} />} />
        <Route path='/qm' element={<PrivateRoute route={<QuestionManager />} />} />
      </Routes>
    </Router>
  )
}

export default App
