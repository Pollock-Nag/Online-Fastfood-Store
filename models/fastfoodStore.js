
module.exports = class fastfoodStore {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    //USER
    static alreadyExist(email) {

        const user_alreadyExist = "SELECT * FROM users WHERE (email) = (?)";
        return user_alreadyExist;
    }

    static insert(name, email, password) {
        const insert_users = "INSERT INTO users (name, email, password) VALUES (?,?,?)";

        return insert_users;

    }

    static signin(name, email, pass) {

        const select = "SELECT * FROM users WHERE (name,email,password) = (?,?,?)";
        return select;

    }

    //products

    static isproductalreadyexist(name) {

        const is_product_alreadyexist = "SELECT * FROM product WHERE (name) = (?)";
        return is_product_alreadyexist;

    }

    static insertProducts(name, details, count, offer, image, price) {

        const insert_products = "INSERT INTO product (name, 	details, count,offer,image,price) VALUES (?,?,?,?,?,?)";
        return insert_products;

    }

    static showallProducts() {

        const selectAll = "select * from product";
        return selectAll;

    }

    static updateProducts(name, details, count, offer, image, price) {

        const update = "UPDATE product SET name = ?,details = ?, count=?, offer=?, price=? WHERE name = ? ";
        return update;

    }

    static removeProducts(name) {

        const remove = "DELETE From product WHERE name = ? ";
        return remove;

    }

    static addToCart(name, price) {

        const insert_products = "INSERT INTO cart (name,price) VALUES (?,?)";
        return insert_products;

    }

    static showCart() {

        const selectAll = "SELECT * From cart";
        return selectAll;

    }

    static removeCart() {
        const removeAll = "Delete From cart ";
        return removeAll;
    }






};