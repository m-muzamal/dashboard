import React, { useState } from "react";
import "./detailForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DetailForm = () => {
  const navigate = useNavigate();
  const [firsName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salray, setSalray] = useState("");
  const [date, setDate] = useState("");
  const [performance, setPerformance] = useState("");
  const [disc, setDisc] = useState("");

  const handlSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/data", {
        firstName: firsName,
        secondName: lastName,
        email: email,
        salray: salray,
        date: date,
        performance: performance,
        disc: disc,
      })
      .then((response) => {
        console.log(response.data);
        alert("Edit employe data successfully!");
        setFirsName("");
        setLastName("");
        setEmail("");
        setSalray("");
        setDate("");
        setDisc("");
        setPerformance("");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="containesr">
      <div className="detail">
        <div className="form">
          <h2>Employe detail.</h2>
          <div className="items">
            <div className="item">
              <label htmlFor="first-name">FirstName:</label>
              <input
                type="text"
                name="first-name"
                placeholder="Enter your first name"
                required
                onChange={(e) => {
                  setFirsName(e.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="last-name">LastName:</label>
              <input
                type="text"
                name="last-name"
                placeholder="Enetr your last name"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="Salray">Salray:</label>
              <input
                type="number"
                name="saray"
                placeholder="Salray"
                required
                onChange={(e) => {
                  setSalray(e.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="performance">Performance:</label>
              <input
                type="range"
                name="performance"
                placeholder="0%"
                required
                value={performance}
                onChange={(e) => {
                  setPerformance(e.target.value);
                }}
              />
              <p>{performance}</p>
            </div>
            <div className="item">
              <label htmlFor="dec">About:</label>
              <textarea
                type="textarea"
                name="performance"
                placeholder="Discription"
                required
                onChange={(e) => {
                  setDisc(e.target.value);
                }}
              />
            </div>
            <button className="btn btn_submit" onClick={handlSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailForm;
