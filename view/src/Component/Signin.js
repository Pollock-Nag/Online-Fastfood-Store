//rafec

import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import "../Component/form.css";

const Swal = require('sweetalert2');


function Signin() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validation() {

        submitInfo();
    }




    function submitInfo() {
        Axios.post('http://localhost:3001/api/signin',
            {
                name: name,
                email: email,
                password: password
            }
        ).then((response) => {
            var element_count = 0;
            element_count = (response.data.length);

            if (element_count === 1) {
                var email = response.data[0].email;

                if (email.includes("adminpanel")) {
                    //alert("Login Successful");

                    localStorage.setItem("isAuthenticated", "true");
                    Swal.fire({
                        icon: 'success',
                        text: 'Admin,Login Successful !'
                    }).then(function () { window.location = "http://localhost:3000/admin"; });


                }
                else {

                    // getuserid()


                    localStorage.setItem("isAuthenticated", "true");


                    Swal.fire({
                        icon: 'success',
                        text: 'Login Successful !',
                    }).then(function () { window.location = "http://localhost:3000/home" });

                }


            } else {

                Swal.fire({
                    icon: 'error',
                    text: 'Incorrect Information !',
                }).then(function () { });

            }

        });


    }



    return (
        <div>

            <br /><br />
            <h3>Sign In</h3>


            <div className="form">
                <div className="nameContainer"><input type="text" name="name" placeholder="name" className="name" onChange={(e) => { setName(e.target.value) }} />
                </div>

                <div className="emailContainer"><input type="email" name="email" placeholder="email" className="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="passwordContainer"><input type="password" name="password" placeholder="password" className="password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>



                <div className="buttonContainer">
                    <Button variant="outline-primary" size="sm" onClick={validation}>Signin</Button>
                </div>

            </div>
        </div>
    )

}

export default Signin;
