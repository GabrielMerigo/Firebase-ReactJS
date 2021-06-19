import { useContext } from 'react';
import { UserContext } from '../../contexts/user'

function Nome() {
  const { aluno, setAluno, qtdAlunos, setQtdAlunos } = useContext(UserContext)

  return (
    <div>
      <h1>Nome: {aluno}</h1>
      <button onClick={() => setAluno('Thiago')}>Trocar Nome</button>
      <button onClick={() => setQtdAlunos(qtdAlunos + 1)}>Aumentar qtd alunos</button><span>Numero de alunos: {qtdAlunos}</span>
    </div>
  )
}

export default Nome