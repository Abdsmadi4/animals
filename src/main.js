import React from "react";
import HornedBeast from "./hornedbeast";
import data from "./data.json"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends React.Component{
    
    render(){
        return (
            <Row xs={1} md={2} lg={3}>

                {
                 data.map(val => 
                    <Col>
                    <HornedBeast  title={val.title} src={val.image_url} des={val.description} />
                    </Col>
                 )
                }
            </Row>
        );
    }
}

export default Main;