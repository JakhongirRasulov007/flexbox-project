import React from "react";
import Sidebar from "./Sidebar.component";
import HotelView from "./HotelView.component";

const Content = () =>{
    return(
        <div className="content">
            <Sidebar />
            <HotelView />
        </div>
    )
}

export default Content;