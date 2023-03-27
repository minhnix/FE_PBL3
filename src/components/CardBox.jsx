import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBox() {
    return (
        <Card style={{ width: '18rem', boxShadow: "7px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <Card.Img variant="top" src="Card1.png" />
            <Card.Body>

                <Card.Text style={{ textAlign: "center" }}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default CardBox;