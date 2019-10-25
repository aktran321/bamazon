DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE productsTable (
  id INT AUTO_INCREMENT,
  product_name VARCHAR(200) NULL,
  department_name VARCHAR(200) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT,
 
  PRIMARY KEY (id)
);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Pro", "electronics", 1200, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Air", "electronics", 1000, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Google Home", "electronics", 50, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 4", "electronics", 300, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Xbox", "electronics", 100, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Stainless Steel Knife", "kitchen", 25, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Blender Pro", "kitchen", 45, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Maker", "kitchen", 35, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Rice Cooker", "kitchen", 27, 100);
INSERT INTO productsTable (product_name, department_name, price, stock_quantity)
VALUES ("Refrigerator", "kitchen", 326, 100);
SELECT * FROM productsTable;
