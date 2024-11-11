import React, { useState,useEffect } from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { useSelector } from 'react-redux'
import Avatar from '../../components/avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import Profile from './Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'


const Userprofile = ({ slidein }) => {
  const { id } = useParams()
  const [Switch, setswitch] = useState(false);
  
  



  const users = useSelector((state)=>state.usersreducer)
  

  const currentprofile = users.filter((user) => user._id === id)[0]
  const currentuser = useSelector((state)=>state.currentuserreducer)
  console.log(currentuser?.message?._id,id)
  
  return (
    <div className="home-container-1">
      <LeftSideBar slidein={slidein} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">{currentprofile?.name?.charAt(0).toUpperCase()}</Avatar>
              <div className="user-name">
                <h1>{currentprofile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "} {moment(currentprofile?.joinedon).fromNow()}
                </p>
              </div>
            </div>
            {currentuser?.message?._id === id && ( 
              <button className="edit-profile-btn" type='button' onClick={() => setswitch(true)}><FontAwesomeIcon icon={faPen} /> Edit Profile</button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm currentuser={currentuser} setswitch={setswitch} />
            ) : (
              <Profile currentprofile={currentprofile} />
            )}
          </>
        </section>
      </div></div>
  )
}

export default Userprofile