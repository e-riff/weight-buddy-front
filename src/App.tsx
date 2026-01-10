import './App.css'
import {Login} from "./components/user/Login.tsx";
import {useAuth} from "./hooks/useAuth.ts";

function App() {
  const {user} = useAuth()

  return (
      user
          ? <div> connecté !</div>
          : <Login/>
  )
}

export default App
