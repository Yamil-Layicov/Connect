import React from 'react'
import Room13 from '../room13/Room13'
import Room15 from '../room15/Room15'
import Room16 from '../room16/Room16'
import Room17 from '../room17/Room17'
import style from './ManyRooms.module.css'

const ManyRoomsDown = () => {
  return (
    <> 
        <div className={style.manyRoomsDownContent}>
            <div className={style.room17Content}><Room17/></div>
            <div className={style.room16Content}><Room16/></div>
            <div className={style.room15Content}><Room15/></div>
            <div className={style.room1413Content}><Room13/></div>  
        </div>
    </>
  )
}

export default ManyRoomsDown