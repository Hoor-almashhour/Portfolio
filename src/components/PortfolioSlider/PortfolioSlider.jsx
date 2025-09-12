import { useEffect, useState } from "react";
import'./PortfolioSlider.css';
import { HiMiniChevronLeft } from "react-icons/hi2";
import { GoChevronLeft } from "react-icons/go";
import { HiMiniChevronRight } from "react-icons/hi2";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import EduPress from '../../assets/images/ProjectsImg/EduPress.png';
import ProductShowcase from '../../assets/images/ProjectsImg/ProductShowcase.png';
import ManagePosts from '../../assets/images/ProjectsImg/ManagePosts.png';
import Blogs from '../../assets/images/ProjectsImg/Blogs.png';
import Screenshot7 from '../../assets/images/FullScreen/Screenshot7.png';
import Screenshot6 from '../../assets/images/FullScreen/Screenshot6.png';
import Screenshot5 from '../../assets/images/FullScreen/Screenshot5.png';
import Screenshot4 from '../../assets/images/FullScreen/Screenshot4.png';
import Screenshot3 from '../../assets/images/FullScreen/Screenshot3.png';
import Screenshot2 from '../../assets/images/FullScreen/Screenshot2.png';
import Screenshot1 from '../../assets/images/FullScreen/Screenshot1.png';
import Cards from "../Cards/Cards";

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

const PortfolioSlider = () => {
    const [index, setIndex] = useState(0);
        
    const nextSlide = () => {
        const maxIndex = Math.max(projects.length - cardsPerView, 0);
        if (index < maxIndex) {
            setIndex(index + 1);
        }
    };
    
    const prevSlide = () => {
        if (index > 0) {
        setIndex(index - 1);
        }
    };
    const [cardsPerView, setCardsPerView] = useState(3);

        useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 992) {
            setCardsPerView(1);
            } else {
            setCardsPerView(3);
            }
        };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <>
        <div className='slides'>
            <div className='title2'>
                <div className='titles'>
                    <span style={{ color: '#7DE0EA' }}>Portfolio</span>
                    <h1 className="normal-text">
                        The Best <strong className="highlight-text">Projects</strong>
                    </h1>
                </div>
                <div className='btns-slides'>
                    <button onClick={nextSlide}  className="next-button">
                        <GoChevronLeft />
                    </button>
                    <button onClick={prevSlide}  className="back-button" > <HiMiniChevronRight /></button>
                </div>
            </div>
            <div className="slider-wrapper"  >
                <div className="slider-container" 
                    style={{
                        "--slide-index": index,
                        "--cards-per-view": cardsPerView
                    }}
                    >
                    <Cards  projects={projects} />
                </div>
            </div>
            
        </div>
    </>
    )
}

export default PortfolioSlider
