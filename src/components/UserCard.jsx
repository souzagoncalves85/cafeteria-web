import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <Col sm="12" md="6" lg="4" xl="3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          {user.name}
        </Card.Header>

        <Card.Body>
          <p>Email: {user.email}</p>
          <p>Data de Nascimento: {user.nascimento}</p>
          <p>CEP: {user.cep}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Adding PropTypes validation
UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    nascimento: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
