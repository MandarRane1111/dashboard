import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function View(){

    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const response = await axios.get("http://localhost:3125/students");
        setStudents(response.data);
    };

    return(
        <div>
            <h2>Student List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.course}</td>
                            <td>{student.email}</td>
                            <td>{student.password}</td>

                            <td >
                                <Link to={`/update/${student.id}`}>
                                    Edit
                                </Link>
                            </td>

                            <td>
                                <Link to={`/delete/${student.id}`}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default View