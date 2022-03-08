import React, { useEffect,useState } from 'react'
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons';
function Modal({closeModal}) {

    const [teams,setTeams] = useState([]);
    const [edit,setColorEdit] = useState(true);
    const [teamEdit,setTeamEdit] = useState(true);
    const [modalSpecsTeam,setmodalSpecsTeam]=useState(true);
    const [modalSpecsPerio,setmodalSpecsPerio]=useState(false);
    const [clubs,setClubs]= useState([]);
    const [newPrio,setNewPerio]=useState(false);

    const changeColorBehaviour =() =>{
        setColorEdit(true);
    }  
    const changeSetTeamsBehaviour =()=>{
        setTeamEdit(true);
    } 
useEffect (()=>{
        setClubs([{clubID:"asa2asAS5asAS2asdsa2",clubName:"Leeds City"},
        {clubID:"ars2asd5s2d5asd58asd",clubName:"Derby County "},
        {clubID:"e4e2r52tt5g4t5r5ee",clubName:"Arsenal "}]);

        setTeams([{teamName:'U10',TeamColor:'red'},
        {teamName:'U11',TeamColor:'blue'},
        {teamName:'U12',TeamColor:'green'},
        {teamName:'U13',TeamColor:'yellow'},
        {teamName:'U14',TeamColor:'purple'},
        {teamName:'U15',TeamColor:'maroon'},
        {teamName:'U16',TeamColor:'aqua'}])

      },[teams,edit,teamEdit,modalSpecsTeam,modalSpecsPerio,clubs,newPrio])
      return (
    <div className='modalBackGround'>
        <div className='modalContainer'>
            <div className='modalHead'>
            <div>Change the settings</div>
            <div><button onClick={()=>closeModal(false)}>x</button></div>
            </div>
            <div className='modalContent'>
                <div className='modalContentHead'>
                <div className='modalContentHeadLeft'>
                    <button onClick={()=>{setmodalSpecsTeam(true);setmodalSpecsPerio(false)}}
                    style={{color:modalSpecsTeam? '#F0E68C':'white'}}>Teams</button>
                    <button onClick={()=>{setmodalSpecsPerio(true);setmodalSpecsTeam(false);}}
                    style={{color:modalSpecsPerio? '#F0E68C':'white'}}>Periodisering</button>
                </div>
                {modalSpecsTeam && <div className='modalContentHeadRight'>
                    <button><FontAwesomeIcon icon={faPen} size="1x" onClick={()=>{setTeamEdit(prevTeamEdit=>!prevTeamEdit);changeColorBehaviour()}} /></button>
                    <button><FontAwesomeIcon icon={faPlus} size="lg" onClick={()=>{setColorEdit(prevEdit=>!prevEdit);changeSetTeamsBehaviour()}}/></button>
                </div>}
                {modalSpecsPerio && <div className='modalContentHeadRight-Perio'>
                    <button><FontAwesomeIcon icon={faPen} size="1x" /></button>
                    <button><FontAwesomeIcon icon={faPlus} size="lg" onClick={()=>{setTeamEdit(prevTeamEdit=>!prevTeamEdit);setNewPerio(prev=>!prev)}}/></button>
                </div>}
                </div>
                
                <div className='modalContentBody'>

                    {modalSpecsTeam && teams.map(t=>{
                        return(
                <div className='modealContentBodySpan'>
                <span> {t.teamName}</span>
                <span className='span2' style={{backgroundColor:t.TeamColor}}> </span>
                <span hidden={edit===true}> <input type="color" value={t.TeamColor}></input></span>
                <span hidden={teamEdit===true}> <button> <FontAwesomeIcon icon={faTrashCan}  /></button> </span>
                   </div> 
                        )})}

                        {modalSpecsPerio && clubs.map(c=>{
                        return(
                <div className='modealContentBodySpan'>
                <span> {c.clubName}</span>
                
                   </div>  )})}
                   { newPrio &&
                   <div className='newClub' > <button >New...</button></div>}
                  
                   </div>
            </div>
            <div className='modalFooter'>
                 <button onClick={()=>closeModal(false)}> Save</button></div>

        </div>
    </div>
  )
}

export default Modal;