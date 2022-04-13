import React from 'react';
import Nav_Bar from '../Component/Nav_Bar';
import Adminpanel from "../Component/AdminPanel";
import "../Pages/Admin_page.css"

const Admin_page = () => {
    return (
        <div className="content_Admin">
            <Nav_Bar></Nav_Bar>
            <Adminpanel></Adminpanel>
        </div>
    )
}

export default Admin_page
