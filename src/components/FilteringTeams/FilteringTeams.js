import {React,useState,useEffect} from 'react'
import './FilteringTeams.css'
function FilteringTeams({ff}) {
    const [input,setInput]=useState('');
    const [fillArray,setfillArray]=useState([]);
        const handle= (e)=>{
            ff(e);
        }
        useEffect(() => {
          console.log("values are",input);
            fillArray.push(input);
            
            console.log(fillArray,"filArrray")
        }, [input,fillArray])
        
    return (
        <ul className='Schedule-Button-Sub-Menu'>

            <div>Choose Team</div>

            <li>
                <label for="vehicle1"> U10</label>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="U10" 
                onChange={(e)=>{setInput(e.target.value);handle(e.target.value)}} />
            </li>
            <li>
                <label for="vehicle1"> U11</label>
                <input type="checkbox" id="vehicle2" name="vehicle1" value="U11"  onChange={(e)=>setInput(e.target.value)} />
            </li>
            <li>
                <label for="vehicle1"> U12</label>
                <input type="checkbox" id="vehicle3" name="vehicle1" value="U12" />
            </li>
            <li>
                <label for="vehicle1"> U13</label>
                <input type="checkbox" id="vehicle4" name="vehicle1" value="U13" />
            </li>
            <li>
                <label for="vehicle1"> U14</label>
                <input type="checkbox" id="vehicle5" name="vehicle1" value="U14" />
            </li>
            <li>
                <label for="vehicle1"> U15</label>
                <input type="checkbox" id="vehicle6" name="vehicle1" value="U15" />
            </li>
            <li>
                <label for="vehicle1"> U16</label>
                <input type="checkbox" id="vehicle7" name="vehicle1" value="U16" />
            </li>
            <li>
                <label for="vehicle1"> U17</label>
                <input type="checkbox" id="vehicle8" name="vehicle1" value="U17" />
            </li>

        </ul>
    )
}

export default FilteringTeams;