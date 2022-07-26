import React from "react";
import HornedBeast from "./hornedbeast";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {

    render() {
        return (
            <>
                <Form.Group className="mb-3">
                    <Form.Select aria-label="Default select example" id="hornesSelector" onChange={(e) => this.props.filterHornes(e)}>
                        <option>Open this select menu</option>   
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">WOW</option>
                    </Form.Select>
                </Form.Group>

                <Row xs={1} md={2} lg={3}>

                    {
                        this.props.allBeast.map(val =>
                            <Col>
                                <HornedBeast key={val.title} title={val.title} src={val.image_url} des={val.description} displayModal={this.props.displayModal} data={val} />
                            </Col>
                        )
                    }
                </Row>

            </>


        );
    }
}

export default Main;