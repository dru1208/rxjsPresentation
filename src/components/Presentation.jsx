import React from "react"

const Presentation = ({ currentView }) => {
  switch (currentView) {
    case "tab1":
      return <div>tab1</div>;
    case "tab2":
      return <div>tab2</div>;
    case "tab3":
      return <div>tab3</div>;
    default:
      return <div>Presentation</div>    
  }
}

export default Presentation