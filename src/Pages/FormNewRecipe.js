import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Loading from '../Components/Loading';

function FormNewRecipe({ token }) {
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
    <div>
      <h2>Nova receita</h2>
      <form>
        
      </form>
    </div>
  )
}

const mapStateToProps = ({ userReducer }) => ({
  token: userReducer.token,
})

export default connect(mapStateToProps)(FormNewRecipe);
