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
      choices: ["View types table", "View pokemon table", "exit"],
    })
    .then(function (answer) {
      switch (answer.test) {
        case "View types table":
          viewTypesTable();
          break;
        case "View pokemon table":
          viewPokemonTable();
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

function viewTypesTable() {
  // You could put the query inside the connection.query() call, but it makes it a little cleaner this way.
  let query = "SELECT * FROM types";
  connection.query(query, function (err, res) {
    // handle outcome where an error has occurred.
    if (err) throw err;
    res.forEach((element) => {
      console.log(`Type ID: ${element.id} Name: ${element.type_name}`);
    });
    runPokedex();
  });
}

function viewPokemonTable() {
  // You could put the query inside the connection.query() call, but it makes it a little cleaner this way.
  let query = "SELECT * FROM pokemon";
  connection.query(query, function (err, res) {
    // handle outcome where an error has occurred.
    if (err) throw err;
    res.forEach((element) => {
      console.log(
        `Pokedex #: ${element.id} Name: ${element.poke_name} Type 1: ${element.type_one} Type 2: ${element.type_two}`
      );
    });
    runPokedex();
  });
}
