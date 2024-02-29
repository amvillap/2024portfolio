import linkedin from './images/linkedinlogo.png';
import github from './images/githublogo.png';
import gmail from './images/gmaillogo.webp';
import gitlab from './images/gitlablogo.webp';
import layla from './images/layla.png';
import {NavLink} from 'react-router-dom';



function Contact() {
    return(
        <>
        <div className='contact-container'>
            <div className='feel-free'>Feel free to reach me at the following platforms!</div>
            <div className='platform-container'>
                <a href='https://www.linkedin.com/in/angelikavillapando/'>
                    <div className='platform'>
                        <img src={linkedin} alt='linked in logo'/>
                        <div className='username'>@angelikavillapando</div>
                    </div>
                </a>
                <a href='https://github.com/amvillap'>
                    <div className='platform'>
                        <img src={github} alt='github logo'/>
                        <div className='username'>@amvillap</div>
                    </div>
                </a>
                <a href='gmail.com'>
                    <div className='platform'>
                        <img src={gmail} alt='gmail logo'/>
                        <div className='username'>jekster98@gmail.com</div>
                    </div>
                </a>
                <a href='https://gitlab.com/amvillap'>
                    <div className='platform'>
                        <img src={gitlab} alt='gitlab logo'/>
                        <div className='username'>@amvillap</div>
                    </div>
                </a>
            </div>
        </div>
        <div class='footer'>
            <NavLink to={'/layla'}>
                <img src={layla} alt='layla'/>
            </NavLink>
            <div>- thanks for visiting!</div>
        </div>
        </>
    )
}

export default Contact
