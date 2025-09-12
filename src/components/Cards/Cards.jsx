import './Cards.css'
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import EduPress from '../../assets/images/ProjectsImg/EduPress.png';
import ProductShowcase from '../../assets/images/ProjectsImg/ProductShowcase.png';
import ManagePosts from '../../assets/images/ProjectsImg/ManagePosts.png';
import Blogs from '../../assets/images/ProjectsImg/Blogs.png';
import Screenshot1 from '../../assets/images/FullScreen/Screenshot1.png';
import Screenshot2 from '../../assets/images/FullScreen/Screenshot2.png';
import Screenshot3 from '../../assets/images/FullScreen/Screenshot3.png';
import Screenshot4 from '../../assets/images/FullScreen/Screenshot4.png';
import Screenshot5 from '../../assets/images/FullScreen/Screenshot5.png';
import Screenshot6 from '../../assets/images/FullScreen/Screenshot6.png';
import Screenshot7 from '../../assets/images/FullScreen/Screenshot7.png';
import { Link } from 'react-router-dom';

const Cards = () => {

  const projects = [
    {
      id: 1,
      title: 'EduPress',
      description: 'Html - Css3 - Responsive Design',
      icon:<LuCircleArrowOutUpRight />,
      image: EduPress,
      fullscreen: Screenshot1,
      demo:'https://edu-press-brown.vercel.app'
    },
    {
      id: 2,
      title: 'Product Showcase',
      description: 'Html - Css3 - Vanilla javascript',
      icon:<LuCircleArrowOutUpRight />,
      image: ProductShowcase,
      fullscreen: Screenshot2,
      demo:"https://product-showcase-ten.vercel.app/"
    },
    {
      id: 3,
      title: 'Manage Posts',
      description: 'Html - Css3 - Vanilla javascript - API ',
      icon:<LuCircleArrowOutUpRight />,
      image: ManagePosts,
      fullscreen: Screenshot3,
      demo:"https://manage-posts-chi.vercel.app/"
    },
    {
      id: 4,
      title: 'Blogs',
      description: 'Html - Css3 - Vanilla javascript - React - React Router - ReactHooks',
      icon:<LuCircleArrowOutUpRight />,
      image: Blogs,
      fullscreen: Screenshot4,
      demo:'https://blogs-opal-seven.vercel.app'
    },
    {
      id: 5,
      title: 'Dashboard',
      description: 'Html - Css3 - Vanilla javascript - React - ReactRouter - ReactHooks- API',
      icon:<LuCircleArrowOutUpRight />,
      image: Screenshot5,
      fullscreen: Screenshot5,
      demo:'https://dashboard-six-zeta-71.vercel.app',
    },
    {
      id: 6,
      title: 'My-Store-Dashboard',
      description: 'Html - Tailwind Css - TypeScript - React - ReactRouter - ReactHooks- API',
      icon:<LuCircleArrowOutUpRight />,
      image: Screenshot6,
      fullscreen: Screenshot6,
      demo:'https://storedashboard.vercel.app',
    },
    {
          id: 7,
          title: 'online-courses',
          description: 'Html5, Tailwind Css, TypeScript - Redux Toolkit/Redux - Next.js',
          icon:<LuCircleArrowOutUpRight />,
          image: Screenshot7,
          fullscreen: Screenshot7,
          demo:"https://online-courses-edu.vercel.app",
    },
  ];
  
  const ProjectCard = ({ title, description, image ,icon ,demo,id ,fullscreen}) => (
    <div className="project-card">
      <div className="image-container">
          <img src={image} alt={title} className='card-image' />
          <div className="overlay">
              <div className="icons">
                <span className="icon" onClick={() => window.open(fullscreen, "_blank")}>
                    < SlSizeFullscreen />
                </span>
                <span className="icon" onClick={() => window.open(demo, "_blank")}>
                    <LuCircleArrowOutUpRight />
                </span>
              </div>
          </div>
      </div>
        <div className='proj-content'>
          <div className='proj-name'>
              <h3>{title}</h3>
              <p>{description}</p>
          </div>
          <div className="proj-icon">
            <Link to={`/details/${id}`} className="details-link">
                    {icon}
            </Link>
          </div>
        </div>
    </div>
  );
  
  return (
    <>
    {projects.map((project) => (
            <ProjectCard
              key={project.id} 
              title={project.title}
              description={project.description}
              image={project.image}
              icon={project.icon}
              demo={project.demo}
              fullscreen={project.fullscreen}
              id={project.id} />
      ))}
    </>
  )
}

export default Cards
