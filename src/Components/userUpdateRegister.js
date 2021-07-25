import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';

function UserUpdateRegister({ token }) {

  useEffect(() => {
    console.log(token)
  }, [])

  const submitUpdateUser = () => {
    console.log('update')
  }

  return (
    <form className="">
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