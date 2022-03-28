import './scheduleClub.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/modal/modal';
import { CustomLink } from '../../utility/activeLink';
import NewActivityModal from '../../components/newActivityModal/newActivityModal'
import FilteringTeams from '../../components/FilteringTeams/FilteringTeams';
import axios from 'axios';

const ScheduleClub = () => {
    const [result, setResult]=useState([])
    const [layeringClicked, setLayringClicked] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openActivityModal, setOpenActivityModal] = useState(false);
    const [calendars, setCalendars] = useState([]);
    const [teamFiltered, setTeamsFiltered] = useState([]);
    const limit = 5;
    useEffect(() => {
        const getCalendars = async () => {
            await axios.get(`http://localhost:3000/calendars`)
                .then(res => {
                    console.log(res.data)
                    const c = res.data;
                    setCalendars(c);
                })
        }
        getCalendars();
    }, [limit])

    const checkID = (fillArray) => {
        calendars.map(c=>
      
       fillArray.forEach(f=>
            {
               for (let index = 0; index < c.activities.length; index++) {
                   if(f===c.activities[index].teamName)
                   {c.activities.splice(index,1)
                }
                   else{
                       console.log('false',c.activities[index].teamName)
                   }
                   
               }}
        ))
        // console.log('res',result);

    }
    const receiveFilterTeams = (filtered) => {
        console.log("From child", filtered);
        setTeamsFiltered(filtered)
        checkID(filtered);
        
    }

    return (

        <div className="Schedule">
            {openActivityModal && <NewActivityModal closeActivityModal={setOpenActivityModal} />}
            <div className="Schedule-head">
                <div className="Schedule-head-Startt">
                    <h4>February</h4>
                </div>
                <div className="Schedule-head-End">
                    <div className="display-Type">
                        <button className="Schedule-Button"><CustomLink to='/week-view'> Week </CustomLink></button>
                        <button className="Schedule-Button golden-Font">Month</button>
                    </div >
                    <div className="sports-Icons">
                        <button className="Schedule-Button" > <FontAwesomeIcon icon={faPerson} />  </button>
                        <button className="Schedule-Button" >
                            <span> Football </span>
                            <FontAwesomeIcon icon={faEarthAsia} />
                        </button>
                        <button className="Schedule-Button"> <FontAwesomeIcon icon={faDumbbell} /> </button>
                        <button className="Schedule-Button"> <FontAwesomeIcon icon={faUser} /> </button></div>
                    <div className="Coach-Actions">
                        <button className="Schedule-Button" onClick={() => setLayringClicked(c => !c)}> <FontAwesomeIcon icon={faLayerGroup} />
                        </button>
                        {layeringClicked && <FilteringTeams filteration={receiveFilterTeams} />}

                        <button className="Schedule-Button" onClick={() => { setOpenModal(true) }}> <FontAwesomeIcon icon={faPersonRunning} /> </button>
                        <button className="Schedule-Button"> <FontAwesomeIcon icon={faDownLong} /> </button>
                        {openModal && <Modal closeModal={setOpenModal} />}

                    </div>
                </div>

            </div>
            <div className="Schedule-itselff">

                {calendars.map(calendar => {
                    return (
                        <div key={calendar.id} className="Schedule-Day" >
                            <div className="Schedule-Day-Head" onClick={() => setOpenActivityModal(o => !o)}>
                                <h6>{calendar.dayName.slice(0, 3)}</h6>
                                <h6>{calendar.date.slice(5)}</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                {calendar.activities.map(act =>
                                    <div key={act.id} className={act.teamColor} onClick={() => checkID(calendar.id, act.teamName)} >
                                        {`${act.teamName}: ${act.desc}: ${act.startTime}-${act.endTime}`}
                                    </div>)}

                                {/* <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                    <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                    <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div> */}
                            </div>

                        </div>)
                })}




            </div>
        </div>
    );
}

export default ScheduleClub;