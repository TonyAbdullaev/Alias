import React from 'react';

const DialogWindow = ({isActive, setActive, children}) => {



    return (
        <div className={isActive ? "dialog-window active" : "dialog-window"} onClick={() => setActive(false)}>
            <div className={isActive ? "dialog-window-content active" : "dialog-window-content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default DialogWindow;