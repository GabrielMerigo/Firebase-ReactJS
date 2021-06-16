import firebase from './firebaseConfig';
import { useState, useEffect } from 'react'

function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [idPost, setIdPost] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      firebase.firestore().collection('posts').onSnapshot((snapshot => {
        let lista = [];

        snapshot.forEach(doc => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })

        setPosts(lista)
      }))
    }

    loadPosts()
  }, [])

  async function handleAdd() {
    await firebase
      .firestore().collection('posts')
      .add({
        titulo: titulo,
        autor: autor
      }).then(() => {
        console.log('dados cadastrados :)')
      })
      .catch(err => {
        console.log(err.message)
      })
      .finally(() => {
        setAutor('')
        setTitulo('')
      })
  }

  async function buscarPost() {
    await firebase.firestore().collection('posts')
      .get()
      .then(snapshot => {
        let lista = [];

        snapshot.forEach(doc => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })

        setPosts(lista)
      }).catch(() => console.log('deu algum erro'))
  }

  async function editarPost() {
    await firebase.firestore().collection('posts')
      .doc(idPost)
      .update({
        titulo: titulo,
        autor: autor
      }).then(() => {
        alert('Dados Atualizados com sucessos')
      })
      .catch(err => {
        console.log('Deu falha!!', + err)
      }).finally(() => {
        setAutor('')
        setTitulo('')
        setIdPost('')
      })
  }

  async function excluirPost(id) {
    await firebase.firestore().collection('posts')
    .doc(id).delete()
    .then(() => {
      alert('post excluido')
    })
  }

  return (
    <div className="App">
      E-mail:<input type="email"/> <br/>
      Senha:<input type="text"/> <br/><br/>
      <button>Logar</button> 
      <button>Cadastrar</button> <br/><br/>

      ID:<input type="text" value={idPost} onChange={e => setIdPost(e.target.value)} /> <br />
      Titulo:<input value={titulo} type="text" onChange={(e) => setTitulo(e.target.value)} /> <br />
      Autor:<input value={autor} type="text" onChange={(e) => setAutor(e.target.value)} /> <br />
      <button onClick={buscarPost}>Buscar Post</button>
      <button onClick={handleAdd}>Cadastrar</button>
      <button onClick={editarPost}>Editar</button>
      {
        posts.map(post => {
          return (
            <ul key={post.id}>
              <li>ID: {post.id}</li>
              <li>Titulo: {post.titulo}</li>
              <span>Autor: {post.autor}</span> <br />
              <button onClick={() => excluirPost(post.id)}>Excluir</button>
            </ul>
          )
        })
      }
    </div>
  );
}



export default App;