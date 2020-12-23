DROP DATABASE IF EXISTS pokemonDB;
CREATE DATABASE pokemonDB;

USE pokemonDB;

CREATE TABLE pokemon (
  id INT NOT NULL PRIMARY KEY,
  poke_name VARCHAR(100) NOT NULL,
  type_one INT NOT NULL,
  type_two INT NULL
);

CREATE TABLE types (
  id INT NOT NULL PRIMARY KEY,
  type_name VARCHAR(100)
);

SELECT * FROM pokemon;
SELECT * FROM types;