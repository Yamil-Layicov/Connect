import React from 'react'
import { useEffect,useState } from 'react'
import style from './Otaq6.module.css'


const Room6 = () => {

    const[room6,setroom6] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/2")
    .then(res => res.json())
    .then(res2 => setroom6(res2))
   },[])

  return (
    <>
      <div className={style.room6Content}>
        <div className={style.room6Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room6.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room6.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room6.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room6.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room6.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room6