import React from 'react'
import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Innovating the future <br/> through technology.</h1>
      <Link to='/courses' className={styles.button}>
        <button className={styles.courseBtn}>Explore Courses</button>
      </Link>
    </div>
  )
}

export default Home
