import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room25.module.css'

const Room25 = () => {

    const[room25,setRoom25] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/1")
    .then(res => res.json())
    .then(res2 => setRoom25(res2))
   },[])

  return (
    <>
      <div className={style.room25Content}>
        <div className={style.room25Into}>
            <div className={style.parag} onClick={handelDetail}>{room25.company}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room25.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room25.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room25.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room25.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room25