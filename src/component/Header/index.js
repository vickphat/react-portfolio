import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        
            <div className="jumbotron bg-dark ">
                <h1 className="d-flex text-white justify-content-center">Vicheka Phat</h1>

                <nav className="navbar navbar-expand-lg bg-black justify-content-center ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white hover" to="/">Home <i
                                    className="bi bi-house-fill"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="./work.html">Applications <i
                                    className="fa fa-archive fa-fw"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="https://drive.google.com/file/d/1AFykob_y_QZElHbgHCOqd4yIrxUY0w2S/view?usp=sharing" target="blank">Resume<i
                                    className="fa fa-file fa-fw"></i></a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

        
    )
}

export default Header;




