import "./CallToAction.css";
import { FaArrowRight } from "react-icons/fa6";

function CallToAction({ contactRef }) {

    const scrollToSection = () => {
        if (!contactRef?.current) return;
    
        const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
    
        window.scrollTo({ top: y, behavior: 'smooth' });
    };
    return (
        <section className="CallToAction">
            <div className="container">
                <div className="bg"></div>
                <div className="section-content">
                    <div className="title1">
                        <h1>Try me out, risk free!</h1>
                        <p className="descrtiption">
                            If you're not happy with the design after the first draft, I'll refund
                            your deposit,  <strong>no questions asked</strong>.
                        </p>
                    </div>
                    <div className="btn2">
                        <button onClick={() => scrollToSection()} >
                            Contact <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;