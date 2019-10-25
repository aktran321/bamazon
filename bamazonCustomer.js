var mysql = require("mysql");
var inquirer = require("inquirer");
//var keys = require('./keys');
//console.log("Checking for password");
//console.log(keys.password);
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password, will have to delete later
    password: "6olpui9Q!!",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    displayProducts();
  });

  function selectChoices(res){
    let choicesArr = [];
    for (let i = 0; i <res.length; i++) {
        choicesArr.push(res[i].id);
    }
    return choicesArr;
};
  function displayProducts(){
      var query = "SELECT id, product_name, price, stock_quantity FROM productsTable";
      connection.query(query, function(err, res){
          if (err) throw err;
          for (var i = 0; i < res.length; i++){
              console.log("ID: "+ res[i].id + "||" +"Name: "+ res[i].product_name+"||"+"Price: "+res[i].price+" ||Stock: "+ res[i].stock_quantity);
          }

        inquirer.prompt({
            message:"What is the ID of the product that you would like to buy?",
            type:"list",
            name:"item",
            choices:selectChoices(res)
        }).then(function(answer){
        //console.log("The function works!");
        if (err) throw err;
        //loop for a match of products
        for(var i = 0; i < res.length; i++){
            if(res[i].id == answer.item){
                let boughtItem = res[i];

                inquirer.prompt({
                    name:"quantity",
                    type:"input",
                    message:"How many "+answer.item + "'s would you like to buy?",
                    
                }).then(function(answer){
                    if(boughtItem.stock_quantity > parseInt(answer.quantity)){
                        let updateInventory = boughtItem.stock_quantity - parseInt(answer.quantity);
                        connection.query("UPDATE productsTable SET ? WHERE ?", [
                        {
                        stock_quantity: updateInventory
                        },
                        {
                        id:boughtItem.id
                        }
                        ],function(){
                            let cost = boughtItem.price*parseInt(answer.quantity);
                            console.log("Order Complete");
                            console.log("You purchased " + (parseInt(answer.quantity)) + " " + (boughtItem.product_name) + " at the price of $" + boughtItem.price + " each.");
                            console.log("Your total is: $" + cost.toFixed(2));
                            console.log("\nThank you!");

                            inquirer.prompt({
                                name:"continue",
                                type: "confirm",
                                message:"Continue shopping?"

                            }).then(function(answer){
                                if(answer.continue){
                                    displayProducts();
                                } else{
                                    connection.end();
                                }
                            })
                })
                    } else {
                        console.log("Out of stock!");
                        displayProducts();
                    }
                })
            }
        }

        })
          
      });

  }