    import React, { useEffect, useState } from "react";
    import "./editForm.css";
    import { useNavigate, useParams } from "react-router-dom";

    const DetailForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: "",
        secondName: "",
        email: "",
        salray: "",
        disc: "",
        performance: "",
        date: "",
    });
    
    useEffect(() => {
        fetch(`http://localhost:3001/api/data/${id}`)
        .then((res) => res.json())
        .then((res) => setData(res[0]))
        .catch((err) => console.log(err));
    }, [id]);

    const handlSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/api/data/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((res) => {
            if (res.status === 200) {
                alert("Edit employe data succefully!")
            navigate("/");
            } else {
            console.error("Failed to edit data");
            }
        })
        .catch((err) => {
            console.error("Error:", err);
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
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
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                    value={data.firstName}
                    onChange={handleInputChange}
                />
                </div>
                <div className="item">
                <label htmlFor="last-name">LastName:</label>
                <input
                    type="text"
                    name="secondName"
                    placeholder="Enetr your last name"
                    required
                    value={data.secondName}
                    onChange={handleInputChange}
                />
                </div>
                <div className="item">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={data.email}
                    onChange={handleInputChange}
                />
                </div>
                <div className="item">
                <label htmlFor="Salray">Salray:</label>
                <input
                    type="number"
                    name="salray"
                    placeholder="Salray"
                    required
                    value={data.salray}
                    onChange={handleInputChange}
                />
                </div>
                <div className="item">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    required
                    value={data.date}
                    onChange={handleInputChange}
                />
                </div>
                <div className="item">
                <label htmlFor="performance">Performance:</label>
                <input
                    type="number"
                    name="performance"
                    placeholder="0%"
                    required
                    value={data.performance}
                    onChange={handleInputChange}
                />
                </div>
                <div className="item">
                <label htmlFor="dec">About:</label>
                <textarea
                    type="textarea"
                    name="disc"
                    placeholder="Discription"
                    required
                    value={data.disc}
                    onChange={handleInputChange}
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
