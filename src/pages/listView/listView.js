import './listView.css';
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
import FilteringTeams from '../../components/FilteringTeams/FilteringTeams';
const ListView = () => {
    const [layeringClicked,setLayringClicked]=useState(false);
    const [openModal,setOpenModal] = useState(false);
    const [Football, setFootball] = useState(true);
    const [Mental, setMental] = useState(true);
    const [Gym, setGym] = useState(true);
    useEffect(() => {

    }, [Football, Mental, Gym,layeringClicked])
    return (
        <div className="list_view">
            <div className="Schedule">
                <div className="Schedule-head">
                    <div className="Schedule-head-Start">
                        <h4>February</h4>
                    </div>
                    <div className="Schedule-head-End">
                        <div className="sports-Icons">
                            <button className="Schedule-Button" > <FontAwesomeIcon icon={faPerson} />  </button>
                            <button className="Schedule-Button" onClick={()=>setFootball(s=>!s)}>
                                <span> Football </span>
                                <FontAwesomeIcon  style={{color:Football ? '#F0E68C':'white'}}  icon={faEarthAsia} />
                            </button>
                            <button className="Schedule-Button" onClick={()=>setGym(g=>!g)}> <FontAwesomeIcon style={{color:Gym ? '#F0E68C':'white'}} icon={faDumbbell} /> </button>
                            <button className="Schedule-Button" onClick={()=>setMental(m=>!m)}> <FontAwesomeIcon  style={{color:Mental ? '#F0E68C':'white'}}  icon={faUser} /> </button></div>
                        <div className="Coach-Actions">
                            <button className="Schedule-Button"onClick={()=>setLayringClicked(c=>!c)}> <FontAwesomeIcon icon={faLayerGroup} /> 
                    </button>
                    {layeringClicked && <FilteringTeams/>}

                            <button className="Schedule-Button" onClick={() => { setOpenModal(true)}}> <FontAwesomeIcon icon={faPersonRunning} /> </button>
                            <button className="Schedule-Button"> <FontAwesomeIcon icon={faDownLong} /> </button>
                            {openModal && <Modal closeModal={setOpenModal} />}

                        </div>
                    </div>

                </div>

                {/* Start schedule  */}
                <div className="Schedule-itself">
                   { Football && <div className="selected-Sport Football-Row">
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Man</h6>
                                <h6>31/1</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Tirs</h6>
                                <h6>1/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Ons</h6>
                                <h6>2/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Tors</h6>
                                <h6>3/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Fre</h6>
                                <h6>4/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>

                        <div className="Schedule-Day ">
                            <div className="Schedule-Day-Head ">
                                <h6>Lor</h6>
                                <h6>5/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="blue">U13:Game vs HB Koge: 10:00</div>

                            </div>

                        </div>
                        <div className="Schedule-Day ">
                            <div className="Schedule-Day-Head ">
                                <h6>Son</h6>
                                <h6>6/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="dark-red">U12:Kamp vs FCK: 11:00</div>

                            </div>

                        </div>
                    </div>}

                    {Mental && <div className="selected-Sport Mental-Row">
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Man</h6>
                                <h6>31/1</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Tirs</h6>
                                <h6>1/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Ons</h6>
                                <h6>2/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Tors</h6>
                                <h6>3/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">

                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Fre</h6>
                                <h6>4/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>

                        <div className="Schedule-Day ">
                            <div className="Schedule-Day-Head ">
                                <h6>Lor</h6>
                                <h6>5/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="blue">U13:Game vs HB Koge: 10:00</div>

                            </div>

                        </div>
                        <div className="Schedule-Day ">
                            <div className="Schedule-Day-Head ">
                                <h6>Son</h6>
                                <h6>6/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="dark-red">U12:Kamp vs FCK: 11:00</div>

                            </div>

                        </div>
                    </div>}

                    {Gym && <div className="selected-Sport Gym-Row">
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Man</h6>
                                <h6>31/1</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Tirs</h6>
                                <h6>1/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Ons</h6>
                                <h6>2/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Tors</h6>
                                <h6>3/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">

                            </div>

                        </div>
                        <div className="Schedule-Day">
                            <div className="Schedule-Day-Head">
                                <h6>Fre</h6>
                                <h6>4/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div className="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>
                                <div className="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>

                        <div className="Schedule-Day ">
                            <div className="Schedule-Day-Head ">
                                <h6>Lor</h6>
                                <h6>5/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="blue">U13:Game vs HB Koge: 10:00</div>

                            </div>

                        </div>
                        <div className="Schedule-Day ">
                            <div className="Schedule-Day-Head ">
                                <h6>Son</h6>
                                <h6>6/2</h6>
                            </div>
                            <div className="Schedul-Day-Content">
                                <div className="dark-red">U12:Kamp vs FCK: 11:00</div>

                            </div>

                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default ListView;