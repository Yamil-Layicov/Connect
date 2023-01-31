import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room23.module.css'


const Room23 = () => {

    const[room23,setroom23] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/9")
    .then(res => res.json())
    .then(res2 => setroom23(res2))
   },[])

  return (
    <>
      <div className={style.room23Content}>
        <div className={style.room23Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room23.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room23.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room23.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room23.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room23.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room23