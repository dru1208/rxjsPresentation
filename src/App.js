import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import Presentation from "./components/Presentation"

function App() {
  const [currentView, setCurrentView] = useState("")

  const tab1Nav = () =>  setCurrentView("tab1")
  const tab2Nav = () =>  setCurrentView("tab2")
  const tab3Nav = () =>  setCurrentView("tab3")

  return (
    <div className="App">
      <NavBar tab1Nav={tab1Nav} tab2Nav={tab2Nav} tab3Nav={tab3Nav} />
      <Presentation currentView={currentView} />
    </div>
  );
}

export default App;
