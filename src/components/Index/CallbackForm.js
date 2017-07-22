import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import * as Validate from '../../helpers/validate'

class CallbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {fio: '', phone: '', email: '', error: {}, success: {}};
        this.enterFIO = this.enterFIO.bind(this);
        this.enterPhone = this.enterPhone.bind(this);
        this.enterEmail = this.enterEmail.bind(this);
        this.sendForm = this.sendForm.bind(this);

    }

    componentDidMount() {

    }

    enterFIO(event) {
        let {value : fio = ''} = event.target;
        this.setState({fio});
        this.setState({error: {}});
        this.setState({success: {}});
    }

    enterPhone(event) {
        let {value : phone = ''} = event.target;
        this.setState({phone});
        this.setState({error: {}});
        this.setState({success: {}});
    }

    enterEmail(event) {
        let {value : email = ''} = event.target;
        this.setState({email});
        this.setState({error: {}});
        this.setState({success: {}});
    }

    sendForm() {

        let error = {}, success = {};

        if (!Validate.isName(this.state.fio || '')) {
            error.fio = true;
        } else {
            success.fio = true;
        }

        if (!Validate.isPhone(this.state.phone || '')) {
            error.phone = true;
        } else {
            success.phone = true;
        }

        if (!Validate.isEmail(this.state.email || '')) {
            error.email = true;
        } else {
            success.email = true;
        }
        this.setState({error});
        this.setState({success});

        if (!Object.keys(error).length){
            alert('ok');
            this.props.closeCallPopup();
        }
    }

    render() {

        let {showModal, closeCallPopup} = this.props;
        let {error, success} = this.state;

        let classNameFio = 'form-group';
        if (error.fio) {
            classNameFio = "form-group has-error has-feedback"
        } else if (success.fio) {
            classNameFio = "form-group has-success has-feedback"
        }

        let classNameEmail = 'form-group';
        if (error.email) {
            classNameEmail = "form-group has-error has-feedback"
        } else if (success.email) {
            classNameEmail = "form-group has-success has-feedback"
        }

        let classNamePhone = 'form-group';
        if (error.phone) {
            classNamePhone = "form-group has-error has-feedback"
        } else if (success.phone) {
            classNamePhone = "form-group has-success has-feedback"
        }

        return (
            <Modal show={showModal} onHide={closeCallPopup}>
                <form>
                    <Modal.Header closeButton>
                        <Modal.Title>Закажите бесплатный расчет стоимости по Вашему объекту</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={classNameFio}>
                            <label htmlFor="usr">ФИО:</label>
                            <input onChange={this.enterFIO} placeholder="Введите Ваше Имя" type="text" className="form-control"
                                   value={this.state.fio}/>
                            {error.fio ?
                                <span className="glyphicon glyphicon-remove form-control-feedback"></span> : false}
                            {success.fio ?
                                <span className="glyphicon glyphicon-ok form-control-feedback"></span> : false}
                        </div>
                        <div className={classNamePhone}>
                            <label htmlFor="pwd">Телефон:</label>
                            <input  onChange={this.enterPhone} placeholder="Введите Ваш номер телефона" type="text" className="form-control"
                                   value={this.state.phone}/>
                            {error.phone ?
                                <span className="glyphicon glyphicon-remove form-control-feedback"></span> : false}
                            {success.phone ?
                                <span className="glyphicon glyphicon-ok form-control-feedback"></span> : false}
                        </div>
                        <div className={classNameEmail}>
                            <label htmlFor="pwd">Email:</label>
                            <input onChange={this.enterEmail} type="text" className="form-control"
                                   value={this.state.email}/>
                            {error.email ?
                                <span className="glyphicon glyphicon-remove form-control-feedback"></span> : false}
                            {success.email ?
                                <span className="glyphicon glyphicon-ok form-control-feedback"></span> : false}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" onClick={this.sendForm} className="btn btn-success pull-right">Отправить
                            заявку
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        );

    }
}


export default CallbackForm;
