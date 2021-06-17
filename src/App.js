import firebase from './firebaseConfig';
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [cargo, setCargo] = useState('')
  const [nome, setNome] = useState('')

  async function cadastrarNovoUsuario() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(async response => {
        await firebase.firestore().collection('users')
          .doc(response.user.uid)
          .set({
            nome: nome,
            email: email,
            cargo: cargo,
            uid: response.user.uid
          })
        alert('Dados cadastradors')
      })
      .catch(error => {
        console.log(error.code)
        const message = {
          'auth/weak-password': 'Senha muito fraca',
          'auth/email-already-in-use': 'Email já existente'
        }[error.code]

        alert(message)
      }).finally(() => {
        setNome('')
        setEmail('')
        setSenha('')
        setCargo('')
      })
  }

  async function logout() {
    await firebase.auth().signOut();
  }

  // async function fazerLogin() {
  //   await firebase.auth().signInWithEmailAndPassword(email, senha)
  //     .then(() => {
  //       alert('Login feito com sucesso.')
  //       setUser(true)
  //     })
  //     .catch(err => {
  //       const message = {
  //         'auth/wrong-password': 'Senha errada ou você não possui uma senha.'
  //       }[err.code]

  //       alert(message)
  //     })
  // }

  return (

    <div className="App">
      <h1>React JS + Firebase</h1>

      Nome:<input type="text" value={nome} onChange={e => setNome(e.target.value)} /> <br />
      Cargo:<input type="text" value={cargo} onChange={e => setCargo(e.target.value)} /> <br />
      E-mail:<input type="email" value={email} onChange={e => setEmail(e.target.value)} /> <br />
      Senha:<input type="text" value={senha} onChange={e => setSenha(e.target.value)} /> <br /><br />
      <button onClick={() => cadastrarNovoUsuario()}>Cadastrar</button>
      <button onClick={logout}>Sair da Conta</button>
    </div>
  );
}



export default App;