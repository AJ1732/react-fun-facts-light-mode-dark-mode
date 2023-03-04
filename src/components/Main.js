import React from 'react'

import logoIcon2 from "../images/reactjs-icon-2.png"


const Main = (props) => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main-title">Fun facts about React</h1>

      <ul className="main-facts">
        <li>Was realeased in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterpeise apps, including mobile apps</li>
      </ul>

      <img className='logo-bg' src={logoIcon2} alt="" />
    </main>
  )
}

export default Main