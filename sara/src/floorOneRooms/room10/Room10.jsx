import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room10.module.css'

const Room10 = () => {

    const[room10,setroom10] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/15")
    .then(res => res.json())
    .then(res2 => setroom10(res2))
   },[])

  return (
    <>
      <div className={style.room10Content}>
        <div className={style.room10Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room10.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room10.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room10.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room10.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room10.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room10