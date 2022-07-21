import React from 'react'
import "./SidebarRow.css"

export default function SidebarRow({Icon, title}) {
  return (
    <div className='sidebarRow'>
        <Icon />
        <div className='sidebarRow_title'>{title}</div>
    </div>
  )
}
