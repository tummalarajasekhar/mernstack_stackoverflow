import React from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import './Users.css'
import UserList from './UserList'
function Users({slidein}) {
  return (
    <div className="home-container-1">
    <LeftSideBar slidein={slidein}/>
    <div className="home-container-2" style={{marginTop:"30px"} }>
        <h1 style={{fontWeight:"400"}}>Users</h1>
        <UserList/>
        </div>
        </div>
  )
}

export default Users