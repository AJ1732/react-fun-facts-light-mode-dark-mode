import React from 'react'
import logoIcon1 from "../images/reactjs-icon-1.png"
// import lightEllipse from "../images/light-ellipse.png"
// import darkEllipse from "../images/dark-ellipse.png"

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className="logo">
        <img 
          className='nav-logo-icon' 
          src={logoIcon1} 
          alt="react-logo" 
        />

        <h3 className="nav-logo-text">ReactFacts</h3>
      </div>

      <div className="toggler">
        <p className="toggler-light">Light</p>

        <div className="toggler-slider" onClick={props.toggleDarkMode}>
          <div className="toggler-slider-circle"></div>
        </div>

        <p className="toggler-dark">Dark</p>
      </div>
    </nav>
  )
}

export default Navbar