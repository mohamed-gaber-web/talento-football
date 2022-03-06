import './calenderSchedule.css';
import { useState } from 'react';
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
import FilteringTeams from '../../components/FilteringTeams/FilteringTeams';
const CalenderSchedule = () => {
    const [layeringClicked,setLayringClicked]=useState(false);
    const [openModal,setOpenModal] = useState(false);

    return (
        <div className="callender-schedule">
            <div className="Schedule-head">
                <div className="Schedule-head-Start">
                    <h4>February</h4>
                </div>
                <div className="Schedule-head-End">
                <div className="display-Type">
                <button className="Schedule-Button"><CustomLink  to='/week-view'> Week </CustomLink></button>
                <button className="Schedule-Button golden-Font"><CustomLink  to='/schedule-club'> Month </CustomLink></button>  
                </div>
                <div className="sports-Icons">
                <button className="Schedule-Button" > <FontAwesomeIcon icon={faPerson} />  </button>
                <button className="Schedule-Button" >
                    <span> Football </span>
                    <FontAwesomeIcon icon={faEarthAsia} />
                </button>
                <button className="Schedule-Button"> <FontAwesomeIcon icon={faDumbbell} /> </button>
                <button className="Schedule-Button"> <FontAwesomeIcon icon={faUser} /> </button></div>
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
            <div class="Schedule-itself">
                    <div class="Schedule-Day-Column">
                        <div class="Schedule-Day">
                            <div class="Schedule-Day-Head">
                                <h6>Man</h6>
                                <h6>31/1</h6>
                            </div>
                            <div class="Schedul-Day-Content">
                                <div class="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                    </div>

                    <div class="Schedule-Day-Column">
                        <div class="Schedule-Day">
                            <div class="Schedule-Day-Head">
                                <h6>Tirs</h6>
                                <h6>1/2</h6>
                            </div>
                            <div class="Schedul-Day-Content">
                                <div class="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                    </div>

                    <div class="Schedule-Day-Column">
                        <div class="Schedule-Day">
                            <div class="Schedule-Day-Head">
                                <h6>Ons</h6>
                                <h6>2/2</h6>
                            </div>
                            <div class="Schedul-Day-Content">
                                <div class="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                    </div>
                    <div class="Schedule-Day-Column">
                        <div class="Schedule-Day">
                            <div class="Schedule-Day-Head">
                                <h6>Tors</h6>
                                <h6>3/2</h6>
                            </div>
                            <div class="Schedul-Day-Content">
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                            </div>

                        </div>
                    </div>
                    <div class="Schedule-Day-Column">
                        <div class="Schedule-Day">
                            <div class="Schedule-Day-Head">
                                <h6>Fre</h6>
                                <h6>4/2</h6>
                            </div>
                            <div class="Schedul-Day-Content">
                                <div class="red">U12:Fase 1 - Hoit Pres: 16:15-17:15</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                                <div class="blue">U13:Fase 1 - Hoit Pres: 16:15-17:15</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="green">U14:Fase 1 - Middel Pres: 16:15-17:15</div>

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="burble">U15:Fase 1 - Middel Pres: 16:30-17:45</div>
                            </div>

                        </div>
                    </div>
                    <div class="Schedule-Day-Column">
                        <div class="Schedule-Day">
                            <div class="Schedule-Day-Head">
                                <h6>Lor</h6>
                                <h6>5/2</h6>
                            </div>
                            <div class="Schedul-Day-Content">
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                                <div class="blue">U13:Kamp vs HB Korge: 10:00</div>

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                            </div>

                        </div>
                    </div>
                    <div class="Schedule-Day-Column">
                        <div class="Schedule-Day">
                            <div class="Schedule-Day-Head">
                                <h6>Son</h6>
                                <h6>6/2</h6>
                            </div>
                            <div class="Schedul-Day-Content">
                                <div class="red">Kamp vs FCK: 11:00</div>
                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">

                            </div>

                        </div>
                        <div class="Schedule-Day">
                            <div class="Schedul-Day-Content">
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CalenderSchedule;