import React from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'
import HomeMainBar from '../../components/homeMainBar/HomeMainBar'
import QuestionDetails from './QuestionDetails'
const Displayquestion = ({slidein}) => {
  return (
    <div className="home-container-1">
      <LeftSideBar slidein={slidein}/>
      {/* {console.log("QuestionDetails")} */}
      <div className="home-container-2">
        <QuestionDetails/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default Displayquestion