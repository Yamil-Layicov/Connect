import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room17.module.css'

const Room17 = () => {

    const[room17,setroom17] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/12")
    .then(res => res.json())
    .then(res2 => setroom17(res2))
   },[])

  return (
    <>
      <div className={style.room17Content}>
        <div className={style.room17Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room17.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room17.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room17.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room17.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room17.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room17