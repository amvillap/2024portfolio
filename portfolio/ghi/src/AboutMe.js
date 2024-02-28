import menlayla from './images/menlayla.png';
import html from './images/htmllogo.png';
import js from './images/js.png';
import mongodb from './images/mongodblogo.png';
import postgre from './images/postgrelogo.png';
import python from './images/pythonlogo.png';
import react from './images/reactlogo.png';
import css from './images/csslogo.png';
import django from './images/djangologo.png';
import fastapi from './images/fastapi.svg';

function AboutMe() {
    return(
        <>
            <div className="about-me-container">
                <div className="left">
                    <h1>
                        <strong>Hello!</strong>
                        It's so nice to meet you!
                    </h1>
                    <p>
                            I am a software engineer based in Orange County,CA. I am passionate about
                        creating robust, user-friendly applications, which is reflected in my personal projects.
                    </p>
                    <p>
                        As a software engineer, it is important to me to utilize the tools that technology lends us
                    to help others and to make positive impacts in the world. Technology is quickly evolving and
                    changing our lives every day and I am eager to contribute to this cause!
                    </p>
                </div>
                <div className="right">
                    <p>(me & my dog, Layla)</p>
                    <img
                        src={menlayla}
                        alt="me and layla"
                        width='550'
                        height='750'
                        className='menlayla'
                        />
                </div>
            </div>
            <div className='tech-stack'>
                <h1 className='tech-stack-title'>my <strong>tech stack</strong></h1>
                <div className='icons'>
                    <img
                        src={html}
                        alt="html"
                        width='200'
                        height='200'
                        className='icon'
                    />
                    <img
                        src={js}
                        alt="js"
                        className='icon'
                    />
                    <img
                        src={mongodb}
                        alt="mongodb"
                        className='icon'
                    />
                    <img
                        src={postgre}
                        alt="postgre"
                        className='icon'
                    />
                    <img
                        src={python}
                        alt="python"
                        className='icon'
                    />
                    <img
                        src={react}
                        alt="react"
                        className='icon'
                    />
                    <img
                        src={css}
                        alt="css"
                        className='icon'
                    />
                    <img
                        src={django}
                        alt="django"
                        className='icon'
                    />
                    <img
                        src={fastapi}
                        alt="fastapi"
                        className='icon'
                    />
                </div>
            </div>
            <div className='micro-to-fullstack-container'>
                <div className="micro-to-fullstack">
                    <h4>from</h4>
                    <h1>micro</h1>
                    <h4>to</h4>
                    <h1>FULL STACK</h1>
                </div>
                <div className="micro-to-fullstack-text">
                    <p>
                    I, originally, graduated with a degree in Neurology, Physiology, and Behavior with an
                    extensive research/laboratory background. After almost three years of working in the food
                    safety testing industry, I felt unfulfilled and started looking into new skills that I can
                    learn. I then started to learn to code using free online resources and, eventually, I
                    joined HackReactor! Now, with my newfound programming skills it is my goal to eventually work
                     with Laboratory Information Management Systems - LIMS which would be a beautiful blend of
                     both of my backgrounds.
                    </p>
                </div>
            </div>
        </>
    )
}
export default AboutMe
