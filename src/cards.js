import React from "react";
import Card from "react-bootstrap/Card";


class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          clickCounter: 0
        }
      }

      handleClick = () => {
        this.setState({clickCounter: this.state.clickCounter + 1})
      }

  render() {
    return (
      <>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.src}
            alt={this.props.alt}
            onClick={this.handleClick}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <span>❤️{this.state.clickCounter}</span>{" "}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cards;