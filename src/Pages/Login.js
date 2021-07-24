import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { noCors } from '../Api/get';
import '../CSS/Login.css'
import { setToken } from '../Redux/Actions/userActions';

function Login({ newToken }) {
  const history = useHistory();

  const onSubmit = (ev) => {
    ev.preventDefault()
    console.log('submit')
    const username = document.getElementById('input-username').value
    const password = document.getElementById('input-password').value
    
    axios.post(`${noCors}https://cookmaster-back-end.herokuapp.com/login`, {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem('cookmasterToken', response.data.token)
      newToken(response.data.token)
    })
    .then(() => history.push('/'))
    .catch((err) => alert('Dados incorretos! Verifique usuario e senha e tente novamente.'))

  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="input-username" className="form-label">
            Email:
            <input id="input-username" className="form-control" type="text" placeholder="Email" required />
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

const mapDispatchToProps = (dispatch) => ({
  newToken: (token) => dispatch(setToken(token)),
});

export default connect(null, mapDispatchToProps)(Login);