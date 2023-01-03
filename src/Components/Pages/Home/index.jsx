import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Component //
import Nav from '../../Layouts/Nav';
import Side from '../../Layouts/Side';
import Modal from '../../Layouts/Modal';

function Home() {
    const [isOpenModal, setisOpenModal] = useState(false);

    const toggleModal = () => setisOpenModal(!isOpenModal);
    return (
        <>
            <div className="home">
                <div className="nav">
                    <Nav />
                </div>
                <div className="Side">
                    <Side />
                </div>
                <div className="content">
                    <div className="main-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-card mb-3 card">
                                    <div className="row p-3 row-card">
                                        <div className="col-md-6 col-card">
                                            <div className="table">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="first-td">1</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    United States
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">197281 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">2</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    United Kingdom
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">91279 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">3</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    India
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">38392 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">4</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    Canada
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">8203 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">5</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    Malaysia
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">4950 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">6</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    Malaysia
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">4931 cards</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-card">
                                            <div className="table">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="first-td">7</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    United States
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">197281 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">8</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    United Kingdom
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">91279 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">9</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    India
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">38392 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">10</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    Canada
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">8203 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">11</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    Malaysia
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">4950 cards</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first-td">12</td>
                                                            <td>
                                                                <Link onClick={toggleModal} className="text-warning" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                                    Malaysia
                                                                </Link>
                                                            </td>
                                                            <td className="text-right">4931 cards</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: isOpenModal ? 'block' : 'none' }} className="modal-menu-home">
                        <span onClick={toggleModal} className="close-modal">
                            X
                        </span>
                        <Modal />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
