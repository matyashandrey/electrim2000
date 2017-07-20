import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';


class actionVirtus extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {

        let photo_main = 'https://cdn.riastatic.com/docs/market/market_logo/5121610/512161020/51216102010/51216102010.jpg';

        return ( <div className="container">
            <Helmet title="Акция Virtus: купи чехлы – выиграй ковры на MARKET.RIA" meta={[
                {
                    'name': 'description',
                    'content': 'Спеши! При покупке чехлов из автоткани VIRTUS Вы автоматически становитесь участником розыгрыша ковров в салон из низкого ворса.'
                },
                {'name': 'og:image', 'content': photo_main}
            ]}/>
            <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">Наши проекты</h2>
                <hr className="primary"/>
            </div>
            <section className="no-padding" id="portfolio">
                <div className="container-fluid">
                    <div className="row no-gutter popup-gallery">
                        <div className="col-lg-4 col-sm-6">
                            <a href="/img/clients/test1.jpg" className="portfolio-box">
                                <img src="/img/clients/prez.jpg" className="img-responsive" alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">

                                        </div>
                                        <div className="project-name">
                                            Администрация Президента Украины
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href="/img/clients/test4.png" className="portfolio-box">
                                <img height='320px' src="/img/clients/mandarin_plaza.jpg" className="img-responsive"
                                     alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">

                                        </div>
                                        <div className="project-name">
                                            ТРЦ "Мандарин Плаза"
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href="/img/clients/test1.jpg" className="portfolio-box">
                                <img src="/img/clients/nemiroff.jpg" className="img-responsive" alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            ДП Украинская водочная компания
                                        </div>
                                        <div className="project-name">
                                            "Nemiroff"
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">Электрим 2000 - надежный партнер</h2>
                <hr className="primary"/>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="col-lg-3">
                        <img className="img-circle"
                             src="/img/guaranty/hand.png"
                             alt="Generic placeholder image" width="90" height="90"/>
                    </div>
                    <div className="col-lg-9">
                        <h3>Комплексные решения под ключ</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-default" href="#" role="button">Подробнее »</a></p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="col-lg-3">
                        <img className="img-circle"
                             src="/img/guaranty/innovation.png"
                             alt="Generic placeholder image" width="90" height="90"/>
                    </div>
                    <div className="col-lg-9">
                        <h3>Инновационные технологии</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-default" href="#" role="button">Подробнее »</a></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="col-lg-3">
                        <img className="img-circle"
                             src="/img/guaranty/dollar.png"
                             alt="Generic placeholder image" width="90" height="90"/>
                    </div>
                    <div className="col-lg-9">
                        <h3>Оптимизируем расходы</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-default" href="#" role="button">Подробнее »</a></p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="col-lg-3">
                        <img className="img-circle"
                             src="/img/guaranty/garranty.png"
                             alt="Generic placeholder image" width="90" height="90"/>
                    </div>
                    <div className="col-lg-9">
                        <h3>Гарантия качества</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-default" href="#" role="button">Подробнее »</a></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Сертификация качества</h2>
                    <hr className="primary"/>
                </div>
                <section className="no-padding" id="portfolio">
                    <div className="container-fluid">
                        <div className="row no-gutter popup-gallery">
                            <div className="col-lg-4 col-sm-6">
                                <a href="/img/clients/test1.jpg" className="portfolio-box">
                                    <img src="/img/clients/prez.jpg" className="img-responsive" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">

                                            </div>
                                            <div className="project-name">
                                                Администрация Президента Украины
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="/img/clients/test4.png" className="portfolio-box">
                                    <img height='320px' src="/img/clients/mandarin_plaza.jpg" className="img-responsive"
                                         alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">

                                            </div>
                                            <div className="project-name">
                                                ТРЦ "Мандарин Плаза"
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="/img/clients/test1.jpg" className="portfolio-box">
                                    <img src="/img/clients/nemiroff.jpg" className="img-responsive" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                ДП Украинская водочная компания
                                            </div>
                                            <div className="project-name">
                                                "Nemiroff"
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">О нашей компаниии</h2>
                    <hr className="primary"/>
                </div>
                <div className="col-lg-4">
                    <div className="col-lg-3">
                        <img className="img-circle"
                             src="/img/guaranty/tools.png"
                             alt="Generic placeholder image" width="90" height="90"/>
                    </div>
                    <div className="col-lg-9">
                        <h3>Работаем с 2007 года</h3>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="col-lg-3">
                        <img className="img-circle"
                             src="/img/guaranty/proffesional.png"
                             alt="Generic placeholder image" width="90" height="90"/>
                    </div>
                    <div className="col-lg-9">
                        <h3>Команда проффесиналов</h3>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="col-lg-3">
                        <img className="img-circle"
                             src="/img/guaranty/finish.png"
                             alt="Generic placeholder image" width="90" height="90"/>
                    </div>
                    <div className="col-lg-9">
                        <h3>Реализованно более ??? поектов</h3>
                    </div>
                </div>


            </div>
        </div>);

    }
}

actionVirtus.displayName = 'actionVirtus';

function mapStateToProps(state) {
    return {
        screenType: state.screenType
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(actionVirtus);
