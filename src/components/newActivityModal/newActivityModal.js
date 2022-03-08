import React, { useEffect,useState } from 'react'
// import { faPerson } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './newActivityModal.css'
function NewActivityModal({closeActivityModal}) {
   const [ActivityType,setActivityType]=useState('');
   const [Opponent,setOpponent]=useState('');
   console.log(ActivityType,Opponent);
  return (

    <div  className='modalBackGround'>
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
            <span>
              <select name="teams" className="select">
                <option name="select" value="select">Teams</option>
                <option name="select" value="U11">U11</option>
                <option name="select" value="U12">U12</option>
                <option name="select" value="U13">U13</option>
                <option name="select" value="U14">U14</option>
                <option name="select" value="U15">U15</option>
                <option name="select" value="U16">U16</option>


              </select>
            </span>
            
            
            </div>
            <div className='choosingTeamCell'>
            <span>Choose Theme
            </span>
            <span> 
            <button class="btn"><i class="fa fa-person"></i></button>
<button class="btn"><i class="fa fa-futbol"></i></button>
<button class="btn"><i class="fa fa-dumbbell"></i></button>
<button class="btn"><i class="fa fa-user"></i></button>
            </span>
            </div>
            <div className='choosingTeamCell'>
              <span>Choose Activity Type</span>
              <span><select name="actvities" className="select" onChange={(e)=>setActivityType(e.target.value)} >
                <option name="select" value="select" >Type</option>
                <option name="select" value="Training">Training</option>
                <option name="select" value="Match">Match</option>
                <option name="select" value="Meeting">Meeting</option>
                <option name="select" value="Social Activity">Social Activity</option>

              </select></span>

            </div>
            </div>
            
            {(ActivityType==="select" || ActivityType==="Training"||ActivityType==='') && <div className='modalContentSecondRow'>
            
            <div className='choosingTeamCell-Second'>
              <div>Primary</div>
              <div className='choosingTeamCell-SecondContent'>
              <span className='hovedPrincip'>
              <select name="actvities" className="select">
                <option name="select" value="select">Hoved Princip</option>
                <option name="select" value="Fase 1">Fase 1</option>
                <option name="select" value="Fase 2">Fase 2</option>
                <option name="select" value="Fase 3">Fase 3</option>
                <option name="select" value="Defensiv Organisation">Defensiv Organisation</option>
                <option name="select" value="Erobringsspillet">Erobringsspillet</option>
                <option name="select" value="Basistaktisk">Basistaktisk</option>
                <option name="select" value="Basisteknisk">Basisteknisk</option>
              </select>
              </span>

              <span className='hovedModPrincip'>
              <select name="hovedModPrincip" className="select">
                <option name="select" value="select" >Hoved Mod Princip</option>
                <option name="select" value="Fase 1">Fase 1</option>
                <option name="select" value="Fase 2">Fase 2</option>
                <option name="select" value="Fase 3">Fase 3</option>
                <option name="select" value="Defensiv Organisation">Defensiv Organisation</option>
                <option name="select" value="Erobringsspillet">Erobringsspillet</option>
                <option name="select" value="Basistaktisk">Basistaktisk</option>
                <option name="select" value="Basisteknisk">Basisteknisk</option>
              </select>
              </span>
              </div>
              </div>
  
            </div>}

            {ActivityType==="Match" && <div className='modalContentSecondRow'>
            
            <div className='choosingTeamCell-Second'>
              <div>Match:</div>
              <div className='choosingTeamCell-SecondContent'>
              <span className='hovedPrincip'>
              <select name="Teams" className="select" onChange={(e)=>setOpponent("Kamp vs " + e.target.value)}>
                <option name="FCK" value="FCK">FCK</option>
                <option name="silkeborg" value="Silkeborg IF">Silkeborg IF</option>
                <option name="seStenlect" value="Stenløse BK">Stenløse BK</option>
                <option name="Stoholm" value="Stoholm IF">Stoholm IF</option>
              </select>
              </span>

              </div>
              </div>
  
            </div> }
            
            {ActivityType==="Match" && <div className='modalContentSecondRow'>
            
            <div className='choosingTeamCell-Second'>
              <div>Activity Name:</div>
              <div className='choosingTeamCell-SecondContent'>
              <span className='hovedPrincip'>
              <select name="actvities" className="select">
                <option name="select" value="FCK">{Opponent}</option>
               
              </select>
              </span>

              </div>
              </div>
  
            </div> }

            {ActivityType==="Meeting" && <div className='modalContentSecondRow'>
            
            <div className='choosingTeamCell-Second'>
              <div>Headline:</div>
              <div className='choosingTeamCell-SecondContent'>
              <span className='hovedPrincip'>
              <select name="actvities" className="select">
                <option name="select" value="FCK">U12 Team Meeting</option>
               
              </select>
              </span>

              </div>
              </div>
  
            </div> }
            {ActivityType==="Meeting" && <div className='modalContentSecondRow'>
            
            <div className='choosingTeamCell-Second'>
              <div>Agenda:</div>
              <div className='choosingTeamCell-SecondContent'>
              <span className='hovedPrincip'>
              <select name="actvities" className="select">
                <option name="select" value="FCK">Description</option>
               
              </select>
              </span>

              </div>
              </div>
  
            </div> }


          {(ActivityType==="select" || ActivityType==="Training"||ActivityType==='') && <div className='modalContentSecondRow' >
            
            <div className='choosingTeamCell-Second'>
              <div>Secondary</div>
              <div className='choosingTeamCell-SecondContent'>

              <span className='hovedPrincip'>
              <select name="actvities" className="select">
                <option name="select" value="select">Sub Princip</option>
                <option name="select" value="Basisteknisk">Choose From Curriculum</option>
              </select>
              </span>

              <span className='hovedModPrincip'>
              <select name="hovedModPrincip" className="select">
                <option name="select" value="select" >Sub Mod Princip</option>
                <option name="select" value="Basisteknisk">Choose From Curriculum</option>
              </select>
              </span>
              <span className='hovedModPrincip'>
              <select name="hovedModPrincip" className="select">
                <option name="select" value="select" >Basic Tactic</option>
                <option name="select" value="Basisteknisk">Choose From Curriculum</option>
              </select>
              </span>
              <span className='hovedModPrincip'>
              <select name="hovedModPrincip" className="select">
                <option name="select" value="select" >Basic Technical</option>
                <option name="select" value="Basisteknisk">Choose From Curriculum</option>
              </select>
              </span>
              </div>
              </div>
            
            </div>}
            <div className='modalContentSecondRow'>
            
            <div className='choosingTeamCell-Second'>
              <div>Date and Time:</div>
              <div className='choosingTeamCell-SecondContent'>
              <span className='hovedPrincip'>
              <input type="date" id="birthday" name="birthday"/>
              </span>
              
              <span className='Time'>
              <input type="time" id="training" name="training" />
              </span>

              <span className='Address'>
              <select name="hovedModPrincip" className="select">
                <option name="select" value="select" >Address</option>
               
              </select>
              </span>
              </div>
              <div className='footerOfRow'>
                <span>Add Training</span>
                <span>Upload Training</span>
                <span>
                <label for="addToCalendar">Add to Team Calendar: </label> 
              
                  <input type="checkbox" id="adding1" name="addToTeamCalendar" value="yes"/>
               </span>
                </div>
              </div>
  
            </div>
            </div>
        <div className='modalFooter2'>
             <button onClick={()=>closeActivityModal(false)}> Add</button></div>

    </div>
</div>
)

  
}

export default NewActivityModal;