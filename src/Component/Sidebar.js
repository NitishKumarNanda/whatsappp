import React from 'react'
import "./Sidebar.css"
import { MdDonutLarge, MdChat, MdMoreVert, MdAccountCircle } from "react-icons/md";



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <MdAccountCircle />
            
            <div className="sidebar_headeRight">
                
                <MdDonutLarge />
                
                <MdChat />
                <MdMoreVert />


            </div>

            <div className="sidebar_search">


            </div>
            <div className="sidebar_chats">


            </div>
            </div>


        </div>
    )
}

export default Sidebar
