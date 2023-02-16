import React from 'react';
import CustCard from './03cards';

const propsincard = () => {
    return (
        <>
            <br />
            <h6>props: parent na data child ne mokalva mate</h6>
            <br />
            <br />
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6"><CustCard prodTitle="Lamborghini Sian Roadster" imgSrc={window.location.origin + '/cardimg/lamborghini-sian.jpg'} txt="TopSpeed=> 350 kmh/217.48 mp h" /></div>
                <div className="col-lg-3 col-md-4 col-sm-6"><CustCard prodTitle="pagani-huayra" imgSrc={window.location.origin + '/cardimg/pagani-huayra.jpg'} txt="TopSpeed=> 383 kmh/237.98 mph" /></div>
                <div className="col-lg-3 col-md-4 col-sm-6"><CustCard prodTitle="McLaren Speedtail" imgSrc={window.location.origin + '/cardimg/McLaren Speedtail.jpg'} txt="TopSpeed=> 403 kmh/250 mph" /></div>
                <div className="col-lg-3 col-md-4 col-sm-6"><CustCard prodTitle="Hennessey Venom" imgSrc={window.location.origin + '/cardimg/Hennessey Venom.jpg'} txt="TopSpeed=> 435.31 kmh/270.8 mph" /></div>
                <div className="col-lg-3 col-md-4 col-sm-6"><CustCard prodTitle="Dodge" imgSrc={window.location.origin + '/cardimg/srt.jpg'} Btn="https://www.dodge.com/srt.html" /></div>
            </div>

        </>
    );
};

export default propsincard;