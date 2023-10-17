import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { redirect, Navigate } from "react-router-dom";
import { userServices } from "../../services/authServices";
import { ROUTE_PATH } from "../../constants/appConstants";
import { setDetailUser } from "../../redux/slices/userSlices";

const Login = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [loginFrom, setLoginFrom] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = (data: any) => {
    setLoginFrom({ ...loginFrom, email: data.target.value });
  };
  const onChangePassWord = (data: any) => {
    setLoginFrom({ ...loginFrom, password: data.target.value });
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      userServices.login(loginFrom.email, loginFrom.password)?.then(
        (res) => {
          if (res) {
            dispatch(setDetailUser(res));
            Navigate({ to: "/", replace: true });

            // redirect("/" + ROUTE_PATH.home);
          }
        },
        () => {
          console.log("error");
        }
      );
    }

    setValidated(true);
  };
  return (
    <div className="container-login">
      <Card style={{ width: "18rem" }}>
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
    </div>
  );
};
export default Login;
