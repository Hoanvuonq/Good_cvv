import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { Link } from 'react-router-dom';

// img
import Logo from '../../../Assets/img/logo.png';
import { refreshCw } from 'react-icons-kit/feather/refreshCw';
import { user } from 'react-icons-kit/metrize/user';
import { chevronDown } from 'react-icons-kit/feather/chevronDown';

// Component //
import ModalLogout from '../ModalLogout';

function Nav() {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);
    return (
        <div className="header-app">
            <div className="logo-header">
                <img src={Logo} alt="logo" />
            </div>
            <div className="content-header">
                <div className="title-content">
                    <ul className="price-header">
                        <li className="nav-item">
                            <Link to={'javascript:void(0);'} className="nav-link text-warning wallet-account" data-toggle="modal" data-target=".bd-example-modal-lg">
                                Balance: $0.00
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'#'} className="nav-link" data-toggle="modal" data-target=".bd-example-modal-lg">
                                <Icon icon={refreshCw} className="icon" />
                            </Link>
                        </li>
                    </ul>

                    <div className="account-user">
                        <div className="widget">
                            <div className="content-widget">
                                <div className="widget-content-left">
                                    <div className="btn-group">
                                        <Link to={'#'}>
                                            <Icon icon={user} size={35} className="icon-user"></Icon>
                                        </Link>
                                    </div>
                                    <div onClick={toggle} className="btn-group s2">
                                        <Link to={'#'}>
                                            <Icon icon={chevronDown} size={15} className="icon-user"></Icon>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: isOpen ? 'block' : 'none' }}>
                        <ModalLogout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
