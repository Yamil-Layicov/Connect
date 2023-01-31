import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room4.module.css'


const Room4 = () => {

    const[room4,setroom4] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/7")
    .then(res => res.json())
    .then(res2 => setroom4(res2))
   },[])

  return (
    <>
      <div className={style.room4Content}>
        <div className={style.room4Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room4.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room4.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room4.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room4.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room4.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room4