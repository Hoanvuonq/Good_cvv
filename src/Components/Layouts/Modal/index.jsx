import React from 'react';
import { Link } from 'react-router-dom';

function Modal() {
    return (
        <div className="modal-app">
            <div className="modal-content text-dark">
                <div className="header-modal">
                    <h6 className="modal-title">Your new account is unverified with balance $0.00!</h6>
                </div>

                <div className="body-modal">
                    <p> To activate your account add at least $25 to your balance. This money can be spent on your orders at this website. </p>
                    <div className="add-fun mt-5">
                        <Link to="#" className="btn btn-warning pl-5 pr-5">
                            Add Fund
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
