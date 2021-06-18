import Nome from "../Nome";

function Alunos({ nome, mudaNome }) {
  return (
    <div className="App">
      <h2>Alunos - Escola</h2>
      <Nome nome={nome} mudaNome={mudaNome}/>
    </div>
  );
}

export default Alunos;