import React from 'react'
import './mywork.css'
import theme from '../../assets/theme_pattern.svg'
// import arrow from '../../assets/arrow_icon.svg'
import app from '../../assets/app.jpeg'
import port from '../../assets/port.png'
import game from '../../assets/game.png'

const mywork = () => {

  const skillsData = [
    {
      title: 'Cross Platform Application',
      description:
        'Developed a mobile application to streamline agent-client communication, providing real-time access to agent details and facilitating seamless interaction. Contributed to the Admin Panel to support user management, data entry, and reporting. Led the transition from paper-based to digital processes, implementing end-to-end tracking for product handling and location to enable real-time monitoring and lifecycle analysis, significantly enhancing operational efficiency.',
      image: app,
      skills: ['Angular', 'Ionic', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Personal Portfolio',
      description:
        'Built a personal portfolio website to showcase my projects and skills. Designed and implemented a responsive layout using React, HTML, and CSS to provide an engaging user experience. The portfolio includes project showcases, a bio section, and contact information.',
      image: port,
      skills: ['React', 'HTML', 'CSS'],
    },
    {
      title: 'Connect 4 Game',
      description:
        'Created a Connect4-style game with a 4x4 grid in React. Features player turns, victory detection, and interactive UI elements to engage users. This project highlights core game logic, state management, and visual interactivity in a simple yet effective React-based game.',
      image: game,
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    },

    {
      title: 'A2ZAdmission Portal',
      description:
        'Developing a student portal application using Angular, Laravel, and Ionic to simplify access to academic information and streamline application processes. Creating an admin interface to manage content and student data, aiming to reduce manual administrative tasks by 70%. Enhancing the frontend structure for improved mobile responsiveness and a better overall user experience.',
      image: game,
      skills: ['Angular', 'Ionic', 'Laravel', 'Typescript'],
    },
  ];
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme} alt="Theme" />
      </div>
    
      <div className='skillbars'>
       
        {/* <div className="skillbars">
          {skillsData.map((item, index) => (
            <div key={index} className="skillbar">
              <div className="skill">
                <img className="skillbarimg" src={item.image} alt={item.title} />
                <div className="skillbartext">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="skills-list">
                {item.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
                </div>
              </div>
              <br />
              
            </div>
          ))}
        </div> */}

{skillsData.map((item, index) => (
  <div key={index} className="skillbar">
    <div className="skill">
      <img
        className={`skillbarimg skillbarimg-${index}`} // Assign unique class
        src={item.image}
        alt={item.title}
      />
      <div className="skillbartext">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="skills-list">
          {item.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
    <br />
  </div>
))}

      </div>
    </div>
  )
}

export default mywork

