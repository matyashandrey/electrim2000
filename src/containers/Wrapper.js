import React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';


class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {fixedMenu: false}
    }

    componentDidMount() {
        window.addEventListener("scroll", function (event) {

            let fixedMenu = +window.scrollY > 100;

            if (this.state.fixedMenu !== fixedMenu) {
                this.setState({fixedMenu});
            }
        }.bind(this))
    }

    render() {

        let classMenu = this.state.fixedMenu ?
            'navbar navbar-default topnav  navbar-fixed-top' :
            'navbar navbar-default topnav';

        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="navbar-header">
                                <a className="navbar-brand topnav" href="#">Электрим 2000</a>
                            </div>

                        </div>
                        <div className="col-md-4 padding-15"><i className="fa fa-phone"></i> 0512 588 807</div>
                        <div className="col-md-4 padding-7">
                            <button type="button" className="btn btn-success pull-right">Перезвоните мне!</button>
                        </div>
                    </div>
                </div>
                <nav className={classMenu} role="navigation">
                    <div className="container topnav">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="#about">О компании</a>
                                </li>
                                <li>
                                    <a href="#services">Проектирование ИС</a>
                                </li>
                                <li>
                                    <a href="#contact">АСУ ТП</a>
                                </li>
                                <li>
                                    <a href="#contact">Строительно-монтажные работы</a>
                                </li>
                                <li>
                                    <a href="#contact">Электрооборудование</a>
                                </li>
                                <li>
                                    <a href="#contact">Портфолио</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="intro-header">


                </div>
                <main className="main">
                    {this.props.children}
                </main>
                <hr className="primary"/>
                <div className="container">
                    <div className="row">
                            ГЕНПРОЕКТ успішно працює з 2007 року. За 9 років ми придбали величезний досвід в реалізації
                            складних проектів, великих і комплексних об'єктів.
                            <br/> Такий собі текст.
                    </div>
                    <div className="row padding-7">
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list-inline">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="footer-menu-divider">⋅</li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li className="footer-menu-divider">⋅</li>
                                    <li>
                                        <a href="#services">Services</a>
                                    </li>
                                    <li className="footer-menu-divider">⋅</li>
                                    <li>
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted small">Copyright © Your Company 2014. All Rights
                                    Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, {params}) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
