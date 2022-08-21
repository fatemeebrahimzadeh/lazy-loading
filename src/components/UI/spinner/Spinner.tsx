import React, { Component } from "react";
import DotLoader from "react-spinners/DotLoader";

interface IProps {
    isLoading: boolean
}

export default class Spinner extends Component<IProps> {
    render() {
        return (
            <div className='spinnerWrapper'><DotLoader color="#ffa81f" loading={this.props.isLoading} size={60} /></div>
        )
    }
}