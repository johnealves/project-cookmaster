import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Login.css'

function Login() {

  const onSubmit = (ev) => {
    ev.preventDefault()

    const email = document.getElementById('input-email').value
    const password = document.getElementById('input-password').value
    

  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="input-email" className="form-label">
            Email:
            <input id="input-email" className="form-control" type="text" placeholder="Email" required />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="input-password" className="form-label">
            Senha:
            <input id="input-password" className="form-control" type="password" placeholder="senha" required />
          </label>
        </div>
        <button type="submit" className="btn btn-primary"  onClick={ onSubmit } >
          Entrar
        </button>
        <div id="passwordHelpBlock" className="form-text">
          Ainda não é cadastrado? <Link to="signin">clique aqui</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;