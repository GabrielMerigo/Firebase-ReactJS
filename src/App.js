import '../src/styles/styles.css'
import { useState } from 'react';  
import Alunos from '../src/components/Alunos'


function App() {
  const [aluno, setAluno] = useState('Marco Antonio')

  return (
    <div className="App">
      <h1>Context API</h1>
      <Alunos nome={aluno}  mudaNome={setAluno} />
    </div>
  );
}

export default App;