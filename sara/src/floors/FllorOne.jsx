import React from 'react'
import { Link } from 'react-router-dom'
import ManyRooms from '../floorOneRooms/manyRooms/ManyRooms'
import Room16 from '../floorOneRooms/room16/Room16'
import Rooom2 from '../floorOneRooms/room2/Rooom2'
import Room25 from '../floorOneRooms/room25/Room25'
import Room26 from '../floorOneRooms/room26/Room26'


const FllorOne = () => {
  return (  
    <>
       <div className='floorOneContent' >
        <div className='floorOneContentInto'>
            <Room25/>
            <Rooom2/>
            <Room16/>
            <Room26/>
            <ManyRooms/>
        </div>
        <Link to='/'><div className='floorOneClose'>X</div></Link>
       </div>
    </>
  )
}

export default FllorOne