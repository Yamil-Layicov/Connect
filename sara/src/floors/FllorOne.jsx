import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Index from '../components/Modal/Index';
const FllorOne = () => {

    const [rooms, setRooms] = useState([]);
    const [open,setOpen] = useState(false);
    const [current,setCurrent] = useState(null)

    useEffect(() => {
      fetch("http://localhost:5000/Mertebe-1")
        .then((res) => res.json())
        .then((res2) => setRooms(res2));
    }, []);

    const handleList = (e)=>{
        setCurrent(e)
        setOpen(!open)
    }

  return (  
    <>
       <div className='floorOneContent' >
            <Index open={open} rooms={rooms} current={current}/>
        <div className='floorOneContentInto'>
            {
                rooms.map(room => (
                    <ul>    
                        <li onClick={() => handleList(room.id)}>
                            <p>{room.roomNo}</p>
                        </li>   
                    </ul>
                ))
            }
        </div>
        <Link to='/'><div className='floorOneClose'>X</div></Link>
       </div>
    </>
  )
}

export default FllorOne