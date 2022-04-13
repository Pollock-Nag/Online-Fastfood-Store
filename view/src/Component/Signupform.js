//rafec

import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import "../Component/form.css";
const Swal = require('sweetalert2');


const Signupform = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');


    /* validation */
    function validation() {

        var is_valid_name = nameValidation();

        var is_valid_email = emailValidation();

        var is_valid_password = passwordValidation();

        if (!is_valid_password) {
            // alert("password Mismatch");
            Swal.fire({
                icon: 'error',
                text: 'Password Mismatch!',
            }).then(function () { });

        }
        else if (is_valid_email && is_valid_name && is_valid_password) {
            isAlreadyExist();

            //window.location.href = 'http://localhost:3000'
        }
        else {
            //alert("Invalid Name Or Email")
            //window.location.href = 'http://localhost:3000';
            Swal.fire({
                icon: 'error',
                text: 'Invalid Name Or Email',
            }).then(function () { window.location.href = 'http://localhost:3000'; });


        }


    }

    function emailValidation() {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        var isValid = false;
        if (pattern.test(email)) {
            isValid = true;
        }
        else {
            isValid = false;
        }

        return isValid;

    }

    function nameValidation() {
        var isValid = true;
        if (name === "") {
            isValid = false;
        }
        return isValid;
    }

    function passwordValidation() {
        var isValid = false;
        if (password === confirmPassword) {
            isValid = true;
        }
        return isValid;
    }
    /* validation */

    function isAlreadyExist() {
        Axios.post('http://localhost:3001/api/alreadyExist', { name: name, email: email, password: password }).then((response) => {
            //console.log(response.data.length);
            var length = response.data.length;
            if (length === 0) {
                submitInfo()
            }
            else {
                // alert("Email already exist");
                Swal.fire({
                    icon: 'error',
                    text: 'Email Already Exist!',
                }).then(function () { });
            }

        });

    }

    function submitInfo() {
        Axios.post('http://localhost:3001/api/insert', { name: name, email: email, password: password }).then(
            Swal.fire({
                icon: 'success',
                text: 'Sign Up Successful!',
            }).then(function () { window.location = "http://localhost:3000/"; })

        );
    }



    return (
        <div>

            <br /><br />
            <h3>Sign Up</h3>


            <div className="form">
                <div className="nameContainer"><input type="text" name="name" placeholder="name" className="name" onChange={(e) => { setName(e.target.value) }} />
                </div>

                <div className="emailContainer"><input type="email" name="email" placeholder="email" className="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="passwordContainer"><input type="password" name="password" placeholder="password" className="password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="passwordContainer">
                    <input type="password" name="password" placeholder="Confirm Password" className="password" onChange={(e) => {
                        setconfirmPassword(e.target.value);
                    }} />
                </div>

                <div className="buttonContainer">
                    <Button variant="outline-primary" size="sm" onClick={validation}>Signup</Button>
                </div>

            </div>
        </div>
    )
}

export default Signupform
