/* eslint-disable no-unused-vars */
import './App.css'
import ActiveProjects from './components/ActiveProjects'
import ProfilePannel from './components/ProfilePannel'
import Homepage from './pages/Homepage'
import Intro from './pages/Intro'

function App() {

  return (
    <div className='background p-8 flex justify-between'>
      <ProfilePannel/>
      <Homepage/>
      <ActiveProjects/>
    </div>
  )
}

export default App
