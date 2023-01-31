import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room1.module.css'

const Room1 = () => {

    const[room1,setroom1] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/4")
    .then(res => res.json())
    .then(res2 => setroom1(res2))
   },[])

  return (
    <>
      <div className={style.room1Content}>
        <div className={style.room1Into}>
            <div className={style.parag} onClick={handelDetail}>{room1.company}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room1.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room1.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room1.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room1.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room1