const fastfoodStore = require('../models/fastfoodStore');
const db = require('../util/database');

exports.alreadyExistUsers = (req, res) => {

    const email = req.body.email;

    //SQL Inject
    const isalreadyExistSQL = fastfoodStore.alreadyExist(email);


    db.query(isalreadyExistSQL, [email], (err, result) => {
        res.send(result);
        //console.log(result);
    });

};

exports.insertUsers = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    //SQL Inject
    const insertUsersSQL = fastfoodStore.insert(name, email, password);

    db.query(insertUsersSQL, [name, email, password], (err, result) => {
        // console.log(res)
    });


};


exports.signinUsers = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;

    //SQL Inject
    const signinSQL = fastfoodStore.signin(name, email, pass);


    db.query(signinSQL, [name, email, pass], (err, result) => {
        //console.log(result);
        res.send(result);
    });


};