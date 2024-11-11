import React from 'react'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'
import Globe from "../../assets/Globe.svg"
const LeftSideBar = ({ slidein }) => {
  const slideinstyle = {
    transform: "translateX(0%)"
  }
  const slideoutstyle = {
    transform: "translateX(-110%)",
    
  }
  console.log(slidein)
  return (
    <div className="left-sidebar" style={slidein ? slideinstyle: slideoutstyle}>
      <nav className='side-nav'>
        <button className="nav-btnn">
          <NavLink to='/' className="side-nav-links" activeclassname='active'>
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className='nav-btnn'>
            <NavLink to='/question' className='side-nav-links' activeclassname='active'>
            <img src={Globe} alt="globe" />
            <p style={{paddingLeft:'10px'}}>Questions</p>
            </NavLink>
          </button>
          <button className='nav-btnn'>
            <NavLink to='/tags' className='side-nav-links' activeclassname='active' style={{paddingLeft:"40px"}}>
            <p >Tags</p>
            </NavLink>
          </button>
          <button className='nav-btnn'>
            <NavLink to='/users' className='side-nav-links' activeclassname='active' style={{paddingLeft:"40px"}}>
            <p >Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default LeftSideBar