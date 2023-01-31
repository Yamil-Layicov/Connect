import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room24.module.css'

const Room24 = () => {

    const[room24,setroom24] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/10")
    .then(res => res.json())
    .then(res2 => setroom24(res2))
   },[])

  return (
    <>
      <div className={style.room24Content}>
        <div className={style.room24Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room24.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room24.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room24.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room24.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room24.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room24