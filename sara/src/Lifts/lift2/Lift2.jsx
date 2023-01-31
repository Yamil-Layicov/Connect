import React from 'react'
import style from './Lift2.module.css'

const Lift2 = () => {
  return (
    <>
      <div className={style.lift2}>
        <div className={style.left}>    
            <div className={style.box}><p>Lift</p></div>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
        </div>
        <div className={style.right}>
            <div className={style.box}></div>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
            <div className={style.box1}></div>
        </div>
      </div>
    </>
  )
}

export default Lift2