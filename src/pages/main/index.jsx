import React, { useState } from 'react';
import Header from '@Components/header/header.jsx';
import Slider from '@Components/slider/slider.jsx';
import Service from '@Components/service/service.jsx';
import Footer from '@Components/footer/footer.jsx';
import AuthorizationModal from '@Components/authorizationModal/authorizationModal.jsx';
import './styles.less';
import { STATUS, Manager } from '@Helpers/manager';

const Main = () => {
    const manager = new Manager(STATUS.DEBUG);
    const sliders = manager.slides;
    const services = manager.services;
    const [modalActive, setModalActive] = useState(true);
    return (
        <div>
            <div className="container-slider-header">
                <Header setActive={setModalActive} />
                <Slider sliders={sliders} />
            </div>
            <div className="information-block">
                <h2 className="information-title">5 шагов к заявке</h2>
                <Service services={services} />
            </div>
            <div className="other-info">
                <Footer />
            </div>
            <AuthorizationModal
                active={modalActive}
                setActive={setModalActive}
            />
        </div>
    );
};

export default Main;
