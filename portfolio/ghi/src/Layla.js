import sweaterlayla from './images/sweaterlayla.png';
import Draggable from 'react-draggable';
import dogtreat from './images/dogtreat.png';
import { useState } from 'react';
import madlayla from './images/layla.png';


function Layla () {

    const [message, setMessage] = useState('Hey you! Give me that treat over there!')
    const [layla, setLayla] = useState(sweaterlayla)
    const handlePickup = (event) => {
        setMessage('yes! That treat! bring it over here!!')
    }
    const handleDrop = (event) => {
        setMessage('you silly goose you dropped it.')
        setLayla(madlayla)

    }
    return(
        <>
        <Draggable
            className='dogtreat'
            onStart={handlePickup}
            onStop={handleDrop}
        >
            <img src={dogtreat} height='100' width='100' alt='dog treat'/>
        </Draggable>
            <div className='layla-container'>
                <img className='sweater-layla' src={layla} alt='layla in her green vest'/>
                {message}
            </div>
        </>
    )
}

export default Layla
