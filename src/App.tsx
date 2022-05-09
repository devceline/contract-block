import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCogs, faFileContract, faPencil, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './components/Sidebar'
import Body from './components/Body'

library.add(faUserGroup, faUserGroup, faFileContract, faPencil, faCogs, faUser)


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Body />
    </div>
  )
}

export default App
