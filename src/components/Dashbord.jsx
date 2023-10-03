import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/detailForm");
  };

  const handleEditClick = (id) => {
    navigate(`/editForm/${id}`);
  };

  const handleClick = (id) => {
    navigate(`/employeDetail/${id}`);
  };

  const handleDelClick = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmation) {
      fetch(`http://localhost:3001/api/data/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 200) {
            setData((prevData) =>
              prevData.filter((employee) => employee.idemploye !== id)
            );
          } else {
            console.error("Failed to delete data");
          }
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:3001/api/data")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <h1>Employe Data</h1>
          <button className="btn" onClick={handleAddClick}>
            Add Employe
          </button>
        </div>
        <div className="data">
          <table>
            <thead>
              <tr>
                <th>NO.</th>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Email</th>
                <th>Salery</th>
                <th>Date of joining</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((detail, idemploye) => (
                <tr key={idemploye}>
                  <td>{detail.idemploye}</td>
                  <td onClick={() => handleClick(detail.idemploye)}>{detail.firstName}</td>
                  <td>{detail.secondName}</td>
                  <td>{detail.email}</td>
                  <td>{detail.salray}</td>
                  <td>{detail.date}</td>
                  <td>
                    <AiFillEdit onClick={() => handleEditClick(detail.idemploye)}/>{" "}
                    <AiFillDelete
                      onClick={() => handleDelClick(detail.idemploye)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
