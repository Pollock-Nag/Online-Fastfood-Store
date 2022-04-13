const fastfoodStore = require('../models/fastfoodStore');
const db = require('../util/database');

exports.isproductalreadyexist = (req, res) => {

    const name = req.body.name;
    const isproductalreadyexist_sql = fastfoodStore.isproductalreadyexist(name);
    db.query(isproductalreadyexist_sql, [name], (err, result) => {
        res.send(result);
        // console.log(result);

    });

};

exports.insertProducts = (req, res) => {

    const name = req.body.name;
    const details = req.body.details;
    const count = req.body.count;
    const offer = req.body.offer;
    const image = req.body.image;
    const price = req.body.price;




    const sqlInsert = fastfoodStore.insertProducts(name, details, count, offer, image, price);


    db.query(sqlInsert, [name, details, count, offer, image, price], (err, result) => {
        // console.log(res)
    });

};


exports.showallProducts = (req, res) => {
    const sqlShowAll = fastfoodStore.showallProducts();
    db.query(sqlShowAll, (err, result) => {
        res.send(result);
        //console.log(result);
    });


};

exports.updateProducts = (req, res) => {

    const name = req.body.name;
    const details = req.body.details;
    const count = req.body.count;
    const offer = req.body.offer;
    const image = req.body.image;
    const price = req.body.price;
    console.log(name);


    const sqlUpdate = fastfoodStore.updateProducts(name, details, count, offer, image, price)


    db.query(sqlUpdate, [name, details, count, offer, price, name], (err, result) => {
        //console.log(err)
    });


};

exports.removeProducts = (req, res) => {

    const name = req.body.name;

    // console.log(name);


    const sqlRemove = fastfoodStore.removeProducts(name);


    db.query(sqlRemove, [name], (err, result) => {
        // console.log(err)
    });



};

exports.addToCart = (req, res) => {

    const name = req.body.name;
    const price = req.body.price;

    //console.log(name, price);



    const sqlInsert = fastfoodStore.addToCart(name, price);


    db.query(sqlInsert, [name, price], (err, result) => {
        var reply = " 1 " + name + " added";
        res.send(reply);
        // console.log(res)
    });


};


exports.showCart = (req, res) => {


    const sqlShowCart = fastfoodStore.showCart();


    db.query(sqlShowCart, (err, result) => {
        console.log(result.name);
        res.send(result);
    });


};

exports.removeCart = (req, res) => {



    // console.log(name);


    const sqlRemove = fastfoodStore.removeCart();
    //console.log("working");


    db.query(sqlRemove, (err, result) => {
        // console.log(err)
    });



};


