import { Button } from 'react-bootstrap';
import itens from '../datasets/Carrosel';
import Carrosel from './Carrosel';

const Main = () => {
  let i = 0;

  const handleClick = (e) => {
    i = i + 1;
    console.log(i);
  };

  return (
    <main>
      {/* <h1 style={{ color: 'red' }}>Título</h1> */}
      <Carrosel itens={itens} />

      <Button onClick={handleClick}>Enviar</Button>
      <p>{i}</p>
    </main>
  );
};

export default Main;
