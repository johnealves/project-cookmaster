import React from 'react';
import UserAsideBar from '../Components/UserAsideBar';
import UserRecipes from '../Components/UserRecipes';
import '../CSS/UserPage.css'

function UserPage() {
  return (
    <div className="user-page-container">
      {/* <h2>Minha conta</h2> */}
      <UserAsideBar />
      <section>
        <UserRecipes />
      </section>
    </div>
  )
}

export default UserPage;
