import React from 'react';
import Header from '@Components/header/header.jsx';
import Footer from '@Components/footer/footer.jsx';
import NewsCreator from '@Components/newsCreator/newsCreator';
import './admin.less';

const Admin = () => {
    return (
        <div>
            <div className="container-header">
                <Header />
            </div>
            <NewsCreator />
            <div className="other-info">
                <Footer />
            </div>
        </div>
    );
};

export default Admin;
