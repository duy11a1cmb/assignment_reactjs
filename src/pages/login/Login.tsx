import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";
import {userServices} from "../../services/authServices";
import {setDetailUser} from "../../redux/slices/userSlices";
import ShowToast from "../../components/toast/ShowToast";
import {useAuth} from "../../hooks/useAuth";
import {AUTHENTICATE} from "../../constants/appConstants";


const Login = () => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [loginFrom, setLoginFrom] = useState({
        email: "",
        password: "",
    });
    const [show, setShow] = useState(false);
    const [detailToast, setDetailToast] = useState({status: '', message: '', bg: ''})
    const onChangeEmail = (data: any) => {
        setLoginFrom({...loginFrom, email: data.target.value});
    };
    const onChangePassWord = (data: any) => {
        setLoginFrom({...loginFrom, password: data.target.value});
    };
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            userServices.login(loginFrom.email, loginFrom.password)?.then(
                (res) => {
                    if (res) {
                        event.preventDefault();
                        event.stopPropagation();
                        dispatch(setDetailUser(res));
                        window.localStorage.setItem(AUTHENTICATE, JSON.stringify(res));
                        navigate('/home', {replace: true})
                        setDetailToast({...detailToast, status: 'Success', message: 'Login success!', bg: 'success'})
                        setShow(true)
                    }
                },
                () => {
                    event.preventDefault();
                    event.stopPropagation();
                    setDetailToast({...detailToast, status: 'Error', message: 'Login failed!', bg: 'danger'})
                    setShow(true)
                }
            );
        }
        setValidated(true);
    };

    return (
        <div className="container-login">
            <Card style={{width: "18rem"}}>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <h3>Email address</h3>
                            </Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                value={loginFrom.email}
                                onChange={onChangeEmail}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>
                                <h3>Password</h3>
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                value={loginFrom.password}
                                onChange={onChangePassWord}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="w-100 d-flex justify-content-center">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <ShowToast show={show} setShow={setShow} message={detailToast.message}
                       status={detailToast.status} bg={detailToast.bg}></ShowToast>
        </div>
    );
};
export default Login;
