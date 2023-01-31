import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room22.module.css'

const Room22 = () => {

    const[room22,setroom22] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/23")
    .then(res => res.json())
    .then(res2 => setroom22(res2))
   },[])

  return (
    <>
      <div className={style.room22Content}>
        <div className={style.room22Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room22.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room22.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room22.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room22.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room22.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room22