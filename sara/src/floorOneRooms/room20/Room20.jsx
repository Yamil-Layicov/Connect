import React from 'react'
import { useEffect,useState } from 'react'
import style from './Room20.module.css'

const Room20 = () => {

    const[room20,setroom20] = useState('')
    const[roomDetail,setRoomDetail] = useState(false)

    const handelDetail = () => {
        setRoomDetail(true)
    }

   useEffect(() => {
    fetch("http://localhost:5000/Mertebe-1/20")
    .then(res => res.json())
    .then(res2 => setroom20(res2))
   },[])

  return (
    <>
      <div className={style.room20Content}>
        <div className={style.room20Into}>
            <div className={style.parag} onClick={handelDetail}>Otaq: {room20.roomNo}
            </div>       
        </div>
      </div>
      <div className={`${roomDetail ? style.allRoomIntoDetailActive : style.allRoomIntoDetail}`}>
               <div><span className={style.span}>Otaq No: </span>{room20.roomNo}</div>
               <div><span className={style.span}>Müəssəsənin adı</span> {room20.company}</div>
               <div><span className={style.span}>Sahəsi m<sup>2</sup> </span>{room20.sahe}</div>
               <div><span className={style.span}>Məkan növü </span>{room20.roomType}</div>
               <div className={style.closeRoom} onClick={() => setRoomDetail(false)}>Bağla</div>
      </div>
    </>
  )
}

export default Room20