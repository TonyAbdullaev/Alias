import React from 'react';
import LoaderSvg from "../imgs/small-loading.svg";

const Loader = () => {
    return (
        <div className="loader">
            <div className="content-loader">
                <img className="loader-img" src={LoaderSvg} alt="Loader" />
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default Loader;