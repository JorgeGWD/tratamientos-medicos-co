import React from "react"
import Portal from "../portal/portal"
import useModal from '../useModal/useModal'

const Remodal = ({ children, close, render }) => {

    const { closeModal } = useModal()

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
                <div className="modal-background" close={closeModal}/>
            </div>
        </Portal>
    );
};

export default Remodal;