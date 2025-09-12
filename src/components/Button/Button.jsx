
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({btn,href,content ,icon}) => {
    return (
        <>
            <button className='btns'>{btn}
                <Link to ={href}>
                    {content}
                    {icon}
                </Link>
            </button>
        </>
    )
}

export default Button
