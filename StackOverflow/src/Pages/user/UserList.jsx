import React from 'react'
import User from './User'
import './Users.css'
import { useSelector } from 'react-redux'
function UserList() {
    const users =useSelector(((state)=>state.usersreducer))
    
    console.log(typeof(users),users)
  return (
    <div className="user-list-container">
    {users.map((user)=>(
        <User user={user} key={user?._id}/>
    ))}
</div>
  )
}

export default UserList