import Nome from "../Nome";
import { Context } from '../../contexts/user';
import { useContext } from 'react';

function Alunos() {
  const { alunos } = useContext(Context)

  return (
    <div className="App">
      <h2>Alunos ({alunos}) - Escola</h2>
      <Nome/>
    </div>
  );
}

export default Alunos;