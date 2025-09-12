import React from 'react'
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./ScrollTopBtn.css"

const ScrollTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
            setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };
    
        window.addEventListener("scroll", toggleVisibility);
        
        return () => window.removeEventListener("scroll", toggleVisibility);
        }, []);
    
        const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        };
    return (
    <>      <div className='btn3'>
                {isVisible && (
                <button  onClick={scrollToTop}><FaArrowUp /></button>
                )}
            </div>
    </>
    )
}

export default ScrollTopBtn
