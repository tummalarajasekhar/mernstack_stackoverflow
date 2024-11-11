import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/home/Home.jsx'
import Auth from './Pages/Auth/Auth.jsx'
import AskQuestions from './Pages/askQuestions/AskQuestions.jsx'
import Question from './Pages/question/Question.jsx'
import DisplayQuestion from './Pages/question/DisplayQuestion.jsx'
import Tags from './Pages/tags/Tags.jsx'
import Users from './Pages/user/Users.jsx'
import UserProfile from './Pages/userProfile/UserProfile.jsx'
function Allroutes({slidein,handleSlideIn}) {
  return (
   <Routes>
    <Route path='/' element={<Home slidein={slidein} handleSlideIn={handleSlideIn}/>} ></Route>
    <Route path='/askquestion' element={<AskQuestions />} ></Route>
    <Route path='/auth' element={<Auth />} ></Route>
    <Route path='/question' element={<Question slidein={slidein} />} ></Route>
    <Route path='/question/:id' element={<DisplayQuestion slidein={slidein} />} ></Route>
    <Route path='/tags' element={<Tags slidein={slidein} />} ></Route>
    <Route path='/users' element={<Users slidein={slidein} />} ></Route>
    <Route path='/users/:id' element={<UserProfile slidein={slidein} />} ></Route>
   </Routes>

  )
}

export default Allroutes
