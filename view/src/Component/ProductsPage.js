//rafec
import React from 'react'
import Cards from "../Component/Cards";
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Signin from '../Component/Signin';

const Swal = require('sweetalert2');


const ProductsPage = () => {

    const [productList, setProductList] = useState([]);

    function logout() {
        alert('All products from cart will be removed')
        //removing products from cart
        Axios.post('http://localhost:3001/api/removeCart').then((response) => {
            setProductList(response.data);
        })

        localStorage.clear();
        window.location.href = 'http://localhost:3000';
    }

    function showcards(element) {

        return (
            <Cards
                key={element.id}
                count={element.count}
                description={element.details}
                imgsrc={element.image}
                title={element.name}
                offer={element.offer}
                price={element.price}


            />
        );

    }

    function showAll() {
        Axios.post('http://localhost:3001/api/showall').then((response) => {
            setProductList(response.data);
        })
    }



    function showCart() {

        const productName = [];
        const productPrice = [];
        var total = 0;


        Axios.post('http://localhost:3001/api/showCart').then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                /*console.log(response.data[i].name + " " + response.data[i].price);*/

                productName[i] = response.data[i].name;
                productPrice[i] = response.data[i].price;
                total += parseInt(response.data[i].price);

            }

            var output_string = "You have Selected\n";

            for (var i = 0; i < productName.length; i++) {
                output_string += "1 " + productName[i] + " = " + productPrice[i] + " BDT " + "\n";
            }
            output_string += "\nTotal price is " + total + " BDT";


            //alert(output_string);
            Swal.fire(output_string);


        });


    }

    function removeCart() {

        Swal.fire({
            title: 'Are you sure?',
            text: "All product from cart will be removed",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                Axios.post('http://localhost:3001/api/removeCart').then((response) => {
                    setProductList(response.data);
                }).then(Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                ))

            }
        })



    }

    function makePayment() {
        let input = prompt("please enter your phone number without (+88) to confirm payment");
        const flag = confirmPayment(input);
        if (flag === 'ture') {
            //alert('Payment Syccessful');
            Swal.fire({
                icon: 'success',
                title: 'Payment Syccessful',
                showConfirmButton: false,
                timer: 2000
            })
        }
        else {
            //alert("Payment Failed (Maybe Wrong phone number)");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Payment Failed (Maybe Wrong phone number)',
                showConfirmButton: false,
                timer: 2000
            })
        }



    }
    function confirmPayment(input) {
        if (input == null) {
            return "false";
        }
        let flag = 'ture'
        if (input.charAt(0) == 0 && input.charAt(1) == 1 && input.length == 11) {
            //alert("payment Successful");
        } else {
            //alert("Payment Failed (Wrong phone number)");
            flag = 'false';
        }
        return flag;

    }


    return (
        <div>

            <div className="pageTitle">
                <h1>Welcome to home page</h1>

            </div>

            <div className="signout_button">
                <Button onClick={logout} variant="outline-danger" size="sm">Sign out</Button>


                <div className="show_cart_button">
                    <Button onClick={showCart} variant="outline-primary" size="sm">Show Cart</Button>

                </div>
                <div className="remove_cart_button">
                    <Button onClick={removeCart} variant="outline-primary" size="sm">Remove Cart</Button>

                </div>

                <div className="payment_button">
                    <Button onClick={makePayment} variant="outline-primary" size="sm">make pament</Button>

                </div>

            </div>


            <br></br><br></br><br></br>

            <div className="productContainer">
                {showAll()}


                <div className="row">
                    {productList.map(showcards)}

                </div>

            </div>

        </div >
    )
}

export default ProductsPage
