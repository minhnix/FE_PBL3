
import Card from 'react-bootstrap/Card';
import "../styles/cardBox.css"
function CardBox(props) {
    return (
        <Card className={props.type ? 'info' : 'items'} style={{ width: '18rem', boxShadow: "7px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <Card.Img variant="top" src="Card1.png" />
            <Card.Body>
                {props.type === "info" ?
                    <Card.Text style={{ textAlign: "center" }}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                    :
                    <Card.Text style={{ textAlign: "center" }}>
                        <h3>Name</h3>
                        <select name="" id="">
                            <option value="">S</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                        <h4>Prices</h4>
                    </Card.Text>
                }

            </Card.Body>
        </Card>
    );
}

export default CardBox; 