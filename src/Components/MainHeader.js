import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BiFoodMenu, BiUser, BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import '../CSS/MainHeader.css';
import { connect } from 'react-redux';
import { setToken } from '../Redux/Actions/userActions';

function MainHeader({ token, newToken }) {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('cookmasterToken');
    newToken(undefined);
    window.location.reload();
    history.push('/');
  }

  return (
    <header className="main-header">
      <h1>
        <Link to="/">
          {/* <span className="title-project">Project</span> */}
          <span className="title-cookmaster">COOKMASTER</span>
        </Link>
      </h1>
      <nav>
        <Link to="">
          <BiFoodMenu />&nbsp;
          <span>Envie sua receita</span>
        </Link>
        {
          (!token) ? (
            <>
              <Link to="/register">
                <BiUser />&nbsp;
                <span>casdatre-se</span>
              </Link>
              <Link to="/login">
                <BiLogInCircle />&nbsp;
                <span>Entrar</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="">
                <BiUser />&nbsp;
                <span>Minha página</span>
              </Link>
              <Link to="">
                <button type="button" onClick={ handleLogout }>
                  <BiLogOutCircle />&nbsp;
                  <span>Sair</span>
                </button>
              </Link>
            </>
          )
        }
      </nav>
    </header>
  )
}

const mapStateToProps = ({ userReducer }) => ({
  token: userReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  newToken: (token) => dispatch(setToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);