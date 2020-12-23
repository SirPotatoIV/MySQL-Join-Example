// Connection was created in ./db/connection and is being imported into this file.
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
  // -- runPokeView starts my questions to the user using inquirer.
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
  // you could put the query inside the connection.query() call, but it makes it a little cleaner this way.
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
  // you could put the query inside the connection.query() call, but it makes it a little cleaner this way.
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
  let query =
    "SELECT pokemon.id, pokemon.poke_name, pokemon_types.type_name FROM pokemon LEFT JOIN pokemon_types ON  pokemon.type_one = pokemon_types.id;";
  connection.query(query, function (err, res) {
    // handle outcome where an error has occurred.
    if (err) throw err;
    // makes a new line so console output is cleaner
    console.log("");
    res.forEach((element) => {
      console.log(
        `Pokedex #: ${element.id} Name: ${element.poke_name} Type: ${element.type_name}`
      );
    });
    console.log("");
    runPokeView();
  });
}

// This one is a little funkier because I am left joining the same table twice.
// -- A pokemon can have two types, so to view both types, I have to join the pokemon_types table to the pokmeon table twice.
// -- To do this you have to create aliases (another name) for the table you are joining to twice, in this case pokemon_types. The aliases are types_one and types_two.
function viewPokemonPrimarySecondaryType() {
  let query =
    "SELECT pokemon.id, pokemon.poke_name, types_one.type_name AS primary_type, types_two.type_name AS secondary_type FROM pokemon LEFT JOIN pokemon_types AS types_one ON  pokemon.type_one = types_one.id LEFT JOIN pokemon_types AS types_two ON pokemon.type_two = types_two.id;";
  connection.query(query, function (err, res) {
    // handle outcome where an error has occurred.
    if (err) throw err;
    // makes a new line so console output is cleaner
    console.log("");
    res.forEach((element) => {
      console.log(
        `Pokedex #: ${element.id} Name: ${element.poke_name} Primary Type: ${element.primary_type} Secondary Type: ${element.secondary_type}`
      );
    });
    console.log("");
    runPokeView();
  });
}
