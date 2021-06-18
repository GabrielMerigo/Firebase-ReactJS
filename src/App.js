import firebase from './firebaseConfig';
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [cargo, setCargo] = useState('')
  const [nome, setNome] = useState('')

  const [user, setUser] = useState({})

  async function cadastrarNovoUsuario() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(async response => {
        console.log('iniciado cadastro')
        await firebase.firestore().collection('users')
          .doc(response.user.uid)
          .set({
            nome: nome,
            email: email,
            cargo: cargo,
            uid: response.user.uid
          })
        alert('Dados cadastrados')
      })
      .catch(error => {
        console.log(error.code)
        const message = {
          'auth/weak-password': 'Senha muito fraca',
          'auth/email-already-in-use': 'Email já existente'
        }[error.code]
        console.log('erross')
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
    setUser({})
  }

  async function login () {
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(async response => {
      await firebase.firestore().collection('users')
        .doc(response.user.uid)
        .get()
        .then(user => {
          const { cargo, email, nome } = user.data()
          setUser({
            cargo: cargo,
            email: email,
            nome: nome
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (

    <div className="App">
      <h1>React JS + Firebase</h1>

      { Object.keys(user).length > 0 && (
        <h1>Olá {user.nome}, seu cargo é {user.cargo} e seu e-mail é {user.email}</h1>
      )}

      Nome:<input type="text" value={nome} onChange={e => setNome(e.target.value)} /> <br />
      Cargo:<input type="text" value={cargo} onChange={e => setCargo(e.target.value)} /> <br />
      E-mail:<input type="email" value={email} onChange={e => setEmail(e.target.value)} /> <br />
      Senha:<input type="text" value={senha} onChange={e => setSenha(e.target.value)} /> <br /><br />
      <button onClick={login}>Fazer Login</button>
      <button onClick={cadastrarNovoUsuario}>Cadastrar</button>
      <button onClick={logout}>Sair da Conta</button>
    </div>
  );
}

export default App;