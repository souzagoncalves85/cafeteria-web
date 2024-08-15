import itens from '../datasets/Carrosel';
import produtosDataSet from '../datasets/Produto';
import Carrosel from './Carrosel';
import ComprasCard from './ComprasCard';
import { useState } from 'react';
import ComprasTable from './ComprasTable';
import ProdutoForm from './ProdutoForm';

const Main = () => {
  let [produtos, setProdutos] = useState([...produtosDataSet]);

  return (
    <main>
      <Carrosel itens={itens} />
      <ComprasCard produtos={produtos}></ComprasCard>
      <ComprasTable produtos={produtos}></ComprasTable>
      <ProdutoForm></ProdutoForm>
    </main>
  );
};

export default Main;
