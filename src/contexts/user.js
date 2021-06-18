import { useState, createContext } from "react";

export const Context = createContext({})

function UserProvider({ children }){
  const [alunos, setAlunos] = useState('Sujeito Programador') 

  return(
    <Context.Provider value={{ alunos, setAlunos }}>
      {children}
    </Context.Provider>
  )
}

export default UserProvider;