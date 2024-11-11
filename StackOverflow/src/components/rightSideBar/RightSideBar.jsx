import React from 'react'
import './RightSideBar.css'
import Widget from './Widget'
import WidgetTag from './WidgetTag'
function RightSideBar() {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTag/>
    </aside>
  )
}

export default RightSideBar