import React from "react";
import HornedBeast from "./hornedbeast";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let data = require('./data.json');

class Filter extends React.Component {
    render() {
        return (   <>
            <Row xs={1} md={2} lg={3}>

                {
                    this.props.allBeast.filter(val =>
                        (this.props.horns === data.horns) ? 
                        <Col>
                        <HornedBeast key={val.title} title={val.title} src={val.image_url} des={val.description} displayModal={this.props.displayModal} data={val} />
                        </Col>: ''
                    )
                    }
            </Row>               
             </>
             );
          
        
    }

}

export default Filter;

