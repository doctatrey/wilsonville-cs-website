import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutHeader}>About Us</h1>
      <div className={styles.textContainer}>
        <p className={styles.aboutText}>
        Our department is committed to providing students with a rigorous and engaging education in computer science. We believe that computer science is a skill that will empower students to solve complex problems, innovate, and contribute to a rapidly changing digital world.
        <br /><br />
        Our curriculum is designed to equip students with a strong foundation in programming, algorithms, and data structures.
        <br /><br />
        Our teachers are experienced professionals who are passionate about teaching and research. They are dedicated to helping students develop their skills and achieve their goals.
        <br /><br />
        If you are interested in learning more about our computer science program, please feel free to contact us. We would love to hear from you.
        </p>
      </div>
    </div>
  )
}

export default About
