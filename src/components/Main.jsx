import { Button, Form, Table } from 'react-bootstrap';
import itens from '../datasets/Carrosel';
import produtosDataSet from '../datasets/Produto';
import Carrosel from './Carrosel';
import Compras from './Compras';
import { useState } from 'react';

const Main = () => {
  let [incremento, setIncremento] = useState(0);

  let [produtos, setProdutos] = useState([...produtosDataSet]);

  let [titulo, setTitulo] = useState('Café Expresso');

  const handleClickIncrementar = (e) => {
    setIncremento(incremento + 1);
  };

  return (
    <main>
      <Carrosel itens={itens} />
      <Compras produtos={produtos}></Compras>
      Valor de variável i: {incremento}
      <Button onClick={handleClickIncrementar}>Incrementar</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, i) => {
            return (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.titulo}</td>
                <td>{produto.descricao}</td>
                <td>{produto.valor}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Título</Form.Label>
          <Form.Control
            onChange={(e) => {
              const valor = e.target.value;
              setTitulo(valor);
              console.log(valor);
            }}
            value={titulo}
            type="text"
            placeholder="Digite o título"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </main>
  );
};

export default Main;
