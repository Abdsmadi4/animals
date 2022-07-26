import React from "react";
import Selected from "./selectedBeast";
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count : 0 ,
            isOpen: false
        };
    }

    favorite = () =>{
        this.setState({count : this.state.count +1})
    }

    changeState = ()=>{
        if(this.state.isOpen){
            this.setState({isOpen : false})
        }else{
            this.setState({isOpen : true})
        }
    }
 
    render() {
        

        return (
            <>
            <Selected changeState={this.changeState} checkIsOpen={this.state.isOpen}/>
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