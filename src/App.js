import '../src/styles/styles.css'
import { useState } from 'react';
import Alunos from '../src/components/Alunos'
import UserProvider from './contexts/user'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Context API</h1>
        <Alunos />
      </div>
    </UserProvider>
  );
}

export default App;