import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate, } from "react-router-dom"


function Update({selectedStudent, refresh}){

    const { id } = useParams();
    const navigate = useNavigate(); 

    const [student, setStudent] = useState({
        name: "",
        age: "",
        course: "",
        email: "",
        password: ""
    });

    useEffect(() => {
       loadStudent();
    }, []);

    const loadStudent = async () => {
        const response = await axios.get(`http://localhost:3125/students/${id}`);

        setStudent(response.data);
    }

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3125/students/${id}`, student);
        alert("Student Updated Successfully");
        navigate("/");
    };

    return(
        <div>
            <h3>Update Student</h3>
                <form className="frm">
                    <input name="name" value={student.name} onChange={handleChange} className="form-control mt-2"/>
                    <input name="email" value={student.email} onChange={handleChange} className="form-control mt-2"/>
                    <input name="age" value={student.age} onChange={handleChange} className="form-control mt-2"/>
                    <input name="course" value={student.course} onChange={handleChange} className="form-control mt-2"/>
                    <input type="password" name="password" value={student.password} onChange={handleChange} className="form-control mt-2" />
                    <button onClick={handleUpdate} className="btn btn-outline-warning mt-2">Update</button>
                    <button type="reset" className="btn btn-secondary mt-2 ms-2">Clear</button>
                </form>
        </div>
    )
}

export default Update