-- DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INTEGER(4),
    stock_quantity INTEGER(2),
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Plumbus", "Housewares", 59, 4), ("Shleem", "Tools", 5, 79), ("Fleem", "Tools", 4, 343), ("Portal Gun", "Tools", 9999, 1), ("Mega Seeds", "Health Care", 78, 3), ("Meseeks Box", "Housewares", 9999, 1), ("Flurbo", "Tools", 15, 808), ("Shmekle", "Health Care", 33, 17), ("Kalaxian Crystals", "Tools", 30, 556), ("Gazorpagorfield", "Tools", 7880, 2), ("Hyperbaric Quantum Fluid", "Tools", 666, 45);

-- SELECT * FROM bamazon.products;
			


