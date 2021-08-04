import axios from 'axios';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserUpdateRegister({ user }) {
  const history = useHistory();

  const submitUpdateUser = (ev) => {
    ev.preventDefault()

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.put(`https://cookmaster-back-end.herokuapp.com/users/${user.userId}`, {
      username,
      email,
      password,
    })
    .then(() => history.push('/'))
    .catch((err) => alert(err.message));
  }

  return (
    <form className="">
      <h2>Cadastro</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Nome de Usuario:
          <input 
            id="username"
            className="form-control"
            type="name"
            placeholder="usuario"
            defaultValue={ user.username }
            required
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email" >
          Email:
          <input id="email" className="form-control" type="email" defaultValue={ user.email } placeholder="Email" required/>
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password" >
          Senha:
          <input id="password" className="form-control" type="password" placeholder="Senha" required/>
        </label>
      </div>
      <Button variant="danger" type="submit" onClick={ submitUpdateUser }>
        Atualizar
      </Button>
    </form>
  )
}

const mapStateToProps = ({ userReducer }) => ({
  token: userReducer.token,
})

export default connect(mapStateToProps)(UserUpdateRegister);