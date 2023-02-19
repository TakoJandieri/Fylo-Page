import './mainContent.css';
import file from '../images/illustration-1.svg';
import file2 from '../images/illustration-2.svg';
import arrow from '../images/icon-arrow.svg';
import curveMob from '../images/bg-curve-mobile.svg';
import quotes from '../images/icon-quotes.svg';
import avatar from '../images/avatar-testimonial.jpg';
import curveDesktop from '../images/bg-curve-desktop.svg';
import { useState } from 'react';

export default function Content (){
   
    const [tip, setTip] = useState('')
    const [enter, setEnter] = useState(0);

 
    const mail = (e) => {
        setEnter(e.target.value)
        
    }

    
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


    const clickCheck = () => {
        if(enter && enter.match(isValidEmail)){
            
            setTip('Got it')
            setEnter(enter)
        }else {
            setTip('Please check your email')
        }
    }


    const validateEmail = (e) => {
        if(e.key === 'Enter' && e.target?.value && e.target.value.match(isValidEmail)){
            e.preventDefault();
            setTip('Got it')
            setEnter(e.target.value)
        }else if(e.key === 'Enter'){
            setTip('Please check your email')
        }else if(!e.target.value){
            setTip('');
        }
    }

      
    return(
        <div className='mainContentContainer'>
            <div className='firstfile'>
                <div className='file'>
                    <img className='filephoto' src={file} alt='fileimg'/>
                </div>
                <div className='firstfiletext'>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores your most important files in one secure location. Access them wherever you <br className='mobilebr'/>need, share and collaborate with friends, <br className='mobilebr2'/> family, and co-workers.</p>
                </div>
            </div>

            <div className='inputDiv'>

                <div className='inputWithTip'>
                    <input 
                        className='mailfield'
                        type="email" 
                        placeholder='Enter your email...' 
                        onChange={mail}
                        onKeyDown={validateEmail}  
                    />
                        
                    <p className='tipmsg'>{tip}</p>
                </div>

                <button className='getStartBtn' onClick={clickCheck}>Get Started</button>
                
            </div>

            <div className='file2'>
                <img className='curveMob' src={curveMob} alt='curve' />
                <img className='curveDesktop' src={curveDesktop} alt='curve' />

                <div className='file2bottom'>
                    <img className='filephoto2' src={file2} alt='file2img'/>

                    <div className='secondFileText'>

                        <h1>Stay productive, wherever you are</h1>
                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>

                        <span className='greenline'>See how Fylo works <img src={arrow} alt='arrowimg'/></span>
                        <div className='line'></div>
                    
                        <div className='feedback'>
                            <img src={quotes} alt='quotes' />
                            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                            <div className='feedbackauthor'>
                                <img className='avatar' src={avatar} alt='avatar' />
                                <p className='name'>Kyle Burton <br></br> <span className='occupation'>Founder & CEO, Huddle</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottomGetStart'>
                <div className='bottomGetStartText'>
                    <h1>Get early access today</h1>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <div className='inputDiv2'>

                    <input 
                        className='mailfield2'
                        type="email" 
                        placeholder='email@example.com' 
                        onChange={mail}
                        onKeyDown={validateEmail}  
                    />
                        
                    <p className='tipmsg2'>{tip}</p>

                    <button className='getStartBtn2' onClick={clickCheck}>Get Started For Free</button>
                </div>
            </div>
        </div>
    );
}
