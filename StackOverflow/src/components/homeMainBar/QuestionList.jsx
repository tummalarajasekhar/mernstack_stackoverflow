import React from 'react'
import Question from './Question.jsx'

function QuestionList({questionlist}) {

  return (
    <>
    {questionlist?.map((question)=>(
      <Question question={question} key ={question._id}/>
    ))}
    </>
  )
}

export default QuestionList