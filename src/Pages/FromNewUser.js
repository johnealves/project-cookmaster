import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { noCors } from '../Api/get';
import '../CSS/FormNewUser.css';

function FormNewUser() {
  const history = useHistory()

  const submitNewUser = (ev) => {
    ev.preventDefault()

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post(`${noCors}https://cookmaster-back-end.herokuapp.com/users`, {
      username,
      email,
      password,
    })
    .then(() => history.push('/'))
    .catch((err) => alert('Usuario ou email ja cadastrado'));
  }

  return (
    <form className="form-new-user-container">
      <h2>Cadastro</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Nome de Usuario:
          <input id="username" className="form-control" type="name" placeholder="usuario" required/>
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email" >
          Email:
          <input id="email" className="form-control" type="email" placeholder="Email" required/>
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password" >
          Senha:
          <input id="password" className="form-control" type="password" placeholder="Senha" required/>
        </label>
      </div>
      <Button variant="danger" type="submit" onClick={ submitNewUser }>
        Cadastrar
      </Button>
    </form>
  )
};

export default FormNewUser;