import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'
import AboutMe from './AboutMe'
import Education from './Education'
import CallToAction from '../components/CallToAction/CallToAction'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '../components/Footer/Footer'
import ScrollTopBtn from '../components/ScrollTopBtn/ScrollTopBtn'
import NavBar from '../components/NavBar/NavBar'

const Outlet = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const educationRef = useRef(null);
    const calltoactionRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const [activeSection, setActiveSection] = useState("home");
    const [showScrollTop, setShowScrollTop] = useState(false);
    
        useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
        useEffect(() => {
            const handleScroll = () => {
            const scrollY = window.scrollY;
            const aboutTop = aboutRef.current?.offsetTop || 0;
            const educationTop = educationRef.current?.offsetTop || 0;
            const calltoactionTop = calltoactionRef.current?.offsetTop || 0;
            const projectsTop = projectsRef.current?.offsetTop || 0;
            const contactTop = contactRef.current?.offsetTop || 0;
        
            if (scrollY >= contactTop - 200) {
                setActiveSection("contact");
                setShowScrollTop(true);
            } else if (scrollY >= projectsTop - 200) {
                setActiveSection("projects");
                setShowScrollTop(true);
            } else if (scrollY >= calltoactionTop - 200) {
                setActiveSection("advertisements");
                setShowScrollTop(true);
            } else if (scrollY >= educationTop - 200) {
                setActiveSection("education");
                setShowScrollTop(true);
            } else if (scrollY >= aboutTop - 200) {
                setActiveSection("about");
                setShowScrollTop(false);
            } else {
                setActiveSection("home");
                setShowScrollTop(false);
            }
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    return (
        <>
        <NavBar  
            activeSection={activeSection}
            refs={{
            homeRef,
            aboutRef,
            educationRef,
            calltoactionRef,
            projectsRef,
            contactRef,
            }}
        />
        <div ref={homeRef}>
            <Home />
        </div>
        <div ref={aboutRef}> 
            <AboutMe />
        </div>
        <div ref={educationRef}>
            <Education />
        </div>
        <div ref={calltoactionRef}>
            <CallToAction contactRef ={contactRef}/> 
        </div>
        <div ref={projectsRef}>
            <Projects />
        </div>
        <div ref={contactRef}>
            <Contact />
        </div>
        <ScrollTopBtn />
        <Footer />
        </>
    )
}

export default Outlet
