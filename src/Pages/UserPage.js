import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserAsideBar from '../Components/UserAsideBar';
import UserRecipes from '../Components/UserRecipes';
import UserUpdateRegister from '../Components/userUpdateRegister';
import Loading from '../Components/Loading';
import '../CSS/UserPage.css'

function UserPage({ token, section }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  useEffect(() => {
    axios.get('https://cookmaster-back-end.herokuapp.com/users/data',
     { headers: { Authorization: token } }
    )
    .then((resp) => { 
      setUser(resp.data)
      setLoading(false)
    })
    .catch(() => history.push('/login'))
  }, [])

  if (loading) return <Loading />

  return (
    <div className="user-page-container">
      {/* <h2>Minha conta</h2> */}
      <UserAsideBar />
      <div className="user-section">
        { (section === 'my-recipes') && <UserRecipes /> }
        { (section === 'update-register') && <UserUpdateRegister user={ user } /> }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  token: state.userReducer.token,
  section: state.userPageReducer.sectionUser
})

export default connect(mapStateToProps)(UserPage);
