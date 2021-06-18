function Nome({ nome, mudaNome }) {
  return (
    <div className="App">
      <hr />
      <h3>Aluno de Nome: {nome}</h3>
      <br />
      <button onClick={() => mudaNome('Gabrielton')}>Mudar Nome</button>
    </div>
  );
}

export default Nome;