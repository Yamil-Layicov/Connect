import React from 'react'
import style from './Lift1.module.css'

const Lift1 = () => {
  return (
    <> 
        <div className={style.lift1}>
            <div className={style.lift1Up}>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.boxLift}>
                    <p>Lift</p>
                </div>
            </div>
            <div className={style.lift1Down}>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                    <div className={style.box1}></div>
            </div>
        </div>
    </>
  )
}

export default Lift1