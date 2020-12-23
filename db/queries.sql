USE pokemondb;

SELECT
	pokemon.id,
    pokemon.poke_name,
    pokemon_types.type_name
FROM
	pokemon
LEFT JOIN
	pokemon_types
ON
	pokemon.type_one = pokemon_types.id
;

SELECT 
	pokemon.id,
    pokemon.poke_name,
    -- types_one is really table pokemon_types. I have set up an aliase further down.
    -- the keyword AS makes it possible to change the column name. Instead of saying types_one it will say primary_type
    types_one.type_name AS primary_type,
	-- types_two is really table pokemon_types. I have set up an aliase further down.
    -- the keyword AS makes it possible to change the column name. Instead of sayingtypes_two it will say secondary_type
   types_two.type_name AS secondary_type
FROM 
	pokemon
-- here is where I set up an aliase for table pokemon_types. I need this so I can join to the same table twice.
LEFT JOIN pokemon_types AS types_one ON 
	pokemon.type_one = types_one.id
LEFT JOIN pokemon_types AS types_two ON 
	pokemon.type_two =types_two.id;
    
SELECT * FROM pokemon;
SELECT * FROM pokemon_types;

-- Resources
-- How to do a LEFT JOIN: https://www.mysqltutorial.org/mysql-left-join.aspx
-- Joining to the same table twice: https://stackoverflow.com/questions/199953/how-do-you-join-on-the-same-table-twice-in-mysql
