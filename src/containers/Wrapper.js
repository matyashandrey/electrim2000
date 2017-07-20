import React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';
import {deepClone} from '../helpers/_Object';


class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {fixedMenu: false, openMenu : {aboutUs : false, portfolio : false}}

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }

    componentDidMount() {
        window.addEventListener("scroll", function (event) {

            let fixedMenu = +window.scrollY > 50;

            if (this.state.fixedMenu !== fixedMenu) {
                this.setState({fixedMenu});
            }
        }.bind(this))
    }

    openMenu(e){
        let {id} =  e.target.dataset;
        let openMenu = deepClone(this.state.openMenu);

        Object.keys(openMenu).forEach(function (index) {
            openMenu[index] = index === id && openMenu[index] === false ? true : false;
        })

        this.setState({openMenu});
    }

    closeMenu(e){

        let openMenu = deepClone(this.state.openMenu);

        Object.keys(openMenu).forEach(function (index) {
            openMenu[index] = false;
        })

        this.setState({openMenu});
    }

    render() {

        let classMenu = this.state.fixedMenu ?
            'navbar navbar-default topnav  navbar-fixed-top' :
            'navbar navbar-default topnav';

        let {openMenu = {}} = this.state;

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
                                <li onMouseLeave={this.closeMenu} onMouseEnter={this.openMenu} className={openMenu.aboutUs ? "dropdown open" : ""}>
                                    <a data-id="aboutUs" href="#about">О компании <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">О Нас</a></li>
                                        <li><a href="#">Лицензии и сертификаты</a></li>
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
                                <li data-id="portfolio" onMouseLeave={this.closeMenu} onMouseEnter={this.openMenu} className={openMenu.portfolio ? "dropdown open" : ""}>
                                    <a data-id="portfolio"  href="#contact">Портфолио<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Промышленность</a></li>
                                        <li><a href="#">Аграрный сектор</a></li>
                                        <li><a href="#">Строительство</a></li>
                                        <li><a href="#">Транспортная инфраструктура</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="intro-header">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="intro-message">
                                    <h1>Электрим 2000</h1>
                                    <h3>Комплексные решения по инженерному обеспечению</h3>
                                    <hr className="intro-divider"/>

                                </div>
                            </div>
                        </div>

                    </div>

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
    return {};
}

function mapDispatchToProps(dispatch, {params}) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
