import  { useEffect, useRef, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import '../index.css';

import User from '../components/UserCard';
import UserForm from './UserForm';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let buttonAdd = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);




  return (
    <main>
      <Container>
        <h1 className="text-center">Menu</h1>
        <div className="text-right">
          <Button
            variant="secondary"
            className="mr-4 font-weight-bold"
            onClick={handleShow}
            ref={buttonAdd}
          >
            + 
          </Button>
        </div>

        <Row className="my-2">
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </Row>

        <UserForm
          show={show}
          handleClose={handleClose}
          users={users}
          setUsers={setUsers}
        ></UserForm>
      </Container>
    </main>
  );
};

export default Login;