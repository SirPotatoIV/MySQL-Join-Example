let mysql = require("mysql");
let { connection } = require("./db/connection");
let inquirer = require("inquirer");

// Starts connection to mysql server.
// -- Connection was imported from ./db/connection
// -- You only want one connection running, do not start a connection multiple times.
connection.connect(function (err) {
  // handle outcome where an error occurs.
  if (err) throw err;
  console.log("\n Welcome to PokeView! \n");
  // call the function runPokeView once the connection begins.
  // -- runPokeView starts my questions to the user using inquirer
  runPokeView();
});

function runPokeView() {
  inquirer
    .prompt({
      name: "test",
      type: "rawlist",
      message: "Welcome to the Pokemon Database!",
      choices: [
        "View types table",
        "View pokemon table",
        "View pokemon and primary type (basic join)",
        "View pokemon and both primary and secondary type (double join)",
        "exit",
      ],
    })
    .then(function (answer) {
      switch (answer.test) {
        case "View types table":
          viewTypesTable();
          break;
        case "View pokemon table":
          viewPokemonTable();
          break;
        case "View pokemon and primary type (basic join)":
          viewPokemonPrimaryType();
          break;
        case "View pokemon and both primary and secondary type (double join)":
          viewPokemonPrimarySecondaryType();
          break;
        case "exit":
          // ends connection to mysql server.
          connection.end();
          // notifying user what is happening.
          console.log("You exited the PokeView. Have a great day!");
          // node.js method to exit a node app. This will end your app.
          process.exit();
        default:
          // it is basically impossible for this case to happen, but I put it here for best practice.
          console.log("Your choice does not match any options");
          runPokeView();
          break;
      }
    });
}

function viewTypesTable() {
  // You could put the query inside the connection.query() call, but it makes it a little cleaner this way.
  let query = "SELECT * FROM pokemon_types";
  connection.query(query, function (err, res) {
    // handle outcome where an error has occurred.
    if (err) throw err;
    // makes a new line so console output is cleaner
    console.log("");
    res.forEach((element) => {
      console.log(`Type ID: ${element.id} Name: ${element.type_name}`);
    });
    console.log("");
    runPokeView();
  });
}

function viewPokemonTable() {
  // You could put the query inside the connection.query() call, but it makes it a little cleaner this way.
  let query = "SELECT * FROM pokemon";
  connection.query(query, function (err, res) {
    // handle outcome where an error has occurred.
    if (err) throw err;
    // makes a new line so console output is cleaner
    console.log("");
    res.forEach((element) => {
      console.log(
        `Pokedex #: ${element.id} Name: ${element.poke_name} Type 1: ${element.type_one} Type 2: ${element.type_two}`
      );
    });
    console.log("");
    runPokeView();
  });
}

function viewPokemonPrimaryType() {
  console.log("Pokemon with primary type listed");
  runPokeView();
}

function viewPokemonPrimarySecondaryType() {
  let query =
    "SELECT pokemon.id, pokemon.poke_name, type_1.type_name AS primary_type, type_2.type_name AS secondary_type FROM pokemon LEFT JOIN pokemon_types AS type_1 ON  pokemon.type_one = type_1.id LEFT JOIN pokemon_types AS type_2 ON pokemon.type_two = type_2.id;";
  connection.query(query, function (err, res) {
    // handle outcome where an error has occurred.
    if (err) throw err;
    // makes a new line so console output is cleaner
    console.log("");
    res.forEach((element) => {
      console.log(
        `Pokedex #: ${element.id} Name: ${element.poke_name} Type 1: ${element.primary_type} Type 2: ${element.secondary_type}`
      );
    });
    console.log("");
    runPokeView();
  });
  runPokeView();
}
