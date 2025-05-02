import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Button from '../../components/Button/Button';
import './ProjectDetails.css'
import EduPress from '../../assets/images/projectsImg/EduPress.png';
import ProductShowcase from '../../assets/images/projectsImg/ProductShowcase.png';
import ManagePosts from '../../assets/images/projectsImg/ManagePosts.png';
import Blogs from '../../assets/images/projectsImg/Blogs.png';
import Screenshot5 from '../../assets/images/FullScreen/Screenshot5.png';
import PortfolioSlider from '../../components/PortfolioSlider/PortfolioSlider';
import Footer from '../../components/Footer/Footer';



const projects = [
        {
            id: 1,
            title: 'EduPress',
            icon:<LuCircleArrowOutUpRight />,
            image:  EduPress,
            fullDescription: 'EduPress is an online learning platform designed to help you build skills and achieve your educational goals. Offering a variety of courses across top categories like Art & Design, Development, Communication, and Marketing, EduPress provides a seamless and engaging learning experience. With featured courses, expert instructors, and user-friendly tools like LearnPress LMS, it caters to students and educators alike. Whether you’re starting a new career, enhancing your knowledge, or teaching others, EduPress is your go-to platform for growth and success.',
            date: '30-10-2024',
            languages: 'Html5, Css',
            github: 'https://github.com/Hoor-almashhour/Edu-Press',
            demo:'https://edu-press-brown.vercel.app'
        },
        {
            id: 2,
            title: 'Product Showcase',
            icon:<LuCircleArrowOutUpRight />,
            image:  ProductShowcase,
            fullDescription: 'Is a functional e-commerce product showcase that effectively displays products, their original prices, and discounted rates. It’s ideal for stores looking for a simple, fast, and clean way to present their items with clear pricing.',
            date: '21-12-2024',
            languages: 'Html5, Css, Javascript',
            github: 'https://github.com/Hoor-almashhour/Product-Showcase',
            demo:"https://product-showcase-ten.vercel.app/"
        },
        {
            id: 3,
            title: 'Manage Posts',
            icon:<LuCircleArrowOutUpRight />,
            image:  ManagePosts,
            fullDescription: 'This is a CRUD Posts Application for creating, reading, updating, and deleting posts. It features a clean and responsive design, allowing users to manage posts effortlessly. Users can add new posts, view all posts in an organized layout, and edit or delete them with intuitive action buttons. Ideal for managing blogs, announcements, or any content efficiently.',
            date: '05-01-2025',
            languages: 'Html5, Css, Javascript-API',
            github: 'https://github.com/Hoor-almashhour/Manage-Posts',
            demo:"https://manage-posts-chi.vercel.app/"
        },
        {
            id: 4,
            title: 'Blogs',
            icon:<LuCircleArrowOutUpRight />,
            image:  Blogs,
            fullDescription: 'Explore a wide range of stories, interviews, and expert insights on our blog platform. Dive into articles covering leadership, design, technology, and more, written by professionals and thought leaders. Stay updated on the latest trends and ideas by subscribing to our newsletter.' ,
            date: '20-01-2025',
            languages: 'Html5, Css, Javascript - React - React Router',
            libraries: 'React.js',
            github: 'https://github.com/Hoor-almashhour/blogs',
            demo:'https://blogs-opal-seven.vercel.app'
        },
        {
            id: 5,
            title: 'Dashboard',
            icon:<LuCircleArrowOutUpRight />,
            image:  Screenshot5,
            fullDescription: 'is a secure, API-driven admin panel perfect for businesses needing: User authentication (Login/Signup/Logout).  Product management (Add, Edit, Delete). Real-time updates via API.',
            date: '15-03-2025',
            languages: 'Html5, Css, Javascript - React - API',
            libraries: 'React.js',
            github: 'https://github.com/Hoor-almashhour/Dashboard',
            demo: "https://dashboard-six-zeta-71.vercel.app",
        },
    ]
const ProjectDetails = () => {
        const { id } = useParams();
        const project = projects.find((p) => p.id ===Number (id));

        if (!project) return <h2>Project not available</h2>;

        
    return (
        <>
            <NavBar />
            <section className="project-details">
                    <div className="hero-dot"></div>
                    <div className="hero-circle"></div>
                    <div className="hero-circle-2"></div>
                    <div className='container'>
                        <div className="images">
                            <img src={project.image} alt={project.title}  />
                        </div>
                        <div className="info">
                            <div className='project-title'>
                                <div className='project-name'>
                                    <h2>{project.title}</h2>
                                    <p><span>Date:</span> {project.date}</p>
                                </div>
                                <div className="project-icon2">
                                    <Link to={project.demo} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="demo-link">
                                        {project.icon}
                                    </Link>
                                </div>
                        </div>
                        <div className='detailes'>
                            <p className="project-description">{project.fullDescription}</p>
                            <div className='desc'>
                                <p className="lang"><strong>Basic Languages:</strong> {project.languages}</p>

                                <p  className="framework"><strong>Framework:</strong> {project.framework}</p>
                            
                                <p className="libraries"><strong>Libraries:</strong> {project.libraries}</p>
                                
                            </div>
                        </div>
                        <div className='github-btn'>
                            <Link target="_blanck" to={project.github}>
                                <Button btn= "Github Repo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <PortfolioSlider/>
            <Footer />
        </>
    )
}

export default ProjectDetails
