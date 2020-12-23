USE pokemonDB;

INSERT INTO pokemon 
  (poke_name, type_one, type_two) 
  VALUES
  ('Bulbasaur', 1, 5),
  ('Ivysaur', 1, 5),
  ('Venusaur', 1, 5),
  ('Charmander', 2, NULL),
  ('Charmeleon', 2, NULL),
  ('Charizard', 2, 4),
  ('Squirtle', 3, NULL),
  ('Wartortle', 3, NULL),
  ('Blastoise', 3, NULL);

INSERT INTO pokemon_types
  (type_name)
  VALUES
  ('Grass'),
  ('Fire'),
  ('Water'),
  ('Flying'),
  ('Poison');

