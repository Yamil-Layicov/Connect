import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room7.module.css'

const Room7 = () => {

    const[room7,setroom7] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/22")
    .then(res => res.json())
    .then(res2 => setroom7(res2))
   },[])

  return (
    <>
      <div className={style.room7Content}>
        <div className={style.room7Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room7.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room7.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room7.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room7.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room7.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room7