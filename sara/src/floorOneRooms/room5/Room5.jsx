import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room5.module.css'

const Room5 = () => {

    const[room5,setroom5] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/8")
    .then(res => res.json())
    .then(res2 => setroom5(res2))
   },[])

  return (
    <>
      <div className={style.room5Content}>
        <div className={style.room5Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room5.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room5.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room5.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room5.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room5.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room5