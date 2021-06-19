import { createContext, useState } from "react";

export const UserContext = createContext({})

function UserProvider({ children }) {
  const [aluno, setAluno] = useState('gabriel')
  const [qtdAlunos, setQtdAlunos] = useState(0)

  return (
    <UserContext.Provider value={{ aluno, setAluno, qtdAlunos, setQtdAlunos  }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider