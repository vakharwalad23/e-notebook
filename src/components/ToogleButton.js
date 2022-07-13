import React from 'react';

const ToogleButton = (props) => {
    return (
        <div>
            <input style={{
                transform: 'translateX(24px)',
                opacity: '0',
                position: 'absolute'
            }} type="checkbox" onClick={props.toggleMode} className="checkbox" id="checkbox" />
            <label style={{
                width: '50px',
                height: '26px',
                backgroundColor: '#111',
                display: 'flex',
                borderRadius: '50px',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '5px',
                position: 'relative',
                transform: 'scale(1.5)',
                transform: 'translateX(24px)'
            }} htmlFor="checkbox" className="label">
                <i style={{color: 'pink'}} className="fas fa-moon"></i>
                <i style={{color: ' yellow'}} className='fas fa-sun'></i>
                <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '2px',
                    left: '2px',
                    borderRadius: '50%',
                    transition: 'transform 0.2s linear',
                    transform: 'translateX(24px)'
                }} className='ball' />
            </label>
        </div>
    )
}

export default ToogleButton