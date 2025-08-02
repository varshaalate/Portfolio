import React from 'react'
import './services.css'
import theme from '../../assets/theme_pattern.svg'
import edu from '../../assets/college-removebg-preview.png'
import exp from '../../assets/exp.png'


const services = () => {
    const TimelineItem = ({name, Duration, collegeName, details }) => (
        <div className="content-box">
        <div className="icon-box">
        <img src={edu} alt="Theme" />
          {/* <i className={`fas ${icon}`}></i> */}
        </div>
        <div className="details-box">
          {name && <h2 style={{fontSize:"25px"}}>{name}</h2>}
          {Duration && <h3>{Duration}</h3>}
          {collegeName && <p>{collegeName}</p>}
          {details && <p style={{fontSize:'14px'}}>CGPA : {details}</p>}
        </div>
      </div>
      );

      const Education = ({title, Duration, name,Tech}) => (
        <div className="content-box">
        <div className="icon-box" >
            <img src={exp} alt="Theme" style={{width:'40px',height:"40px"}} />
        </div>
        <div className="details-box">
          {title && <h2 style={{fontSize:"25px"}}>{title}</h2>}
          {Duration && <h3>{Duration}</h3>}
          {name && <p>{name}</p>}
          {name && <p style={{fontSize:'14px'}}>Technology Stack : {Tech}</p>}
        </div>
      </div>
      );
    
      const educationData = [
        {name: 'B.Tech (CSE)', Duration:'2019-2023' , collegeName:'DKTE`s Textile and Engineering Institute Ichalkaranji ',details:'8.12' },
        // { icon: 'fa-book', details: 'Details about courses or certifications.' },
      ];
    
      const experienceData = [
        {title: 'Full Stack Developer', Duration: 'Aug 2023 - Present', name:'Mysoftway Technology and IT Consultancy , Ichalkarnji',Tech:'Angular and Ionic Framework , HTML & CSS , Laravel, SQL , Problem Solving'},
        // { icon: 'fa-tasks', title: 'Projects', details: 'Details about projects or other work experiences.' },
      ];
    
      return (
        <div>
       
      <div id="services" className="services">
        <div className="services-title">
          <h1>Career Contour</h1>
          <img src={theme} alt="Theme" />
        </div>
      </div>

      <div className="container">
        <div className="timeline-container">
          {/* Education Column */}
          <div className="timeline-column education">
            <h2 className="section-title"  style={{
    background: "linear-gradient(-180deg , #E8A770, #B923E1)", 
    WebkitBackgroundClip: "text", 
    WebkitTextFillColor: "transparent"
  }}>Education</h2>
            {educationData.map((item, index) => (
              <TimelineItem
              className="timlineeducation"
                key={index}
                icon={item.icon}
                name={item.name}
                Duration={item.Duration}
                collegeName={item.collegeName}
                details={item.details} // only for courses with details
                
              />
            ))}
          </div>

          {/* Experience Column */}
          <div className="timeline-column experience">
          <h2
  className="section-title"
  style={{
    background: "linear-gradient(-180deg , #E8A770, #B923E1)", 
    WebkitBackgroundClip: "text", 
    WebkitTextFillColor: "transparent"
  }}
>
  Experience
</h2>

            {experienceData.map((item, index) => (
              <Education
                key={index}
                title={item.title}
                Duration={item.Duration}
                name={item.name}
                Tech={item.Tech}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
         
      );
      
};


export default services;

 