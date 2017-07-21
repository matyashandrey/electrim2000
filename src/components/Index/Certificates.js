import React, {Component} from 'react';
import Slider from 'react-slick';
import {Modal} from 'react-bootstrap';


class Certificates extends Component {
    constructor(props) {
        super(props);
        this.state = {popupPhoto: '', slider: false, showModal: false};

        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    componentDidMount() {

        setTimeout(function () {
            this.setState({slider: true});
        }.bind(this), 100)

    }

    openPopup(event) {
        let {src} = event.target.dataset;
        let popupPhoto = src.replace(/\-min/, '');
        this.setState({popupPhoto});
        this.setState({ showModal: true });
    }
    closePopup() {
        this.setState({ showModal: false });
    }

    render() {

        let certificatesArr = ['/img/certificate/1-min.jpg', '/img/certificate/2-min.jpg', '/img/certificate/3-min.jpg',
            '/img/certificate/4-min.jpg', '/img/certificate/5-min.jpg', '/img/certificate/6-min.jpg',
            '/img/certificate/7-min.jpg', '/img/certificate/8-min.jpg', '/img/certificate/9-min.jpg']

        let settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            className: 'carousel-inner',
            prevArrow: (<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span style={{position: 'absolute', marginTop: '7%'}}
                      className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>),
            nextArrow: (<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span style={{position: 'absolute', right: '0px', marginTop: '7%'}}
                      className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>)
        };


        let certificatesHtml = certificatesArr.map(function (item) {
            return <div key={item} className="col-lg-4 col-sm-6">
                <a data-src={item} onClick={this.openPopup.bind(item)} href="javascript:void(0)"
                   className="portfolio-box">
                    <img data-src={item} src={item} className="img-responsive center-block" alt=""/>
                    <div data-src={item} className="portfolio-box-caption">
                        <div className="portfolio-box-caption-content">
                            <div className="project-category text-faded">

                            </div>
                        </div>
                    </div>
                </a>
            </div>
        }.bind(this))

        let {showModal} = this.state;

        return (<div className="row padding-15">
                {this.state.slider ? <Slider {...settings}>
                        {certificatesHtml}
                    </Slider> : false}

                <Modal show={showModal} onHide={this.closePopup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Описание</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <img width='100%' src={this.state.popupPhoto}/>
                        </Modal.Body>
                </Modal>
            </div>
        );

    }
}


export default Certificates;
