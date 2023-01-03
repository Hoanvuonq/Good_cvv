import React from 'react';
import { Link } from 'react-router-dom';

// img
import Logo from '../../../Assets/img/logo.png';

function Register() {
    return (
        <div id="app-register">
            <div className="main">
                <div className="wrap">
                    <div className="content">
                        <div className="logo-content">
                            <a href="#" className="logo-link">
                                <img className="logo" src={Logo} alt="Logo" />
                            </a>
                        </div>

                        <div className="body-content">
                            <div className="main-body">
                                <div className="form-row">
                                    <div className="row col-md-12">
                                        <div className="alert alert-danger">
                                            Invalid username Or password
                                            <button type="button" className="close">
                                                <span className="close-x" aria-hidden="true">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="row col-md-12">
                                        <div className="p-r-t form-group">
                                            <input id="username" type="text" className="form-control" placeholder="Username" data-role="text" required />
                                        </div>
                                    </div>

                                    <div className="row col-md-12">
                                        <div className="p-r-t form-group">
                                            <input id="password" type="text" className="form-control" placeholder="Email (for password recovery)" data-role="text" required />
                                        </div>
                                    </div>

                                    <h6 className="title-no-account">
                                        Already have an account?
                                        <Link to={'/Login'} className="sign-up">
                                            Sign in
                                        </Link>
                                    </h6>
                                    <input type="submit" className="btn btn-block btn-main btn-lg mt-4" value="Create Account" name="login" id="btn-submit" required />
                                </div>
                            </div>
                        </div>
                        <div className="row-content">
                            <div className="number-online col-lg-4 offset-lg-2 col-6 offset-0">
                                <div className="text-while">
                                    <span className="dot-green"></span>
                                    <span id="online" className="online">
                                        820 Online
                                    </span>
                                </div>
                            </div>

                            <div className="number-online col-lg-4 col-6">
                                <div className="text-while">
                                    <span className="dot-grey"></span>
                                    <span id="members" className="members">
                                        9196 Members
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
