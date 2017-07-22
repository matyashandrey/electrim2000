import React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';
import {deepClone} from '../helpers/_Object';
import {Link} from 'react-router';

import Form from '../components/Index/Form'
import HeadPromo from '../components/Index/HeadPromo'
import CallbackForm from '../components/Index/CallbackForm'


class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {fixedMenu: false, callMe: false, showModal: false, openMenu: {aboutUs: false, portfolio: false}}

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.openCallPopup = this.openCallPopup.bind(this);
        this.closeCallPopup = this.closeCallPopup.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", function () {

            let fixedMenu = +window.scrollY > 50;

            if (this.state.fixedMenu !== fixedMenu) {
                this.setState({fixedMenu});
            }

            let callMe = +window.scrollY > 550;

            if (this.state.callMe !== callMe) {
                this.setState({callMe});
            }
        }.bind(this))


    }

    openCallPopup() {
        this.setState({ showModal: true });
    }
    closeCallPopup() {
        this.setState({ showModal: false });
    }

    openMenu(e) {
        let {id} =  e.target.dataset;
        let openMenu = deepClone(this.state.openMenu);

        Object.keys(openMenu).forEach(function (index) {
            openMenu[index] = index === id && openMenu[index] === false ? true : false;
        })

        this.setState({openMenu});
    }

    closeMenu(e) {

        let openMenu = deepClone(this.state.openMenu);

        Object.keys(openMenu).forEach(function (index) {
            openMenu[index] = false;
        })

        this.setState({openMenu});
    }

    render() {

        let classMenu = this.state.fixedMenu ?
            'navbar navbar-default topnav  navbar-fixed-top' :
            'navbar navbar-default topnav navbar-inverse';

        let {openMenu = {}} = this.state;

        let myBigGreenDialog = {
            overflow: 'hidden',
            height: '60%',
            width: '40%',
            left: '30%',
            top: '0px',
            margin: '80px auto'
        };

        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="navbar-header">
                                <a className="navbar-brand topnav" href="/">Электрим 2000</a>
                            </div>

                        </div>
                        <div className="col-md-4 padding-15"><i className="fa fa-phone"></i> 0512 588 807</div>
                        <div className="col-md-4 padding-7">
                            <button onClick={this.openCallPopup} type="button" className="btn btn-success pull-right">Перезвоните мне!</button>
                        </div>
                    </div>
                </div>
                <nav className={classMenu} role="navigation">
                    <div className="container topnav">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar">1</span>
                            <span className="icon-bar">2</span>
                            <span className="icon-bar">3</span>
                        </button>
                        <div data-toggle="collapse" data-target="#navigationbar" className="collapse navbar-collapse"
                             id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li onMouseLeave={this.closeMenu} onMouseEnter={this.openMenu}
                                    className={openMenu.aboutUs ? "dropdown open" : ""}>
                                    <a data-id="aboutUs" href="#about">О компании <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">О Нас</a></li>
                                        <li><a href="#">Лицензии и сертификаты</a></li>
                                        <li><Link to="/review/">Отзывы</Link></li>
                                        <li><a href="#">Новости</a></li>
                                        <li><a href="#">Вакансии</a></li>
                                    </ul>
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
                                <li className={openMenu.portfolio ? "dropdown open" : ""}>
                                    <a href="#contact">Портфолио</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {this.props.pathname === '/' ? <HeadPromo/> : false}

                <main className="main container">
                    {this.props.children}
                    <hr className="primary"/>

                    <Form openCallPopup={this.openCallPopup}/>
                    <br/>
                </main>

                <CallbackForm showModal={this.state.showModal} closeCallPopup={this.closeCallPopup}/>

                {this.state.callMe ? <div onClick={this.openCallPopup} id="callme">
                        <div id="callmeMain"></div>
                    </div> : false}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list-inline">
                                    <li>
                                        <a href="#">О компании</a>
                                    </li>
                                    <li className="footer-menu-divider">⋅</li>
                                    <li>
                                        <a href="#about">Проектирование ИС</a>
                                    </li>
                                    <li className="footer-menu-divider">⋅</li>
                                    <li>
                                        <a href="#services">АСУ ТП</a>
                                    </li>
                                    <li>
                                        <a href="#services">Электрооборудование</a>
                                    </li>
                                    <li className="footer-menu-divider">⋅</li>
                                    <li>
                                        <a href="#contact">Портфолио</a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted small">Copyright © Электрим2000 2017.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        screenType: state.screenType,
        pathname : state.routing.locationBeforeTransitions.pathname
    };
}

function mapDispatchToProps(dispatch, {params}) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
