import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const students = JSON.parse(localStorage.getItem("students"));

    const logout = () => {
        localStorage.removeItem("students");
        navigate("/");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container">
                    <Link className="navbar-brand" to="/">Students</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            
                            
                            {students && (
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                        Students Menu
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/add">Register</Link></li>
                                        <li><Link className="dropdown-item" to="/view">Update</Link></li>
                                        <li><Link className="dropdown-item" to="/view">Delete</Link></li>
                                        <li><Link className="dropdown-item" to="/view">View</Link></li>
                                    </ul>
                                </li>
                            )}

                            {!students && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">

                {students ? (
                    <>
                        <h3>Welcome {students.email}</h3>
                        <button className="btn btn-danger" onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <h3>Please login to access student records.</h3>
                )}
            </div>
        </div>
    );
}

export default Dashboard;