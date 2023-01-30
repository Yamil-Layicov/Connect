import React from 'react'
import { useState,useEffect } from 'react'
import style from './Room16.module.css'

const Room16 = () => {

    const[room16,setRoom16] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }
    
      useEffect(() => {
        fetch("http://localhost:5000/Mertebe-1/4")
        .then(res => res.json())
        .then(res2 => setRoom16(res2))
       },[])

  return (
    <div className={style.alma}>
      <div className={style.room16Content}>
        <div className={style.room16Into}>
            <div className={style.parag} onClick={handelDetail}>{room16.company}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room16.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room16.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room16.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room16.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </div>
  )
}

export default Room16