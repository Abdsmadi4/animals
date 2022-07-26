import React from "react";
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count : 0 
        };
    }

    favorite = () =>{
        this.setState({count : this.state.count +1})
    }
    render() {
        

        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.src} onClick={this.favorite}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}  ❤️{this.state.count} </Card.Title>
                        <Card.Text>
                            {this.props.des}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </>
        );
    }
}

export default HornedBeast;