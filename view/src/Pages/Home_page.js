import React from 'react';
import Nav_Bar from '../Component/Nav_Bar';
import ProductsPage from '../Component/ProductsPage';
import './Home_page.css';
const Home_page = () => {
    return (
        <div className="content_Home">
            <Nav_Bar></Nav_Bar>
            <ProductsPage></ProductsPage>
        </div>
    )
}

export default Home_page
