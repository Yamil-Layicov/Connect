import React from 'react'
import style from './ManyRooms.module.css'

const ManyRooms = () => {
  return (
    <>
        <div className={style.manyRooms}>
          <div className={style.manyRoomsContent}>
          <div className={style.sectionThree}>
              sectionThree
          </div>
            <div className={style.sectionTwo}>
               sectionTwo
            </div>
            <div className={style.sectionOne}>
                <div className={style.boxRight}></div>
                <div className={style.boxRight}></div>
                <div className={style.boxRight}></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ManyRooms