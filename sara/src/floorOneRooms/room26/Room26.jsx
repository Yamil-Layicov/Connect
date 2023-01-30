import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room26.module.css'

const Room26 = () => {

    const[room26,setroom26] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/21")
    .then(res => res.json())
    .then(res2 => setroom26(res2))
   },[])

  return (
    <>
      <div className={style.room26Content}>
        <div className={style.room26Into}>
            <div className={style.parag} onClick={handelDetail}>{room26.company}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room26.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room26.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room26.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room26.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room26