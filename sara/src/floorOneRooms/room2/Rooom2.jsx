import React from 'react'
import style from './Room2.module.css'
import { useState,useEffect } from 'react'

const Rooom2 = () => {

  const[room2,setRoom2] = useState('')
  const[roomDetail,setRoomDetail] = useState(false)

  const handelDetail = () => {
    setRoomDetail(true)
}

  useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/3")
    .then(res => res.json())
    .then(res2 => setRoom2(res2))
   },[])

  return (
    <>
       <div className={style.room2Content}>
        <div className={style.room2Into}>
            <div className={style.parag} onClick={handelDetail}>{room2.company}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room2.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room2.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room2.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room2.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Rooom2