import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RoomCreate = () => {
  const [roomNo, setRoomNo] = useState("");
  const [company, setCompany] = useState("");
  const [owner, setOwner] = useState("");
  const [sahe, setSahe] = useState('');
  const [roomType, setRoomType] = useState('');

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const roomData = { roomNo, company, owner, sahe, roomType };

    fetch("http://localhost:5000/Mertebe-1", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(roomData),
    })
      .then((res) => {
        alert("Elave olundu");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 style={{paddingLeft:"2%" }}>Yeni otaq elave et</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Otaq No:</label>
                      <input
                        value={roomNo}
                        onChange={(e) => setRoomNo(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Sirket adi</label>
                      <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Sahibkar</label>
                      <input
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Sahesi</label>
                      <input
                        value={sahe}
                        onChange={(e) => setSahe(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Otaq novu</label>
                      <input
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Elave et
                      </button>
                      <Link to="/admin" className="btn btn-secondary">
                        Esas sehife
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomCreate;
