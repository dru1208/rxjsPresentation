import React from "react"

const NavBar = ({ tab1Nav, tab2Nav, tab3Nav }) => {
  return (
    <div>
      <div onClick={tab1Nav}>Tab1</div>
      <div onClick={tab2Nav}>Tab2</div>
      <div onClick={tab3Nav}>Tab3</div>
    </div>
  )
}

export default NavBar;