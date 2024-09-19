import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-component">
        <Sidebar />
      </div>
    </div>
  )
}

export default App