import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(`http://localhost:3125/students?email=${email}&password=${password}`);

            if(response.data.length > 0){
                alert("Login Successful");

                localStorage.setItem(
                    "students",
                    JSON.stringify(response.data[0])
                );

                navigate("/");
            }else{
                alert("Invaild Email or Password");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <h2>Login Form</h2>

            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <br/>

                <input className="form-control" type="email" value={email} onChange={ (e) => setEmail(e.target.value)} placeholder="Enter Email" required/>
                <br/>

                <label>Password:</label>
                <br/>

                <input className="form-control" type="password" value={password} onChange={ (e) => setPassword(e.target.value)} placeholder="Enter Password" required/>
                <br/>

                <button type="submit" className="btn btn-outline-warning me-2">Login</button>
                <button type="reset" className="btn btn-secondary">Clear</button>
                <p>New user <Link to="/add">Register</Link></p>

            </form>
        </div>
    )
}

export default Login