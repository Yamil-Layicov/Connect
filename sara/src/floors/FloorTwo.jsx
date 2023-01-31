import React from 'react'
import { Link } from 'react-router-dom'
import ManyRooms from '../floorOneRooms/manyRooms/ManyRooms'
import ManyRoomsDown from '../floorOneRooms/mayRoomsDown/ManyRoomsDown'
import Room1 from '../floorOneRooms/room1/Room1'
import Rooom2 from '../floorOneRooms/room2/Rooom2'
import Room25 from '../floorOneRooms/room25/Room25'
import Room26 from '../floorOneRooms/room26/Room26'


const FllorTwo = () => {
  return (  
    <>
       <div className='floorOneContent' >
        <div className='floorOneContentInto'>
            <Room25/>
            <Rooom2/>
            <Room1/>
            <Room26/>
            <ManyRooms/>
            <ManyRoomsDown/>
        </div>
        <Link to='/'><div className='floorOneClose'>X</div></Link>
       </div>
    </>
  )
}

export default FllorTwo