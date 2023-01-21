import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function ComfirmationModal(){
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);

    const [position, setPosition] = useState('top-start');
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return(
        <div>

            <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Comfirm Decision</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to approve this</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={toggleShowA}>Yes</button>
                            <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>

            <ToastContainer position='top-end'>
            <Toast show={showA} onClose={toggleShowA} delay={5000} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>Just Now</small>
                </Toast.Header>
                <Toast.Body>You have approved Mark's request for water connection!</Toast.Body>
            </Toast>
            </ToastContainer>
        </div>
        
    )
}