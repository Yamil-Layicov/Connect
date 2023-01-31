import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room12.module.css'

const Room12 = () => {

    const[room12,setroom12] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/14")
    .then(res => res.json())
    .then(res2 => setroom12(res2))
   },[])

  return (
    <>
      <div className={style.room12Content}>
        <div className={style.room12Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room12.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room12.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room12.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room12.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room12.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room12