import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const RoomList = () => {
  const [floors, setFloors] = useState([]);
  const [layers, setLayers] = useState("Mertebe-1");

  const handleLayer = (e) => {
    setLayers(e);
  };

  const navigate = useNavigate();

  const editHandle = (id) => {
    navigate("/room/edit/" + id);
  };

  const removeHandle = (id) => {
    if (window.confirm("Silmek istedyine eminsen?")) {
      fetch(`http://localhost:5000/${layers}/` + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message); 
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/${layers}`)
      .then((res) => res.json())
      .then((res) => setFloors(res));
  }, [layers]);

  return (
    <>
      <div className="container">
        <div className="card cardContent">
          <div className="card-title">
            <div className="d-flex justify-content-start ">
              <h2 className="ps-3">Connect Mertbe-1</h2>
              <select
                className="ms-3"
                onChange={(e) => handleLayer(e.target.value)}
              >
                <option value={"Mertebe-1"}>Mertebe-1</option>
                <option value={"Mertebe-2"}>Mertebe-2</option>
                <option value={"Mertebe-3"}>Mertebe-3</option>
              </select>
            </div>
          </div>
          <div className="card-body">
            <div>
              <Link to="/room/create" className="btn btn-success">
                Elave et (+)
              </Link>
            </div>
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>Otaq No:</td>
                  <td>Müəssəsənin adı</td>
                  <td>Sahibkar</td>
                  <td>Sahəsi m<sup>2</sup></td>
                  <td>Məkan növü</td>
                  <td>Əlavələr</td>
                </tr>
              </thead>
              <tbody>
                {floors.map((item) => {
                  return (
                    <tr>
                      <td>{item.roomNo}</td>
                      <td>{item.company}</td>
                      <td>{item.owner}</td>
                      <td>{item.sahe}</td>
                      <td>{item.roomType}</td>
                      <td className="">
                        <a
                          onClick={() => editHandle(item.id)}
                          className="btn btn-success"
                        >
                          Redakte et
                        </a>
                        <a
                          onClick={() => removeHandle(item.id)}
                          className="btn btn-danger"
                        >
                          Sil
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomList;
