import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from '@/views/Welcome/Welcome'
import Quiz from '@/views/Quiz/Quiz'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App
