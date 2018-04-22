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
    //puts the items from the database into an array
    for (var i = 0; i < res.length; i++){
        console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity in Stock: " + res[i].stock_quantity)
    };
    //using inquirer to prompt the user for inputs
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Enter the ID of the item you wish to buy.",
            //validating that the user input is a valid ID
            validate: function(value){
                if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
                    return true;
                }else{
                    return false;
                }
            }
        },
        //quantity to be purchased
        {
            type: "input",
            name: "stock_quantity",
            message: "How many would you like?",
            //validating that the input is a number
            validate: function(value){
                if(isNaN(value)){
                    return false;
                }else{
                    return true;
                }
            }
        }

    ])
    })
}