//require nmp package mysql
var mysql = require("mysql");
//require nmp package inquirer
var inquirer = require("inquirer");

//set connection to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw (err);
    console.log(err);
    displayProduct();
});
//function displaying products in the store
function displayProduct(){
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
        console.log("Welcome to the Rick and Morty virtual Bamazon storefront!")
    })
}
