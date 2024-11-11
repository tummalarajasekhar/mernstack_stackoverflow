import React from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import { tagsList } from './tagsList'
import './Tags.css'
import TagList from './TagList'
function Tags({slidein}) {
  return (
    <div className="home-container-1">
    <LeftSideBar slidein={slidein}/>
    <div className="home-container-2">
        <h1 className="tags-h1">
            Tags
        </h1>
        <p className="tags-p">A tag is akeyword or label that categorizes your question with other similar question.</p>
        <p className="tags-p">
            Using the right tags makes it easier for others to find and answer your question
        </p>
        <div className="tags-list-container">
            {tagsList.map((tag,index)=>(
                <TagList tag={tag} key={index}/>
            ))}
        </div>
    </div>
   </div>
  )
}

export default Tags