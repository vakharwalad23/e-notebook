import React from 'react';

const ToogleButton = (props) => {
    return (
        <div className='border border-3' style={{width:'90px',borderRadius:'20px',display: 'inline-flex',justifyContent:'center', alignItems: 'center'}}>
            <i style={{ color: ' yellow', marginRight:'6px'}} className='fas fa-sun'></i>
            <div className="form-check form-switch" style={{marginLeft: '-20px'}}>
                <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
            <i style={{ color: 'pink',  marginLeft:'4px'}} className="fas fa-moon"></i>
        </div>
    )
}

export default ToogleButton