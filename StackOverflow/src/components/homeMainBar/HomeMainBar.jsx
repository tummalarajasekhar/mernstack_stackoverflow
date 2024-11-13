import React ,{useEffect}from 'react'
import './HomeMainBar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import QuestionList from './QuestionList'

import { fetchallquestion } from '../../action/question';
function HomeMainBar() {
  const user = useSelector((state)=>state.currentuserreducer)
  const dispatch=useDispatch()
  const location = useLocation();
  const navigate = useNavigate();
  // const questionlist = useSelector((state)=>state.questionreducer)
  const questionlist =useSelector((state)=>state.questionreducer)
  console.log(questionlist,user)
  useEffect(() => {
    // Simulating API fetch
    const questions = [{ id: 1, title: "Sample Question" }]; // Replace with actual API call
    dispatch(fetchallquestion(questions));
  }, [dispatch]);
  const checkauth = () => {
    if (user === null) {
      alert("Login or signup to ask a question")
      navigate("/Auth")
    } else {
      navigate("/Askquestion")
    }
  }
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Question</h1>
        ) : (
          <h1>All Question</h1>
        )}
        <button className="ask-btn" onClick={checkauth}>Ask Questions</button>
      </div>
      <div>
        {questionlist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionlist.data.length} questions</p>
            <QuestionList questionlist={questionlist.data} />
          </>
        )
        }</div>
    </div>
  )
}

export default HomeMainBar