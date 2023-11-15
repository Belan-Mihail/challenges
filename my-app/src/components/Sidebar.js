import React from "react";
import css from  './css/Sidebar.module.css'

const Sidebar = () => {
    return <div className={css.sidebar}>
        <a>My Photo</a>
        <a>My Illustration</a>
        <a>My Paintings</a>
    </div>
}


export default Sidebar;