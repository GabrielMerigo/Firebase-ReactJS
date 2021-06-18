import { Context } from '../../contexts/user';
import { useContext } from 'react';

function Nome() {
  const { alunos, setAlunos } = useContext(Context)

  return (
    <div className="App">
      <hr />
      <h3>Aluno de Nome: {alunos}</h3>
      <br />
      <button onClick={() => setAlunos('Neilton')}>Mudar Nome</button>
    </div>
  );
}

export default Nome;