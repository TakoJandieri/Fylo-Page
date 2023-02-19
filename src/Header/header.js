import './header.css';
import logo from '../images/logo.svg';


export default function Header(){
    return(
        <div className='head'>
            <div className='logo'>
                <img className='logoimg' src={logo} alt='logo'/>
            </div>

            <div className='text'>
                <h1>Features</h1>
                <h1>Team</h1>
                <h1>Sign In</h1>
            </div>
        </div>
       
    )
}