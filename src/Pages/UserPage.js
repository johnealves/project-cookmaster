import React from 'react';
import { connect } from 'react-redux';
import UserAsideBar from '../Components/UserAsideBar';
import UserRecipes from '../Components/UserRecipes';
import UserUpdateRegister from '../Components/userUpdateRegister';
import '../CSS/UserPage.css'

function UserPage({ section }) {
  return (
    <div className="user-page-container">
      {/* <h2>Minha conta</h2> */}
      <UserAsideBar />
      <div className="user-section">
        { (section === 'my-recipes') && <UserRecipes /> }
        { (section === 'update-register') && <UserUpdateRegister /> }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  section: state.userPageReducer.sectionUser
})

export default connect(mapStateToProps)(UserPage);
