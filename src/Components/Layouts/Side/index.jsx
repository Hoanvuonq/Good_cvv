import React, { useState, useRef } from 'react';
import { Icon } from 'react-icons-kit';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from '../../../hook/useOnClickOutside';

import { chevronDown } from 'react-icons-kit/feather/chevronDown';

// Components
import Modal from '../Modal';

function Side() {
    const [active, SetActive] = useState(1);

    const clickActive = (index) => {
        SetActive(index);
    };

    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);

    const [isOpenmenu2, setisOpenmenu2] = useState(false);

    const togglemenu2 = () => setisOpenmenu2(!isOpenmenu2);

    const [isOpenModal, setisOpenModal] = useState(false);

    const toggleModal = () => setisOpenModal(!isOpenModal);
    return (
        <>
            <div className="side-app">
                <div className="side-app-inner">
                    <div className="side-app-container">
                        <ul className="vertical-nav-menu mt-3 metismenu">
                            <li onClick={() => clickActive(1)}>
                                <Link onClick={toggleModal} className={`${active === 1 ? ' title active ' : 'title'}`} to={'#'}>
                                    Main
                                </Link>
                            </li>
                            <li onClick={() => clickActive(2)}>
                                <div onClick={toggle} className={`${active === 2 ? 'active style-flex' : 'style-flex'}`}>
                                    <Link to={'#'}>Cards</Link>
                                    <div className="toggle-chevd">
                                        <Icon icon={chevronDown} className="icon" />
                                    </div>
                                </div>
                                <ul className={`${isOpen ? ' menu-dropdown show' : 'menu-dropdown'}`}>
                                    <li>
                                        <Link onClick={toggleModal} to={'#'} className="title-menu">
                                            Search
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleModal} to={'#'} className="title-menu">
                                            Cart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleModal} to={'#'} className="title-menu">
                                            Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleModal} to={'#'} className="title-menu">
                                            Statistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleModal} to={'#'} className="title-menu">
                                            BIN
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li onClick={() => clickActive(3)}>
                                <Link onClick={toggleModal} className={`${active === 3 ? 'title active ' : 'title'}`} to={'#'}>
                                    Dumps
                                </Link>
                            </li>
                            <li onClick={() => clickActive(4)}>
                                <Link onClick={toggleModal} className={`${active === 4 ? 'title active ' : 'title'}`} to={'#'}>
                                    News
                                </Link>
                            </li>
                            <li onClick={() => clickActive(5)}>
                                <div onClick={togglemenu2} className={`${active === 5 ? 'active style-flex' : 'style-flex'}`}>
                                    <Link to={'#'}>Check</Link>
                                    <div className="toggle-chevd">
                                        <Icon icon={chevronDown} className="icon" />
                                    </div>
                                </div>
                                <ul className={`${isOpenmenu2 ? ' menu-dropdown show' : 'menu-dropdown'}`}>
                                    <li>
                                        <Link onClick={toggleModal} to={'#'} className="title-menu">
                                            Check
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleModal} to={'#'} className="title-menu">
                                            History
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li onClick={() => clickActive(6)}>
                                <Link onClick={toggleModal} className={`${active === 6 ? 'title active ' : 'title'}`} to={'#'}>
                                    Billing
                                </Link>
                            </li>
                            <li onClick={() => clickActive(7)}>
                                <Link onClick={toggleModal} className={`${active === 7 ? 'title active ' : 'title'}`} to={'#'}>
                                    Virual Phone
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{ display: isOpenModal ? 'block' : 'none' }} className="modal-menu">
                <span onClick={toggleModal} className="close-modal">
                    X
                </span>
                <Modal />
            </div>
        </>
    );
}

export default Side;
