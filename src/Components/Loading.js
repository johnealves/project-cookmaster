import React, { Component } from 'react';
import '../CSS/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loadingContainer">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        <span>Carregando...</span>
      </div>
    );
  }
}

export default Loading;