import popcorn from './images/popcornpickslogo.png'
import carcar from './images/carcar.png'

function Project() {
    return (
        <>
        <div className='popcorn-picks-project-container'>
            <img src={popcorn} alt='popcorn picks' />
            <div className='project-description-container'>
                <a href='https://popcorn-picks.gitlab.io/popcorn-picks'>
                    <h1 className='project-title'>
                        PopcornPicks
                    </h1>
                </a>
                <div className='project-description'>
                    A movie reviewing website that helps you discover
                    new movies and connect with other like-minded movie enthusiasts.
                </div>
            </div>
        </div>
        <div className='project-container'>
        <img src={carcar} alt='popcorn picks' />
        <div className='project-description-container'>
            <a href='https://gitlab.com/amvillap/project-beta'>
                <h1 className='project-title'>
                    CarCar
                </h1>
            </a>
            <div className='project-description'>
                A reviewing website that helps you discover
                new movies and connect with other like-minded movie enthusiasts.
            </div>
        </div>
    </div>
    </>
    )
}

export default Project
