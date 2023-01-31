import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room19.module.css'

const Room19 = () => {

    const[room19,setroom19] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/19")
    .then(res => res.json())
    .then(res2 => setroom19(res2))
   },[])

  return (
    <>
      <div className={style.room19Content}>
        <div className={style.room19Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room19.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room19.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room19.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room19.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room19.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room19