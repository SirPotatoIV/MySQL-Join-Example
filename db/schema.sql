DROP DATABASE IF EXISTS pokemonDB
CREATE DATABASE pokemonDB;

USE pokemonDB;

CREATE TABLE pokemon (
  id INT NOT NULL PRIMARY KEY,
  poke_name VARCHAR(100) NOT NULL,
  type_one INT NOT NULL,
  type_two INT NULL
);

CREATE types (
  id INT NOT NULL PRIMARY KEY,
  type_name 
)

SELECT * FROM pokemon;