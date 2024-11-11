import React from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'
import HomeMainBar from '../../components/homeMainBar/HomeMainBar'
import Displayquestion from './DisplayQuestion'
import '../../App.css'

function Question({slidein}) {
  return (
    <div className="home-container-1">
      <LeftSideBar slidein={slidein}/>
      <div className="home-container-2">
        <Displayquestion/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default Question