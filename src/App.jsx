import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SideNav from './components/SideNav/SideNav'

function App() {

  return (
      <div className="App">
        <Nav />
        <SideNav />
        <Header />
      </div>
  )
}

export default App