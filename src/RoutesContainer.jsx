import React, { Component } from "react";
import RoutesView from "./RoutesView";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { me } from "./store/utilities/loggeduser";

class RoutesContainer extends Component {

    componentDidMount() {
        this.props.loadInitialData();
    }

    render() {
        return <RoutesView isLoggedIn={this.props.isLoggedIn} />
    }
}

const mapState = (state) => {
    return {
        isLoggedIn: !!state.loggeduser.id
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadInitialData: () => dispatch(me())
    }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer))