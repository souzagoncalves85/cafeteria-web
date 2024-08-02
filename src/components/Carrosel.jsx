import { Carousel, Container, Image } from 'react-bootstrap';
import './Main.css';

const Carrosel = ({ itens = [] }) => {
  return (
    <Container fluid="sm">
      <Carousel>
        {itens.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <Image fluid src={item.imagemUrl} />
              <Carousel.Caption>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Carrosel;
