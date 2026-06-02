import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

function Delete(){

    const { id } = useParams();
    const navigate = useNavigate();

    const deleteStudent = async () => {
        await axios.delete(`http://localhost:3125/students/${id}`);
        alert("Student Deleted Successfully");
        navigate("/");
    }

    return(
        <div>
            <h2>Delete Student</h2>
            <p>Are you sure want to delete this student?</p>
            <button onClick={deleteStudent}>
                Delete
            </button>
        </div>
    )
}

export default Delete