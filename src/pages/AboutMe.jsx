import './AboutMe.css'
import reactLogo from'../assets/images/reactLogo.png'
import figmaLogo from "../assets/images/figmaLogo.png";
import jsLogo from "../assets/images/jsLogo.png";
import cssLogo from "../assets/images/cssLogo.png";
import {  FaGithub } from "react-icons/fa";

const AboutMe = () => {
  const skills = [
      { name: "HTML5", percentage: 90 },
      { name: "CSS3", percentage: 90 },
      { name: "Bootstrap", percentage: 80 },
      { name: "Tailwind Css", percentage: 90 },
      { name: "JavaScript", percentage:95},
      { name: "TypeScript", percentage:85},
      { name: "React", percentage: 90},
      { name: "Next.js", percentage: 90}
    ];
  return (

      <section className="about-me">
        <div className="container">
          <div className="about-content">
                <h1>About Me</h1>
                <p>
                    Hi,I'm Hoor Almashhour, FrontEnd Developer, enjoy developing web applications and designing attractive and easy-to-use user interfaces. 
                    I can turn creative ideas into great websites. 
                    I always strive to develop my skills, 
                    learn everything new, 
                    and gain knowledge to achieve greater successes in my future career.
                </p>
            
                <div className="skills">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <p>{skill.name}</p>
                        <div className="progress-bar">
                            <div className="progress" style={{  width: `${skill.percentage}%` }}>
                              <span className="circle"></span>
                              <span className='tooltip'>{`${skill.percentage}%`}</span> 
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
          </div>  
        

          <div className="about-icons">
              <div className="about-circle-1"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className='cssLogo'>
                    <img src={cssLogo} alt="CSS3" />
              </div>
              <div className='jsLogo'>
                  <img src={jsLogo} alt="JavaScript" />
              </div>
              <div className='reactLogo'>
                  <img src={reactLogo} alt="React" />
              </div>
              <div className='figmaLogo'>
                  <img src={figmaLogo} alt="Figma" />
              </div>
              <div className='githubLogo'>
                <FaGithub className="icon-github" />
              </div>
          </div>
        </div>
          
    </section>
  )
}

export default AboutMe
