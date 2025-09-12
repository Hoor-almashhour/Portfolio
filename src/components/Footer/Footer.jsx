import'./Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container">
                <p>@ 2025. All Rights Reserved</p>
                <p>Develpoment by Hoor</p>
                <ul className="social">
                <Link to="https://www.facebook.com/hour.almashhour?mibextid=LQQJ4d" target="_blank">
                    <li>
                    <FaFacebookF />
                    </li>
                </Link>
                <Link to="https://x.com/almashhourHour2" target="_blank">
                    <li>
                        <IoLogoTwitter />
                    </li>
                </Link>
                <Link to="https://www.linkedin.com/in/hoor-almashhour-7b3199304" target="_blank">
                    <li>
                    <FaLinkedinIn />
                    </li>
                </Link>
                <Link to="https://www.instagram.com/hoor.almashhour/profilecard/?igsh=MXF1bXBjejQ3dmxmaw==" target="_blank">
                    <li>
                        <FaInstagram />
                    </li>
                </Link>
                </ul>
            </div>
        </footer>
        </>
    )
}

export default Footer
