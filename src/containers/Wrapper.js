import React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';




class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <main className="main">
                    {this.props.children}
                </main>

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
