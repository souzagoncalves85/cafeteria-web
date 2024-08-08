import itens from '../datasets/Carrosel';
import produtos from '../datasets/Produto';
import Carrosel from './Carrosel';
import Compras from './Compras';

const Main = () => {
  let i = 0;

  const handleClick = (e) => {
    i = i + 1;
    console.log(i);
  };

  return (
    <main>
      <Carrosel itens={itens} />
      <Compras produtos={produtos}></Compras>
    </main>
  );
};

export default Main;
