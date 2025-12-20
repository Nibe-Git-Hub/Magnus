import { Card } from 'react-bootstrap'

function Team({ team }) {
  return (
 <Card className="my-3 p-3 rounded">
    <Card.Img src={team.image} alt={team.name} variant="top" />

    <Card.Body>
        <Card.Title as="div"> 
            <strong>{team.name}</strong>
        </Card.Title>
        
        <Card.Text as="div">
            <div>{team.role}</div>
            <div>{team.cred}</div>
        </Card.Text>
    </Card.Body>
 </Card>
  )
}

export default Team
