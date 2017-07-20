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
                Hello Electrim2000! It's your new site)
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
