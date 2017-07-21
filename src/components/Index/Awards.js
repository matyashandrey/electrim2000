import React, {Component} from 'react';
import Slider from 'react-slick';
import {Tooltip} from 'react-bootstrap'


class Awards extends Component {
    constructor(props) {
        super(props);
        this.state = {slider: false};
    }

    componentDidMount() {

        setTimeout(function () {
            this.setState({slider: true});
        }.bind(this), 100)

    }


    render() {

        let settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            className: 'carousel-inner'
        };

        return (<div className="row" ref="slider">
                <br/>
                {this.state.slider ? <Slider {...settings}>
                        <div className="col-lg-2 col-sm-3">
                            <a href="javascript:void(0)" className="portfolio-box">
                                <Tooltip placement="right" className="in" id="tooltip-right">
                                    Лалалалла ів
                                </Tooltip>
                                <img src="/img/awards/1.JPG" className="img-responsive" alt=""/>

                            </a>

                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <a href="javascript:void(0)" className="portfolio-box">
                                <img src="/img/awards/2.JPG" className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <a href="javascript:void(0)" className="portfolio-box">
                                <img src="/img/awards/3.JPG" className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <a href="javascript:void(0)" className="portfolio-box">
                                <img src="/img/awards/4.JPG" className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <a href="javascript:void(0)" className="portfolio-box">
                                <img src="/img/awards/5.JPG" className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <a href="javascript:void(0)" className="portfolio-box">
                                <img src="/img/awards/6.JPG" className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <a href="javascript:void(0)" className="portfolio-box">
                                <img src="/img/awards/8.JPG" className="img-responsive" alt=""/>
                            </a>
                        </div>
                    </Slider> : <div/>}
            </div>
        );

    }
}


export default Awards;
