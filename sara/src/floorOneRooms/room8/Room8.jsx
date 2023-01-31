import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room8.module.css'

const Room8 = () => {

    const[room8,setroom8] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/17")
    .then(res => res.json())
    .then(res2 => setroom8(res2))
   },[])

  return (
    <>
      <div className={style.room8Content}>
        <div className={style.room8Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room8.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room8.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room8.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room8.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room8.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room8