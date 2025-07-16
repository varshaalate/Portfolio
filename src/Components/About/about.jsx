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
                        <p>Hello! I’m Varsha Alate, an enthusiastic and results-driven web developer with a strong focus on crafting engaging, user-centered digital experiences. My journey in tech began with a fascination for combining technology and creativity, which quickly developed into a career centered on building responsive, efficient, and visually compelling solutions that work seamlessly across platforms. I approach each project with a commitment to performance, accessibility, and design that enhances user interaction.</p>
                        <p>Dedicated to continuous learning, I bring a fresh, innovative perspective to every project, with a reputation for attention to detail, collaboration, and a proactive problem-solving mindset. I’m passionate about using technology to solve real-world challenges and am excited to connect with fellow professionals to make a meaningful impact in the digital landscape.</p>
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
                            <p>C </p>
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
                            <p>React</p>
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
                            <p>GitHub</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '45%' }}></div>
                            </div>
                            <span className="percentage">45%</span>
                        </div>


                        <div className="aboutskills">
                            <p>JSON</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '55%' }}></div>
                            </div>
                            <span className="percentage">55%</span>
                        </div>

                        <div className="aboutskills">
                            <p>DOCKER</p>
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
                    <h1>2+</h1>
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
