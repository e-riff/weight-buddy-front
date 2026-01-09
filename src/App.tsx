import type {User} from './types/user'
import { useState } from 'react'
import './App.css'
import {Login} from "./components/user/Login.tsx";

function App() {
  const [user] = useState<User | null>(null)

  return (
      user
          ? <div> connecté !</div>
          : <Login/>
  )
}

export default App
