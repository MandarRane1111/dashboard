import axios from "axios";
import { useState } from "react";

function Add(){

    const API = "http://localhost:3125/students";


        const [student, setStudent] = useState({
            id: "",
            name: "",
            email: "",
            age: "",
            course: "",
            password: ""
        });

        const handleChange = (e) => {
            setStudent({ ...student, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            await axios.post(API, student);
            alert("Student Registered Successfully");
            setStudent({ id: "", name: "", email: "", age: "", course: "", password: "" });
        };


    return(
        <div>
            <h3>Register Student</h3>
            <form onSubmit={handleSubmit} >
                <input name="id" placeholder="Enter Your ID" value={student.id} onChange={handleChange} className="form-control mt-3"/>
                <input name="name" placeholder="Enter Your Name" value={student.name} onChange={handleChange} className="form-control mt-3"/>
                <input name="email" placeholder="Enter Your E-mail" value={student.email} onChange={handleChange} className="form-control mt-3"/>
                <input name="age" placeholder="Enter Your Age" value={student.age} onChange={handleChange} className="form-control mt-3"/>
                <input name="course" placeholder="Enter Your Course Name" value={student.course} onChange={handleChange} className="form-control mt-3"/>
                <input type="password" name="password" placeholder="Enter Password" value={student.password} onChange={handleChange} className="form-control mt-3"/>
                <button className="btn btn-outline-warning mt-3">Add Student</button>
                <button type="reset" className="btn btn-secondary mt-3">Clear</button>
            </form>
        </div>
    )
}

export default Add