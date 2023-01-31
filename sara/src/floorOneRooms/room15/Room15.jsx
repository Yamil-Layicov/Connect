import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room15.module.css'

const Room15 = () => {

    const[room15,setroom15] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/13")
    .then(res => res.json())
    .then(res2 => setroom15(res2))
   },[])

  return (
    <>
      <div className={style.room15Content}>
        <div className={style.room15Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room15.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room15.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room15.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room15.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room15.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room15