import  './Home.css'
import profileImg from'../assets/images/HeroImg/ProfileImg.png'
import Lines from '../assets/images/HeroImg/Lines.svg';
const Home = () => {
    function download() {
        window.location.href =
            "https://drive.google.com/file/d/1leLAEThUCrSv2wsn8a3WmewXzpPCnmoz/view?usp=drivesdk";
        }
    return (
    <section className="home">
            <div className="hero-section">
                <img  src={Lines} alt="lines" className="vector" />
                <div className="hero-dot"></div>
                <div className="hero-circle"></div>
                <div className="hero-circle-2"></div>
                <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>
                            <span>HEY! </span> I’m Hoor Almashhour, Frontend Developer
                        </h2>
                    </div>
                    <div className="description">
                        <p>I craft responsive websites where technologies meet creativity
                            Building exceptional digital experiences with modern frontend frameworks.
                        </p>
                    </div>
                    <div className="btn1">
                        <button  onClick={() => download()}>Download CV</button>
                    </div>
                </div>
                <div className="profile-img">
                    <div className="decorative-square"></div>
                    <div className="decorative-square-2"></div>
                    <div className="decorative-circle"></div>
                    <div className="decorative-circle-2"></div>
                    <div className="decorative-circle-3"></div>
                    <img  src={profileImg} alt="img-personal" className='main-img'></img>
                </div>
            </div>
            
        </div>
    </section>
    
    )
}

export default Home
