import React from "react";
import { Button, Form } from "react-bootstrap";
import Ronaldo from "./r7.jpg";
import "./loginpage.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Login(): JSX.Element {
    firebase.initializeApp({
        apiKey: "AIzaSyDuuO3Qvj_guTliM6iPgV3_5dF0OWOLi-0",
        authDomain: "proj-15d75.firebaseapp.com",
        projectId: "proj-15d75",
        storageBucket: "proj-15d75.appspot.com",
        messagingSenderId: "1096734466692",
        appId: "1:1096734466692:web:c7cbf5f3fd67c3bf7c58d1",
        measurementId: "G-WWLTRVX79F"
    });
    const authenticate = firebase.auth();
    const authenticationService = new firebase.auth.GoogleAuthProvider();

    const signInBox = () => {
        authenticate.signInWithPopup(authenticationService);
    };
    return (
        <div className="login">
            <div className="login">
                <img src={Ronaldo} />
            </div>
            <div className="login-info">
                <h2 className="header">Welcome to Ekin</h2>
                <div className="forms">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className="forms"
                            type="email"
                            placeholder="Email or Username"
                        />
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </div>
                <div className="middle-buttons">
                    <div>
                        <Button className="button">LOGIN NOW</Button>
                    </div>
                    <h6>Forgot your password?</h6>
                    <div>
                        <Button onClick={signInBox}>Sign in with Google</Button>
                    </div>
                </div>
                <div className="last-buttons">
                    <Button>Make account</Button>
                    <Button>Log in as Admin</Button>
                </div>
            </div>
            {/* <section>{user ? console.log("is in") : console.log("no")}</section> */}
        </div>
    );
}

export default Login;
