import React, { useEffect,useState } from 'react'
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons';
function Modal({closeModal}) {
    const [nteam,setnTeam]=useState({teamName:'',TeamColor:''});
    const [tName,settName]=useState('');
    const [color,setColor]=useState('');
    const [showAddingTeam,setshowAddingTeam]=useState(false);
    const [teams,setTeams] = useState([
        {teamName:'U10',TeamColor:'red'},
        {teamName:'U11',TeamColor:'blue'},
        {teamName:'U12',TeamColor:'green'},
        {teamName:'U13',TeamColor:'yellow'},
        {teamName:'U14',TeamColor:'purple'},
        {teamName:'U15',TeamColor:'maroon'},
        {teamName:'U16',TeamColor:'aqua'},
    ]);

    const [edit,setColorEdit] = useState(true);
    const [teamEdit,setTeamEdit] = useState(true);
    const [modalSpecsTeam,setmodalSpecsTeam]=useState(true);
    const [modalSpecsPerio,setmodalSpecsPerio]=useState(false);

    const [clubs,setClubs]= useState([
        {clubID:"asa2asAS5asAS2asdsa2",clubName:"Leeds City"},
        {clubID:"ars2asd5s2d5asd58asd",clubName:"Derby County "},
        {clubID:"e4e2r52tt5g4t5r5ee",clubName:"Arsenal "}]);

    const [newPrio,setNewPerio]=useState(false);

const addNewTeam =()=>{
    setnTeam({teamName:tName,TeamColor:color});
            teams.push(nteam);

}

    const deleteTeam= (team) =>{
        const newTeam=teams.filter(s=>s.teamName!==team.teamName);
      setTeams(newTeam);
    }
    const changeColor=(team)=>{

        // const [newColor,setNewColor] = useState(team);
        
        teams.splice(teams[teams.indexOf(team)],1);
    teams[teams.indexOf(team)].TeamColor="#101010";
    
    }
    const changeColorBehaviour =() =>{
        setColorEdit(true);
    }  
    const changeSetTeamsBehaviour =()=>{
        setTeamEdit(true);
    } 
useEffect (()=>{
        // setClubs()

        // setTeams()
        console.log(nteam)
      },[teams,edit,teamEdit,modalSpecsTeam,modalSpecsPerio,clubs,newPrio,nteam])
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
                
                <div className='modalContentBody' style={{overflow:'hidden'}}>

                    {modalSpecsTeam && teams.map(t=>{
                        return(
                <div key={t.teamName} className='modealContentBodySpan' >
                <span className='teamNameSpan'> {t.teamName}</span>
                <span className='span2' style={{backgroundColor:t.TeamColor}}> </span>
                <span hidden={edit===true}> <input type="color" name='teamColor' value={t.TeamColor} onChange={()=>changeColor(t)} ></input></span>
                <span hidden={teamEdit===true}> 
                <button key={t.teamName} onClick={()=>deleteTeam(t) }>
                      <FontAwesomeIcon icon={faTrashCan}  /></button> </span>
                   </div>    
                        )})}
                   <div className='AddTeam' style={{cursor:showAddingTeam?'context-Menu':'pointer',border:showAddingTeam?'1px solid grey':'none'}}>
                   <p onClick={()=>setshowAddingTeam((n)=>!n)} >{showAddingTeam && 'new team'} {!showAddingTeam&&'new team...'}</p>
                 { showAddingTeam &&  < div className="addNewTeam">
                    <input onChange={(e)=>setnTeam((prevState)=>({...prevState,teamName:e.target.value}))} type='text' name='name' placeholder='name..'/>
                    <input onChange={(e)=>setnTeam((prevState)=>({...prevState,TeamColor:e.target.value}))} type='color' name='color' />
                        <button disabled={nteam.teamName==='' || nteam.TeamColor===''} onClick={()=>addNewTeam()} name='button'> add</button>
                            
                    </div>}
                   </div>

                        {modalSpecsPerio && clubs.map(c=>{
                        return(
                <div key={c.clubID} className='modealContentBodySpan'>
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