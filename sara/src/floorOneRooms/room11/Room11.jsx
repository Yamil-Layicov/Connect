import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room11.module.css'

const Room11 = () => {

    const[room11,setroom11] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/24")
    .then(res => res.json())
    .then(res2 => setroom11(res2))
   },[])

  return (
    <>
      <div className={style.room11Content}>
        <div className={style.room11Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room11.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room11.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room11.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room11.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room11.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room11