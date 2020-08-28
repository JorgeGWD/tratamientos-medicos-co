import React from "react"
import Portal from "../portal/portal"
import './modal.sass'

const Remodal = ({ children, close, render }) => {
    return (
        <Portal>
            <div>
                <div className="modal-container">
                    <div className="modal-content" >
                        {render(children) || children}
                        <hr />
                        <button onClick={close}>Close</button>
                    </div>
                </div>
                <div className="modal-background"/>
            </div>
        </Portal>
    );
};

export default Remodal;