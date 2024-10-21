import React from 'react';
import styles from '../styles/Courses.module.css';

const Courses = () => {
  return (
    <div className={styles.coursesContainer}>
      
      {/* Course 1: CSA */}
      <div className={styles.course}>
        <div className={styles.courseImage}>
          <img src="/csa-image.jpg" alt="CSA" />
        </div>
        <div className={styles.courseText}>
          <h2>AP Computer Science A (CSA)</h2>
          <p>In this course, students learn fundamental computer science principles and Java programming. It is designed for those interested in understanding the core elements of computer science.</p>
        </div>
      </div>

      {/* Course 2: CSP */}
      <div className={`${styles.course} ${styles.reverseCourse}`}>
      <div className={styles.courseImage}>
          <img src="/csp-image.jpg" alt="CSP" />
        </div>
        <div className={styles.courseText}>
          <h2>AP Computer Science Principles (CSP)</h2>
          <p>Computer Science Principles introduces students to the essential ideas of computer science with a focus on how computing and technology impact the world.</p>
        </div>
      </div>

      {/* Course 3: Basic Computer Programming */}
      <div className={styles.course}>
        <div className={styles.courseImage}>
          <img src="/basic-programming-image.jpg" alt="Computer Programming" />
        </div>
        <div className={styles.courseText}>
          <h2>Computer Programming</h2>
          <p>This introductory course is perfect for beginners, covering fundamental programming concepts utilizing Python, a beginner freindly and powerful programming language.</p>
        </div>
      </div>

        {/*Course 4: Robotics*/}
        <div className={`${styles.course} ${styles.reverseCourse}`}>
          <div className={styles.courseimage}>
            <img src="/robotics-image.jpg" alt="Robotics" />
          </div>
          <div className={styles.courseText}>
            <h2>Robotics</h2>
            <p>Robotics is a field that combines engineering and software, focusing on designing and programming robots that can interact with their environment.</p>
          </div>
        </div>

        
    </div>
  );
};

export default Courses;
