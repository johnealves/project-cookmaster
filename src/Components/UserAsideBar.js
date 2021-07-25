import React from 'react';
import { connect } from 'react-redux';
import { setSection } from '../Redux/Actions/userPageAction';

function UserAsideBar({ setSection }) {
  const handleSection = (ev) => {
    setSection(ev.target.name)
  }

  return (
    <aside className="user-aside-bar" onClick={ handleSection }>
      <button name="my-recipes" >Minhas receitas</button>
      <button name="my-favorites-recipes" >Receitas Favoritas</button>
      <button name="update-register" >Cadastro</button>
    </aside>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setSection: (section) => dispatch(setSection(section)),
})

export default connect(null, mapDispatchToProps)(UserAsideBar);