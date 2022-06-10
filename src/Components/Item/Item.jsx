import {Card,Button} from 'react-bootstrap'


function Item (){
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item