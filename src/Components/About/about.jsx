import React from 'react'
import './about.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/varshaalate.png'


const about = () => {
    return (

        <div id='aboutme' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme} alt="Theme" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile} alt="Profile" style={{ borderRadius: "50%" }} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hello! I’m Varsha Alate, a passionate and results-driven Full Stack Web Developer with hands-on experience in building responsive, user-centric web and mobile applications. I specialize in technologies such as Angular, Ionic, Laravel, and MySQL, and enjoy creating clean, efficient interfaces paired with robust backend functionality. My work reflects a strong commitment to performance, accessibility, and design that enhances user interaction across platforms.</p>
                        <p>
                            I thrive in collaborative environments and bring a proactive mindset to every project. With a solid foundation in UI/UX principles, RESTful APIs, and component-based architecture, I focus on delivering solutions that solve real-world problems. I am constantly learning and refining my skills to stay current in the fast-evolving tech landscape and am excited to contribute to meaningful, high-impact digital products.</p>
                    </div>

                    <div className="about-skills">
                        <div className="aboutskills">
                            <p>HTML & CSS</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '65%' }}></div>
                            </div>
                            <span className="percentage">65%</span>
                        </div>

                        <div className="aboutskills">
                            <p>C Programming</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '65%' }}></div>
                            </div>
                            <span className="percentage">65%</span>
                        </div>

                        <div className="aboutskills">
                            <p>C++</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '60%' }}></div>
                            </div>
                            <span className="percentage">60%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Angular</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '65%' }}></div>
                            </div>
                            <span className="percentage">65%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Ionic Framework</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '65%' }}></div>
                            </div>
                            <span className="percentage">65%</span>
                        </div>

                        <div className="aboutskills">
                            <p>SQL</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '60%' }}></div>
                            </div>
                            <span className="percentage">60%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Typescript</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '60%' }}></div>
                            </div>
                            <span className="percentage">60%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Javascript</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '60%' }}></div>
                            </div>
                            <span className="percentage">60%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Bootstrap</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '55%' }}></div>
                            </div>
                            <span className="percentage">55%</span>
                        </div>

                        <div className="aboutskills">
                            <p>JSON</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '60%' }}></div>
                            </div>
                            <span className="percentage">60%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Laravel</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '45%' }}></div>
                            </div>
                            <span className="percentage">45%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Rest API's</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '45%' }}></div>
                            </div>
                            <span className="percentage">45%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Git</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '45%' }}></div>
                            </div>
                            <span className="percentage">45%</span>
                        </div>

                        <div className="aboutskills">
                            <p>React</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '40%' }}></div>
                            </div>
                            <span className="percentage">40%</span>
                        </div>



                        <div className="aboutskills">
                            <p>GitHub</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '40%' }}></div>
                            </div>
                            <span className="percentage">40%</span>
                        </div>


                        <div className="aboutskills">
                            <p>PHP</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '40%' }}></div>
                            </div>
                            <span className="percentage">40%</span>
                        </div>

                        <div className="aboutskills">
                            <p>Docker</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '20%' }}></div>
                            </div>
                            <span className="percentage">20%</span>
                        </div>


                    </div>
                </div>
            </div>
            <div className="about-achievement">
                <div className="aboutachievements">
                    <h1>2+</h1>
                    <p>Years Of Experience</p>
                </div>
                <hr />
                <div className="aboutachievements">
                    <h1>#+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="aboutachievements">
                    <h1>10+</h1>
                    <p>Certifications</p>
                </div>
            </div>
        </div>
    )
}

export default about
