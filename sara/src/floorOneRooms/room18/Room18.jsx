import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room18.module.css'

const Room18 = () => {

    const[room18,setroom18] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/18")
    .then(res => res.json())
    .then(res2 => setroom18(res2))
   },[])

  return (
    <>
      <div className={style.room18Content}>
        <div className={style.room18Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room18.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room18.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room18.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room18.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room18.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room18