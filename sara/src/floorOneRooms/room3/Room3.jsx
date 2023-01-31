import React from 'react'
import { useEffect,useState } from 'react'
import style from './Rome3.module.css'

const Room3 = () => {

    const[room3,setroom3] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/6")
    .then(res => res.json())
    .then(res2 => setroom3(res2))
   },[])

  return (
    <>
      <div className={style.room3Content}>
        <div className={style.room3Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room3.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room3.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room3.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room3.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room3.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room3