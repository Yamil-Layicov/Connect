import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room13.module.css'

const Room13 = () => {

    const[room13,setroom13] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/25")
    .then(res => res.json())
    .then(res2 => setroom13(res2))
   },[])

  return (
    <>
      <div className={style.room13Content}>
        <div className={style.room13Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room13.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room13.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room13.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room13.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room13.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room13