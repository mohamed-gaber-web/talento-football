// import React, { useEffect,useState } from 'react'
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './newActivityModal.css'
function NewActivityModal({closeActivityModal}) {
  return (

    <div className='modalBackGround'>
    <div className='modalContainer2'>
        <div className='modalHead2'>
        <div>Add Activity</div>
        <div><button onClick={()=>closeActivityModal(false)}>x</button></div>
        </div>
        <div className='modalContent2'>
            <div className='modalContentFirstRow'>
            <div className='choosingTeamCell'>
            <span>Choose Team
            </span>
            <span><button>Team</button></span>
            </div>
            <div className='choosingTeamCell'>
            <span>Choose Theme
            </span>
            <span> 
             <input id="box1" type="checkbox" />
             <FontAwesomeIcon className='checkbox' icon={faPerson} /> 
            <input id="box1" type="checkbox" />
            <input id="box1" type="checkbox" />
            <input id="box1" type="checkbox" />
            </span>
            </div>
            <div></div>
            </div>
            
            <div className='modalContentSecondRow'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            </div>
        {/* <div className='modalFooter2'>
             <button onClick={()=>closeActivityModal(false)}> Save</button></div> */}

    </div>
</div>
)

  
}

export default NewActivityModal;