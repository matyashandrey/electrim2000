import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {

    }


    render() {


        return (
            <div className="row padding-15" style={{backgroundColor : '#d9edf7'}}>
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2> Закажите бесплатный выезд</h2>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6  text-left">
                        <ul className="list-group">
                            <li className="list-group-item">- Нужен энергоаудит предприятия</li>
                            <li className="list-group-item">- Техническая документация</li>
                            <li className="list-group-item">- Проектные работы</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-left">
                        <ul className="list-group">
                            <li className="list-group-item">- Комплекс работ по разработке и внедрению АСУ ТП</li>
                            <li className="list-group-item">- Электрооборудование</li>
                            <li className="list-group-item">- Строительно-монтажные работы</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <button type="button" onClick={this.props.openCallPopup} className="btn btn-success center-block">Оформить заявку</button>
                </div>

            </div>
        );

    }
}


export default Form;
