import React, { useEffect, useState } from "react";
import "./employeDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import Graph from "./graph/Graph";

const EmployeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const handlClick = () => {
    navigate("/");
  };
  useEffect(() => {
    fetch(`http://localhost:3001/api/data/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <div className="box">
        {data && (
          <>
            <div className="person-data">
              <h1 className="name">
                {data.firstName} {data.secondName}
              </h1>
              <p className="email">{data.email}</p>
              <div className="graph">
                {/* <div className="pie" data-value="90">{data.performance}%</div> */}
                <Graph />
              </div>
              <span className="about">{data.disc}</span>
              <button className="btn back" onClick={handlClick}>
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeDetail;
