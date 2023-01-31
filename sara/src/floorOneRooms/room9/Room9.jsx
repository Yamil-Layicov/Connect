import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room9.module.css'

const Room9 = () => {

    const[room9,setroom9] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/16")
    .then(res => res.json())
    .then(res2 => setroom9(res2))
   },[])

  return (
    <>
      <div className={style.room9Content}>
        <div className={style.room9Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room9.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room9.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room9.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room9.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room9.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room9