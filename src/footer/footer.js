import './footer.css';
import fyloicon from '../images/logo.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';
import fb from '../images/logo-fb.png';
import twitter from '../images/icon-twitter.png';
import instagram from '../images/icon-instagram.png';

export default function Footer () {
    return (
        <div className='footerContainer'>
            <img className='fylologo' src={fyloicon} alt='fylologo'/>

            <div className='allInfo'>
                <div className='contactInfo'>
                    <div className='phone'>
                        <img className='phoneimg' src={phone} alt='phoneicon'/>
                        <p>Phone: +1-543-123-4567</p>
                    </div>

                    <div className='email'>
                        <img className='emailimg' src={email} alt='emailicon'/>
                        <p className='emailp'>example@fylo.com</p>
                    </div>
                </div>

                <div className='tags1'>
                    <h1>About Us</h1>
                    <h1>Jobs</h1>
                    <h1>Press</h1>
                    <h1 className='blog'>Blog</h1>
                </div>

                <div className='tags2'>
                    
                    <h1>Contact Us</h1>
                    <h1>Terms</h1>
                    <h1>Privacy</h1>
                </div>

                <div className='socialmedia'>
                    <img className='fb' src={fb} alt='fbicon'/>
                    <img className='twitter' src={twitter} alt='twittericon'/>
                    <img className='instagram' src={instagram} alt='instagramicon'/>
                </div>
            </div>
        </div>
    )
}