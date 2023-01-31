import React from 'react'
import style from './Lifft3.module.css'

const Lift3 = () => {
    return (
      <> 
          <div className={style.lift3}>
              <div className={style.lift3Up}>
                  <div className={style.box}></div>
                  <div className={style.box}></div>
                  <div className={style.box}></div>
                  <div className={style.box}></div>
                  <div className={style.boxLift}>
                      <p>Lift</p>
                  </div>
              </div>
              <div className={style.lift3Down}>
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
  
  export default Lift3