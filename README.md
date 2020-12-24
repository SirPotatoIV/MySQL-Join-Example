# MySQL_Join_Example

## Purpose

The purpose of this repository is to demo how to perform a LEFT JOIN utilizing `Node.js` and the node module `mysql`.

## Table of Contents

- [MySQL_Join_Example](#mysql_join_example)
  - [Purpose](#purpose)
  - [Table of Contents](#table-of-contents)
  - [How to Run](#how-to-run)
  - [Sources](#sources)
  - [What to Watch For](#what-to-watch-for)
    - [LEFT JOIN](#left-join)

## How to Run

1. Make sure you have Node.js, npm, and a MySQL Sever installed
2. Clone/Download/Fork repository
3. Navigate to repository directory in a terminal
4. Once within the root directory, install the node modules with `npm i`
5. Update `./db/connection.js` with your appropriate settings
6. Make sure to execute the schema.sql and seed.sql files to create the database and seed it with data.
7. Run the application by executing the command `node index.js`

## Sources

- To create this code I reviewed the Two Tables activity, which can be found in `.12-MySQL/01-Activities/14-TwoTables`.
- I used the article about MySQL LEFT JOIN from MySQL Tutorial [link](https://www.mysqltutorial.org/mysql-left-join.aspx).
- To figure out how to LEFT JOIN a single table twice, I searched for "left join the same table twice" and found a helpful article on stack overflow [link](https://stackoverflow.com/questions/199953/how-do-you-join-on-the-same-table-twice-in-mysql).

## What to Watch For

There are a few differences in my file organization compared to the activity. I have created a `connection.js` file to separate out the connection configuration and the start of the connection. This is a common practice. I also have a `schema.sql`, `seed.sql`, and `queries.sql`. The `queries.sql` is not common or required. I found it useful to test my queries in MySQL Workbench before trying to execute them in my node application. This file contains all my queries in a format that works within MySQL Workbench. Also, notice that I have put all these files in a directory called `db` this is a common practice.

I have left many comments throughout the code to try and explain why or how I did something.

### LEFT JOIN

I found the best explaination I have seen for a query that executes a LEFT JOIN in the MySQL Tutorial article referenced above.

```<
SELECT
    select_list
FROM
    t1
LEFT JOIN t2 ON
    join_condition;

```

- `select_list` is all the colums you want to show.
- `t1` is the name of the table that will have things joined to it or the main table is how I think of it. All of the data from this table will be shown.
- `t2` is the name of the table you want to join to the main table. Only the data that matches from this table will be shown.
- `join_condition` is a conditional statement to show what parts of t2 need to match t1 for them to be shown.

Below is an example of a LEFT JOIN.

- `selected_list` is the columns id and poke_name for the pokemon table and the column type_name from the table pokemon_types.
- `t1` is a table called `pokemon`.
- `t2` is a table called `pokemon_types`.
- `join_condition` is when a pokemon's type_one matches a type's id, then include the data from pokemon_types.
  - i.e. There is a pokemon named charmander who's type_one is 2. There is a pokemon_type with id 2 and the type_name fire. The row that contains Charmander would show `id: 4, poke_name: "Charmander", type_name: "Fire"`.
- NOTE: To refer to a column in a table you use the syntax `table_name.column_name`.
  - Example: There is a table named pokemon and it has a column called poke_name. To refer to this column you would use `pokemon.poke_name`.

```<
SELECT
    pokemon.id,
    pokemon.poke_name,
    pokemon_types.type_name
FROM
    pokemon
LEFT JOIN poke_types ON
    pokemon.type_one = pokemon_types.id;

```

Because we specified that we want the columns id and poke_name from the pokemon table and type_name column from the pokemon_types table, we only see these columns displayed. The pokemon table rows are in their normal order and are all present. The type_name column from pokemon_types appears with the value that matches the pokemon in that row. The pokemon table is the main table or the left table and the pokemon_types is the right table.
