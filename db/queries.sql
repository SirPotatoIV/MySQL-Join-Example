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
    -- type_1 is really table pokemon_types. I have set up an aliase further down.
    -- the keyword AS makes it possible to change the column name. Instead of saying type_1 it will say primary_type
    type_1.type_name AS primary_type,
	-- type_2 is really table pokemon_types. I have set up an aliase further down.
    -- the keyword AS makes it possible to change the column name. Instead of saying type_2 it will say secondary_type
    type_2.type_name AS secondary_type
FROM 
	pokemon
-- here is where I set up an aliase for table pokemon_types. I need this so I can join to the same table twice.
LEFT JOIN pokemon_types AS type_1 ON 
	pokemon.type_one = type_1.id
LEFT JOIN pokemon_types AS type_2 ON 
	pokemon.type_two = type_2.id;
    
SELECT * FROM pokemon;
SELECT * FROM pokemon_types;

-- Resources
-- How to do a LEFT JOIN: https://www.mysqltutorial.org/mysql-left-join.aspx
-- Joining to the same table twice: https://stackoverflow.com/questions/199953/how-do-you-join-on-the-same-table-twice-in-mysql
