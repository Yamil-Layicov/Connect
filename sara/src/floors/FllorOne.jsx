import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ManyRooms from '../floorOneRooms/manyRooms/ManyRooms'
import ManyRoomsDown from '../floorOneRooms/mayRoomsDown/ManyRoomsDown'
import Room1 from '../floorOneRooms/room1/Room1'
import Rooom2 from '../floorOneRooms/room2/Rooom2'
import Room25 from '../floorOneRooms/room25/Room25'
import Room26 from '../floorOneRooms/room26/Room26'
import Lift1 from '../Lifts/lift1/Lift1'
import Lift2 from '../Lifts/lift2/Lift2'
import Lift3 from '../Lifts/lift3/Lift3'
import Lift4 from '../Lifts/lift4/Lift4'


const FllorOne = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (  
    <>
       <div className='floorOneContent' >
       <div  className='showHide'>
       <div className={darkMode ? "dark-mode" : "light-mode"}>
          <div className="container">
            <div className="switch-checkbox">
              <label className="switch">
                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                <span className="slider round"> </span>
              </label>
            </div>
          </div>
        </div>
       </div>
        <div className='floorOneContentInto'>
            <Room25/>
            <Rooom2/>
            <Room1/>
            <Room26/>
            <ManyRooms/>
            <ManyRoomsDown/>
            <Lift1/>
            <Lift2/>
            <Lift3/>
            <Lift4/>
        </div>
        <div className={darkMode ? "layoutImgActive" : "layoutImg"}><img src="https://i.postimg.cc/qBjCzDhR/Floor1.png" alt="" /></div>
        <Link to='/'><div className='floorOneClose'>X</div></Link>
       </div>
    </>
  )
}

export default FllorOne