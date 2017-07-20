import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';


class actionVirtus extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {

        let photo_main = 'https://cdn.riastatic.com/docs/market/market_logo/5121610/512161020/51216102010/51216102010.jpg';

        return ( <div>
           <Helmet title="Акция Virtus: купи чехлы – выиграй ковры на MARKET.RIA" meta={[
                {'name': 'description', 'content': 'Спеши! При покупке чехлов из автоткани VIRTUS Вы автоматически становитесь участником розыгрыша ковров в салон из низкого ворса.'},
                {'name': 'og:image', 'content': photo_main}
            ]} />
            <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">Наши проекты</h2>
                <hr className="primary"/>
            </div>
            <section className="no-padding" id="portfolio">
                <div className="container-fluid">
                    <div className="row no-gutter popup-gallery">
                        <div className="col-lg-4 col-sm-6">
                            <a href="/img/clients/test1.jpg" className="portfolio-box">
                                <img src="/img/clients/test1.jpg" className="img-responsive" alt=""/>
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
                                <img height='320px' src="/img/clients/test4.png" className="img-responsive" alt=""/>
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
                                <img src="/img/clients/test1.jpg" className="img-responsive" alt=""/>
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
        </div>);

    }
}

actionVirtus.displayName = 'actionVirtus';

function mapStateToProps(state) {
    return {
        screenType : state.screenType
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(actionVirtus);
