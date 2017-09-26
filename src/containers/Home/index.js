import React from 'react'
import { Link } from 'react-router-dom'
import homeStyles from './styles.css'

const Home = () => (
  <div className={homeStyles.wrapper}>
    <Link to='/login'>To Login Page</Link>
  </div>
)

export default Home
