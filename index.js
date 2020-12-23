let mysql = require("mysql");
let { connection } = require("./db/connection");
let inquirer = require("inquirer");

// Starts connection to mysql server.
// -- Connection was imported from ./db/connection
// -- You only want one connection running, do not start a connection multiple times.
connection.connect(function (err) {
  // handle outcome where an error occurs.
  if (err) throw err;
  // call the function runPokedex once the connection begins.
  // -- runPokedex starts my questions to the user using inquirer
  runPokedex();
});

function runPokedex() {
  inquirer
    .prompt({
      name: "test",
      type: "rawlist",
      message: "Welcome to the Pokedex App!",
      choices: ["test 1", "test 2", "exit"],
    })
    .then(function (answer) {
      switch (answer.test) {
        case "test 1":
          console.log("You choose test 1");
          runPokedex();
          break;
        case "test 2":
          console.log("You chose Test 2");
          runPokedex();
          break;
        case "exit":
          // ends connection to mysql server.
          connection.end();
          // notifying user what is happening.
          console.log("You exited the Pokedex. Have a great day!");
          // node.js method to exit a node app. This will end your app.
          process.exit();
        default:
          // it is basically impossible for this case to happen, but I put it here for best practice.
          console.log("Your choice does not match any options");
          runPokedex();
          break;
      }
    });
}

function viewAllTypes() {
  let query = "SELECT * FROM pokemon";
  connection.query(query, function (err, res) {
    // handle outcome where an error has occurred.
    if (err) throw err;
  });
  console.log();
}
