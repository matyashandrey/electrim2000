import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';



class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};

        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    openPopup() {
        this.setState({ showModal: true });
    }
    closePopup() {
        this.setState({ showModal: false });
    }

    render() {

        let {item} = this.props;

        return (
            <div className="row">
                <hr className="primary"/>
                <div className="col-lg-3 col-sm-4">
                    {item.imgPreview ? <a onClick={this.openPopup} href="javascript:void(0)"
                       className="portfolio-box">
                        <img className="center-block" src={item.imgPreview}
                             alt="Generic placeholder image" height="350"/>
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Просмотр
                                </div>
                            </div>
                        </div>
                    </a> : false}

                </div>
                <div className="col-lg-9 col-sm-8">
                    <div>
                        <div className="col-lg-2 pull-left padding-7">
                            <img src={item.logo}/>
                        </div>

                        <div className="col-lg-10 pull-left" >
                            <h4 style={item.title.length < 50 ? { lineHeight: '40px'} : {}}>{item.title}</h4>
                        </div>

                    </div>
                    <div className="clearfix"/>
                    <blockquote>
                        {item.text}<footer>{item.autor}</footer>
                    </blockquote>
                </div>
                <Modal show={this.state.showModal} onHide={this.closePopup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Описание</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img width='100%' src={item.img}/>
                    </Modal.Body>
                </Modal>
            </div>
        );

    }
}


export default Item;
