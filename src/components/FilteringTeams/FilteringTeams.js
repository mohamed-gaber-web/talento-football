import { React, useState, useEffect } from 'react'
import './FilteringTeams.css'
function FilteringTeams({filteration}) {
    const [checked, setChecked] = useState([]);
    const teams = [
        {
            _id: 1,
            name: "U10"
        },
        {
            _id: 2,
            name: "U11"
        },
        {
            _id: 3,
            name: "U12"
        },
        {
            _id: 4,
            name: "U13"
        },
        {
            _id: 5,
            name: "U14"
        },
        {
            _id: 6,
            name: "U15"
        },
        {
            _id: 7,
            name: "U16"
        },
        {
            _id: 8,
            name: "U17"
        }
    ]
    const handleToggle=(value)=>{
        const currentIndex= checked.indexOf(value);
        const newChecked =[...checked];
        if (currentIndex===-1){
            newChecked.push(value)
        }else{
            newChecked.splice(currentIndex,1)
        }
        setChecked(newChecked)
        console.log(checked);
    }

    useEffect(() => {
        console.log("values are", checked);
        filteration(checked)
    }, [checked])

    return (
        <ul className='Schedule-Button-Sub-Menu'>

            <div>Choose Team</div>
            {teams.map((value,index) => (
            <li key={index}>
                <label for="vehicle1"> {value.name}</label>
                <input type="checkbox" id={value._id} name={value.name} defaultChecked
                 onChange={()=>handleToggle(value.name) } />
            </li>
           
        )) }
        </ul>
    )
}

export default FilteringTeams;