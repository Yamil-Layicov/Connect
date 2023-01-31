import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room21.module.css'

const Room21 = () => {

    const[room21,setroom21] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/11")
    .then(res => res.json())
    .then(res2 => setroom21(res2))
   },[])

  return (
    <>
      <div className={style.room21Content}>
        <div className={style.room21Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room21.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room21.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room21.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room21.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room21.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room21