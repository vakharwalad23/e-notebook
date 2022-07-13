import React from 'react';

const ToogleButton = (props) => {
    return (
        <div className='border border-3' style={{width:'90px',borderRadius:'20px',display: 'inline-flex',justifyContent:'center', alignItems: 'center'}}>
            <i style={{ color: ' yellow', marginRight:'2px'}} className='fas fa-sun'></i>
            <div className="form-check form-switch" style={{marginLeft: '0',marginRight:'-5px'}}>
                <input onClick={props.toggleMode} className={`form-check-input bg-${props.mode==='light'?'none':'dark'}`} style={{border:'none',boxShadow:'none', cursor:'pointer'}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
            <i style={{ color: 'pink'}} className="fas fa-moon"></i>
        </div>
    )
}

export default ToogleButton