* SQL Rules:
    * -- SingleLineComment
    * /* MultiLineComment */
    * Not Case-Sensitive
    * Semicolon (;) is seperator.
    * Non-Numeric in single (') quote (or double ("))
    * Community Standart:
        * SQL Commands: UPPER (SELECT * FROM table)
        * New line for per main-commands (SELECT, FROM, JOIN ..vs)

DQL:
- SELECT * FROM table
- SELECT column AS new FROM table
- SELECT t.coulmn FROM table AS t
- SELECT DISTINCT
- WHERE =, !=, <>, >, >=, <, <=
- WHERE AND / OR / NOT
- WHERE BETWEEN AND
- WHERE NOT / NOT IN
- WHERE LIKE '_%'
- ORDER BY ASC / DESC
- LIMIT

JOINS:
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN
- CROSS JOIN

SUBQUERIES:
- SELECT (SELECT)

FUNCTIONS:
- SELECT COUNT()
- SELECT SUM()
- SELECT AVG()
- SELECT ROUND()
- SELECT MIN()
- SELECT MAX()
- SELECT LENGTH()
- SELECT LEFT()
- SELECT RIGHT()

GROUPING:
- GROUP BY

DML:
- INSERT INTO table(c1, c2) VALUES (v1, v2), (v1, v2);
- UPDATE table SET c1=v1, c2=v2 WHERE ..;
- DELETE FROM table WHERE ..;
