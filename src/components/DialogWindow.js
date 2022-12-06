import React from 'react';

const DialogWindow = ({isActive, setActive, children}) => {

    const applyHandler = () => console.log("Apply");
    const cancelHandler = () => console.log("Cancel");

    return (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid amet corporis culpa ea error, excepturi illo ipsa maiores nam nemo nesciunt sunt suscipit tempora ut voluptatibus. Error, reprehenderit.
        <div className={isActive ? "dialog-window active" : "dialog-window"} onClick={() => setActive(false)}>
            <div className={isActive ? "dialog-window-content active" : "dialog-window-content"} onClick={e => e.stopPropagation()}>
                {/*<h2>Apply text</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aperiam atque ea eligendi
                    explicabo magnam non perferendis quis reprehenderit.</p>
                <footer className="dialog-footer">
                    <div></div>
                    <div className="dialog-btns">
                        <button className="apply-btn" onClick={applyHandler}>APPLY</button>
                        <button className="cancel-btn" onClick={cancelHandler}>CHANGE</button>
                    </div>
                </footer>*/}
                {children}
            </div>
        </div>
        </div>
    );
};

export default DialogWindow;