import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
function Login()
{
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/home")
    }
    return (
        <>
            <Form style={{color: '#fff',margin: 'auto', height:'100vh', width:'50vh'}} centered>
                <h1>Login</h1><br></br>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Link to="/forgot" className="text-white lnk">Forgot Password?</Link> <br /> <br />
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Login
                </Button> <br /> <br />
                <p className="text-white lnk">
                    Don't Have An Account? {" "}
                    <Link to="/register" className="text-white lnk">
                        Register
                    </Link>
                </p>
    </Form>
        </>
    )
}

export default Login