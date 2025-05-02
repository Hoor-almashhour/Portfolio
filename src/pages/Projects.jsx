
import Button from '../components/Button/Button';
import Cards from '../components/Cards/Cards';
import'./Projects.css'
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <>
      <section  className="projects-section">
          <div className='title2'>
            <div className='titles'>
              <span style={{ color: '#7DE0EA' }}>Portfolio</span>
              <h1>
                <span  className="normal-text">My Creative Works</span><br />
                <strong>Latest <span  className="highlight-text">Projects</span></strong>
              </h1>
            </div>
            <div className='btn4'>
                <Button href="https://github.com/Hoor-almashhour" btn= "View Github"  icon={<GoArrowUpRight />} />
            </div>
          </div>
        <div className="projects-grid">
          <Cards />
        </div>
      </section>
    </>
  )
}

export default Projects
