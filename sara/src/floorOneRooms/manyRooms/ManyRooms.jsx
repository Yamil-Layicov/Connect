import React from "react";
import Room6 from "../otaq6/Otaq6";
import Room10 from "../room10/Room10";
import Room11 from "../room11/Room11";
import Room12 from "../room12/Room12";
import Room18 from "../room18/Room18";
import Room19 from "../room19/Room19";
import Room20 from "../room20/Room20";
import Room21 from "../room21/Room21";
import Room22 from "../room22/Room22";
import Room23 from "../room23/Romm23";
import Room24 from "../room24/Room24";
import Room3 from "../room3/Room3";
import Room4 from "../Room4/Room4";
import Room5 from "../room5/Room5";
import Room7 from "../room7/Room7";
import Room8 from "../room8/Room8";
import Room9 from "../room9/Room9";
import style from "./ManyRooms.module.css";

const ManyRooms = () => {
  return (
    <>
      <div className={style.manyRooms}>
        <div className={style.manyRoomsContent}>
          <div className={style.sectionThree}>
            <div className={style.sectionThreeUp}>
              <div className={style.sectionThreeUpBox1}><Room24/></div>
              <div className={style.sectionThreeUpBox2}><Room23/></div>
              <div className={style.sectionThreeUpBox3}><Room22/></div>
              <div className={style.sectionThreeUpBox}><Room21/></div>
            </div>
            <div className={style.sectionThreeDown}>
              <div className={style.sectionThreeUpBox1}><Room3/></div>
              <div className={style.sectionThreeUpBox2}><Room4/></div>
              <div className={style.sectionThreeUpBox3}><Room5/></div>
              <div className={style.sectionThreeUpBox}><Room6/></div>
            </div>
          </div>
          <div className={style.sectionTwo}>
            <div className={style.sectionTwoUp}>
              <div className={style.sectionTwoUpBox1}><Room20/></div>
              <div className={style.sectionTwoUpBox2}><Room19/></div>
              <div className={style.sectionTwoUpBox3}><Room18/></div>
            </div>
            <div className={style.sectionTwoDown}>
              <div className={style.sectionTwoDownBox1}><Room7/></div>
              <div className={style.sectionTwoDownBox2}><Room8/></div>
              <div className={style.sectionTwoDownBox3}><Room9/></div>
            </div>
            <div className={style.sectionTwoDown}></div>
          </div>
          <div className={style.sectionOne}>
            <div className={style.boxRight1}><Room10/></div>
            <div className={style.boxRight2}><Room11/></div>
            <div className={style.boxRight3}><Room12/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManyRooms;
