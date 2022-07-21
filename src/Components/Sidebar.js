import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className='sidebar_title'>.studio</h1>
        <div className='sidebar_nav'> 
            <SidebarRow Icon={HomeOutlinedIcon} title="Overview"/>
            <SidebarRow Icon={SignalCellularAltOutlinedIcon} title="Stats"/>
            <SidebarRow Icon={FolderOpenOutlinedIcon} title="Projects"/>
            <SidebarRow Icon={ChatOutlinedIcon} title="Chat"/>
            <SidebarRow Icon={CalendarMonthOutlinedIcon} title="Calender"/>
        </div>
    </div>
  )
}
