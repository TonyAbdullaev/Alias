import React from 'react';
import LoaderSvg from "../imgs/small-loading.svg";

const Loader = () => {
    return (
        <div className="loader">
            <img className="loader-img" src={LoaderSvg} alt="Loader" />
        </div>
    );
};

export default Loader;