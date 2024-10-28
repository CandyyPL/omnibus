import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuizSummary from '@/views/Quiz/QuizSummary/QuizSummary'
import QuestionManager from '@/views/QM/QuestionManager'
import Dashboard from '@/components/Dashboard/Dashboard'
import Settings from '@/components/Settings/Settings'
import Ranking from '@/components/Ranking/Ranking'
import { AuthType } from '@/helpers/constants.js'
import PrivateRoute from '@/auth/PrivateRoute'
import Welcome from '@/views/Welcome/Welcome'
import Auth from '@/views/Auth/Auth'
import Quiz from '@/views/Quiz/Quiz'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Auth type={AuthType.REGISTER} />} />
        <Route path='/login' element={<Auth type={AuthType.LOGIN} />} />
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
