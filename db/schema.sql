DROP DATABASE IF EXISTS pokemonDB
CREATE DATABASE pokemonDB;

USE pokemonDB;

CREATE TABLE pokemon (
  id INT NOT NULL PRIMARY KEY,
  poke_name VARCHAR(100) NOT NULL,
  type_one VARCHAR(50) NOT NULL,
  type_two VARCHAR(50) NULL
);

CREATE types (
  id INT NOT NULL PRIMARY KEY,
  type_name 
)

SELECT * FROM pokemon;