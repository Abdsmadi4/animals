import React from "react";

class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                    <h2> {this.props.h2Value} </h2>
                    <img src={this.props.src} alt={this.props.alt} title={this.props.title} />
                    <p> {this.props.pValue} </p>
            </div>

        );
    }
}

export default HornedBeast;