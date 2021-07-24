import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { noCors } from '../Api/get';
import '../CSS/Login.css'

function Login() {
  const history = useHistory();

  const onSubmit = (ev) => {
    ev.preventDefault()
    console.log('submit')
    const email = document.getElementById('input-email').value
    const password = document.getElementById('input-password').value
    
    axios.post(`${noCors}https://cookmaster-back-end.herokuapp.com/login`, {
      email,
      password,
    })
    .then((response) => localStorage.setItem('token', response.data.token))
    .then(() => history.push('/'))
    .catch((err) => console.log(err))

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