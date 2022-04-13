const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const fastfoodstoreUsersRoute = require('./routes/users');
const fastfoodstoreProductsRoute = require('./routes/products');


const app = express();
//const mysql = require('mysql');

/*  DataBase Setup */
/*const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "login_system"
});*/


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', fastfoodstoreUsersRoute);
app.use('/', fastfoodstoreProductsRoute);



/* Routing EXPRESS */
/*app.post('/api/alreadyExist', (req, res) => {

    const email = req.body.email;

    const sqlGet = "SELECT * FROM users WHERE (email) = (?)";
    db.query(sqlGet, [email], (err, result) => {
        res.send(result);
        //console.log(result);

    });

})*/

/*app.post('/api/insert', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO users (name, email, password) VALUES (?,?,?)";


    db.query(sqlInsert, [name, email, password], (err, result) => {
        // console.log(res)
    });


})*/

/*app.post('/api/signin', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;

    const sqlGet = "SELECT * FROM users WHERE (name,email,password) = (?,?,?)";

    db.query(sqlGet, [name, email, pass], (err, result) => {
        res.send(result);

    });
})*/


//product
/*app.post('/api/isproductalreadyexist', (req, res) => {

    const name = req.body.name;
    const sqlGet = "SELECT * FROM product WHERE (name) = (?)";
    db.query(sqlGet, [name], (err, result) => {
        res.send(result);
        // console.log(result);

    });

})*/

/*app.post('/api/insertproduct', (req, res) => {

    const name = req.body.name;
    const details = req.body.details;
    const count = req.body.count;
    const offer = req.body.offer;
    const image = req.body.image;
    const price = req.body.price;




    const sqlInsert = "INSERT INTO product (name, 	details, count,offer,image,price) VALUES (?,?,?,?,?,?)";


    db.query(sqlInsert, [name, details, count, offer, image, price], (err, result) => {
        // console.log(res)
    });


})*/

/*app.post('/api/showall', (req, res) => {
    const sqlShowAll = "select * from product";
    db.query(sqlShowAll, (err, result) => {
        res.send(result);
        //console.log(result);
    })


})*/

/*app.post('/api/updateproduct', (req, res) => {

    const name = req.body.name;
    const details = req.body.details;
    const count = req.body.count;
    const offer = req.body.offer;
    const image = req.body.image;
    const price = req.body.price;
    console.log(name);


    const sqlUpdate = "UPDATE product SET name = ?,details = ?, count=?, offer=?, price=? WHERE name = ? ";


    db.query(sqlUpdate, [name, details, count, offer, price, name], (err, result) => {
        //console.log(err)
    });


})*/

/*app.post('/api/removeproduct', (req, res) => {

    const name = req.body.name;

    // console.log(name);


    const sqlUpdate = "DELETE From product WHERE name = ? ";


    db.query(sqlUpdate, [name], (err, result) => {
        // console.log(err)
    });


})*/



app.listen(3001, () => {
    console.log("running on port 3001");
})