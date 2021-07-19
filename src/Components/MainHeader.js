import React from 'react';
import { Link } from 'react-router-dom';
import { BiFoodMenu, BiUser, BiLogInCircle } from 'react-icons/bi';
import '../CSS/MainHeader.css';

export default function Main() {
  return (
    <header className="main-header">
      <h1>
        <Link to="/">
          <span className="title-project">Project</span>
          <span className="title-cookmaster">COOKMASTER</span>
        </Link>
      </h1>
      <nav>
        <Link to="">
          <BiFoodMenu />&nbsp;
          <span>Envie sua receita</span>
        </Link>
        <Link to="">
          <BiUser />&nbsp;
          <span>casdatre-se</span>
        </Link>
        <Link to="/login">
          <BiLogInCircle />&nbsp;
          <span>Entrar</span>
        </Link>
      </nav>
    </header>
  )
}