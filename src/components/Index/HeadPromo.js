import React, {Component} from 'react';


class HeadPromo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {

    }


    render() {

        return (
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
        );

    }
}


export default HeadPromo;
