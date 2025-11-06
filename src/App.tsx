import './App.css'
import { Routes , Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import JiraPage from './pages/JiraPage'
import AboutPage from './pages/AboutPage'

const App = () => {

    return (
      <Routes>
        <Route element={<Layout />}>

          <Route index element={<HomePage />} />

          <Route path="jira" element={<JiraPage />} />

          <Route path="about" element={<AboutPage />} />
        
        </Route>
      </Routes>
  )
}

export default App;




