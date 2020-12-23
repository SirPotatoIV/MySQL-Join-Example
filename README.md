# MySQL_Join_Example

## Purpose

The purpose of this repository is to demo how to perform a LEFT JOIN utilizing the `node` and the node module `mysql`.

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
6. Run the application by executing the command `node index.js`

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
