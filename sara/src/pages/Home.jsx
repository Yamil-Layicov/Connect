import React from "react";
import con from "./images/connect.png";
import { useEffect, useState } from "react";
import flo1 from "./images/floor1.JPG";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container ">
        <div className="row homeMain">
          <div className="col-lg-6 box-1">
            <img src={con} alt="" />
          </div>
          <div className="col-lg-6 box-2">
            <div className="floors">
              <div className="row">
                <div className="col-lg-6 floor-1">
                  <img src={flo1} alt="" />
                  <div className="layout"></div>
                  <p className="floorText">Mərtəbə-1</p>
                  <Link to="/mərtəbə1">
                    <button
                      className="btn btn-primary floorBtn"
                    >
                      Tam Ekran
                    </button>
                  </Link>
                </div>
                <div className="col-lg-6 floor-2">
                  <img src={flo1} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 floor-3">
                  <img src={flo1} alt="" />
                </div>
                <div className="col-lg-6 floor-4">
                  <img src={flo1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>  
        <Link to='/login'><div className='daxilOl' >Daxil Ol</div></Link>
      </div>
    </>       
  );
};

export default Home;
