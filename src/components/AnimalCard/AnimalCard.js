import React from "react";
import Card from "react-bootstrap/Card"

class AnimalCard extends React.Component {
    render(){
        return (
            <Card className="m-1" style={{ width: '10rem' }}>
                <Card.Img variant="top" src={`images/animals/${this.props.img}.jfif`} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center">{this.props.name}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default AnimalCard

