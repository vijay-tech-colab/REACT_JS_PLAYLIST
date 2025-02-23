import React, { useContext, useState } from 'react'
import AuthContext from '../context/context-provider';
function Login() {
    const {user, login, logout} = useContext(AuthContext);
    const [inputValue ,setInput] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(true);
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login