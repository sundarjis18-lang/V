/* -------------------------------------------------------------
   PRELOADED SQL LAB DATA (PROGRAMS 1 TO 10 FROM DBMS_COMPLETE.pdf)
   ------------------------------------------------------------- */
const PROGRAMS = [
  {
    "id": 1,
    "title": "Implement Data Manipulation and Data Definition Language",
    "aim": "To implement the queries for Data Manipulation and Data Definition Language.",
    "algorithm": [
      "Step 1: Create a table with required attributes and constraints.",
      "Step 2: Use DDL commands (CREATE, ALTER, RENAME, DROP, MODIFY).",
      "Step 3: Use DML commands (INSERT, SELECT, UPDATE, DELETE).",
      "Step 4: Add values to the table and execute the necessary operations.",
      "Step 5: Display the formatted result."
    ],
    "steps": [
      {
        "query": "CREATE TABLE student (name VARCHAR(20), Reg_No INT, Ph INT);",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO student VALUES ('Alex', 101, 1234560789), ('Alvin', 102, 7890123456), ('Sam', 103, 3456098712);",
        "output": "3 rows created."
      },
      {
        "query": "SELECT * FROM student;",
        "output": "NAME                     REG_NO         PH\n-------------------- ---------- ----------\nAlex                        101 1234560789\nAlvin                       102 7890123456\nSam                         103 3456098712\n\n3 rows selected."
      },
      {
        "query": "ALTER TABLE student ADD email VARCHAR(20);",
        "output": "Table altered."
      },
      {
        "query": "UPDATE student SET email = 'alex@mail.com' WHERE name = 'Alex';",
        "output": "1 row updated."
      },
      {
        "query": "ALTER TABLE student DROP COLUMN Ph;",
        "output": "Table altered."
      },
      {
        "query": "ALTER TABLE student RENAME COLUMN Reg_No TO regno;",
        "output": "Table altered."
      },
      {
        "query": "ALTER TABLE student MODIFY regno NUMBER(30);",
        "output": "Table altered."
      },
      {
        "query": "SELECT * FROM student;",
        "output": "NAME                     REGNO                          EMAIL\n-------------------- ---------- ------------------------------\nAlex                        101 alex@mail.com\nAlvin                       102\nSam                         103\n\n3 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE student (name VARCHAR(20), Reg_No INT, Ph INT);",
      "INSERT INTO student VALUES ('Alex', 101, 1234560789), ('Alvin', 102, 7890123456), ('Sam', 103, 3456098712);",
      "SELECT * FROM student;",
      "ALTER TABLE student ADD email VARCHAR(20);",
      "UPDATE student SET email = 'alex@mail.com' WHERE name = 'Alex';",
      "ALTER TABLE student DROP COLUMN Ph;",
      "ALTER TABLE student RENAME COLUMN Reg_No TO regno;",
      "ALTER TABLE student MODIFY regno NUMBER(30);",
      "SELECT * FROM student;"
    ]
  },
  {
    "id": 2,
    "title": "Implement Transaction Control Language",
    "aim": "To implement Transaction Control Language (TCL) commands.",
    "algorithm": [
      "Step 1: Create a table for student records.",
      "Step 2: Insert initial records into the table.",
      "Step 3: Use COMMIT to permanently save transaction states.",
      "Step 4: Insert another record.",
      "Step 5: Create a SAVEPOINT to mark a rollback checkpoint.",
      "Step 6: Insert another record after the checkpoint.",
      "Step 7: Use ROLLBACK TO savepoint to undo changes after the savepoint.",
      "Step 8: Use COMMIT again to finalize permanent records."
    ],
    "steps": [
      {
        "query": "CREATE TABLE stud (id INT, name VARCHAR(10));",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO stud VALUES (1, 'Alex'), (2, 'Alvin'), (3, 'Sam');",
        "output": "3 rows created."
      },
      {
        "query": "COMMIT;",
        "output": "Commit complete."
      },
      {
        "query": "INSERT INTO stud VALUES (4, 'Jenna');",
        "output": "1 row created."
      },
      {
        "query": "SAVEPOINT s1;",
        "output": "Savepoint created."
      },
      {
        "query": "INSERT INTO stud VALUES (5, 'Bob');",
        "output": "1 row created."
      },
      {
        "query": "ROLLBACK TO s1;",
        "output": "Rollback complete."
      },
      {
        "query": "COMMIT;",
        "output": "Commit complete."
      },
      {
        "query": "SELECT * FROM stud;",
        "output": "        ID NAME\n---------- ----------\n         1 Alex\n         2 Alvin\n         3 Sam\n         4 Jenna\n\n4 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE stud (id INT, name VARCHAR(10));",
      "INSERT INTO stud VALUES (1, 'Alex'), (2, 'Alvin'), (3, 'Sam');",
      "COMMIT;",
      "INSERT INTO stud VALUES (4, 'Jenna');",
      "SAVEPOINT s1;",
      "INSERT INTO stud VALUES (5, 'Bob');",
      "ROLLBACK TO s1;",
      "COMMIT;",
      "SELECT * FROM stud;"
    ]
  },
  {
    "id": 3,
    "title": "Perform Logical Operations & Operators in SQL Queries",
    "aim": "To perform logical operations and operators in SQL queries.",
    "algorithm": [
      "Step 1: Create a table with name, city, and percentage columns.",
      "Step 2: Perform logical operations (AND, OR, LIKE, NOT LIKE, BETWEEN, ALL and ANY).",
      "Step 3: Add values and execute the filtering queries.",
      "Step 4: Display the filtered dataset results."
    ],
    "steps": [
      {
        "query": "CREATE TABLE users (name VARCHAR(20), city VARCHAR(30), percentage INT);",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO users VALUES ('Alex', 'CBE', 80), ('Alvin', 'CHE', 70), ('Sam', 'PUD', 85), ('Jenna', 'KL', 90);",
        "output": "4 rows created."
      },
      {
        "query": "SELECT * FROM users WHERE city = 'CBE' AND percentage = 80;",
        "output": "NAME                 CITY                           PERCENTAGE\n-------------------- ------------------------------ ----------\nAlex                 CBE                                    80\n\n1 row selected."
      },
      {
        "query": "SELECT * FROM users WHERE city = 'KL' OR percentage = 80;",
        "output": "NAME                 CITY                           PERCENTAGE\n-------------------- ------------------------------ ----------\nAlex                 CBE                                    80\nJenna                KL                                     90\n\n2 rows selected."
      },
      {
        "query": "SELECT * FROM users WHERE city LIKE 'C%';",
        "output": "NAME                 CITY                           PERCENTAGE\n-------------------- ------------------------------ ----------\nAlex                 CBE                                    80\nAlvin                CHE                                    70\n\n2 rows selected."
      },
      {
        "query": "SELECT * FROM users WHERE city NOT LIKE 'C%';",
        "output": "NAME                 CITY                           PERCENTAGE\n-------------------- ------------------------------ ----------\nSam                  PUD                                    85\nJenna                KL                                     90\n\n2 rows selected."
      },
      {
        "query": "SELECT * FROM users WHERE percentage BETWEEN 80 AND 90;",
        "output": "NAME                 CITY                           PERCENTAGE\n-------------------- ------------------------------ ----------\nAlex                 CBE                                    80\nSam                  PUD                                    85\nJenna                KL                                     90\n\n3 rows selected."
      },
      {
        "query": "SELECT * FROM users WHERE name = ALL(SELECT name FROM users WHERE city = 'CBE');",
        "output": "NAME                 CITY                           PERCENTAGE\n-------------------- ------------------------------ ----------\nAlex                 CBE                                    80\n\n1 row selected."
      },
      {
        "query": "SELECT * FROM users WHERE name = ANY(SELECT name FROM users WHERE city = 'PUD');",
        "output": "NAME                 CITY                           PERCENTAGE\n-------------------- ------------------------------ ----------\nSam                  PUD                                    85\n\n1 row selected."
      },
      {
        "query": "SELECT * FROM users;",
        "output": "NAME                 CITY                           PERCENTAGE\n-------------------- ------------------------------ ----------\nAlex                 CBE                                    80\nAlvin                CHE                                    70\nSam                  PUD                                    85\nJenna                KL                                     90\n\n4 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE users (name VARCHAR(20), city VARCHAR(30), percentage INT);",
      "INSERT INTO users VALUES ('Alex', 'CBE', 80), ('Alvin', 'CHE', 70), ('Sam', 'PUD', 85), ('Jenna', 'KL', 90);",
      "SELECT * FROM users WHERE city = 'CBE' AND percentage = 80;",
      "SELECT * FROM users WHERE city = 'KL' OR percentage = 80;",
      "SELECT * FROM users WHERE city LIKE 'C%';",
      "SELECT * FROM users WHERE city NOT LIKE 'C%';",
      "SELECT * FROM users WHERE percentage BETWEEN 80 AND 90;",
      "SELECT * FROM users WHERE name = ALL(SELECT name FROM users WHERE city = 'CBE');",
      "SELECT * FROM users WHERE name = ANY(SELECT name FROM users WHERE city = 'PUD');",
      "SELECT * FROM users;"
    ]
  },
  {
    "id": 4,
    "title": "Implement SQL Query, Sub Query, Nested Query using Group by Function",
    "aim": "To implement SQL Query, Sub Query, Nested Query using Group by Function.",
    "algorithm": [
      "Step 1: Create employee and department tables.",
      "Step 2: Insert values into both tables.",
      "Step 3: Execute SQL aggregate queries (MAX, MIN, COUNT, SUM, AVG).",
      "Step 4: Use Nested Subqueries to compare individual salaries with aggregate metrics.",
      "Step 5: Apply GROUP BY and filtering conditions.",
      "Step 6: Display the queried results."
    ],
    "steps": [
      {
        "query": "CREATE TABLE emp (name VARCHAR(20), dept_id INT, salary INT);",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO emp VALUES ('Alex', 101, 10000), ('Alvin', 102, 15000), ('Sam', 103, 13000);",
        "output": "3 rows created."
      },
      {
        "query": "CREATE TABLE dept (dept_id INT, name VARCHAR(10));",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO dept VALUES (101, 'HR'), (102, 'IT'), (103, 'Admin');",
        "output": "3 rows created."
      },
      {
        "query": "SELECT MAX(salary) FROM emp;",
        "output": "MAX(SALARY)\n-----------\n      15000\n\n1 row selected."
      },
      {
        "query": "SELECT MIN(salary) FROM emp;",
        "output": "MIN(SALARY)\n-----------\n      10000\n\n1 row selected."
      },
      {
        "query": "SELECT COUNT(*) FROM emp;",
        "output": "  COUNT(*)\n----------\n         3\n\n1 row selected."
      },
      {
        "query": "SELECT SUM(salary) FROM emp;",
        "output": "SUM(SALARY)\n-----------\n      38000\n\n1 row selected."
      },
      {
        "query": "SELECT AVG(salary) FROM emp;",
        "output": "AVG(SALARY)\n-----------\n 12666.6667\n\n1 row selected."
      },
      {
        "query": "SELECT name, salary FROM emp WHERE salary > (SELECT AVG(salary) FROM emp);",
        "output": "NAME                     SALARY\n-------------------- ----------\nAlvin                     15000\nSam                       13000\n\n2 rows selected."
      },
      {
        "query": "SELECT name, salary FROM emp WHERE salary < (SELECT AVG(salary) FROM emp);",
        "output": "NAME                     SALARY\n-------------------- ----------\nAlex                      10000\n\n1 row selected."
      },
      {
        "query": "SELECT name FROM emp WHERE dept_id = (SELECT dept_id FROM dept WHERE name = 'HR');",
        "output": "NAME\n--------------------\nAlex\n\n1 row selected."
      },
      {
        "query": "SELECT * FROM emp;",
        "output": "NAME                    DEPT_ID     SALARY\n-------------------- ---------- ----------\nAlex                        101      10000\nAlvin                       102      15000\nSam                         103      13000\n\n3 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE emp (name VARCHAR(20), dept_id INT, salary INT);",
      "INSERT INTO emp VALUES ('Alex', 101, 10000), ('Alvin', 102, 15000), ('Sam', 103, 13000);",
      "CREATE TABLE dept (dept_id INT, name VARCHAR(10));",
      "INSERT INTO dept VALUES (101, 'HR'), (102, 'IT'), (103, 'Admin');",
      "SELECT MAX(salary) FROM emp;",
      "SELECT MIN(salary) FROM emp;",
      "SELECT COUNT(*) FROM emp;",
      "SELECT SUM(salary) FROM emp;",
      "SELECT AVG(salary) FROM emp;",
      "SELECT name, salary FROM emp WHERE salary > (SELECT AVG(salary) FROM emp);",
      "SELECT name, salary FROM emp WHERE salary < (SELECT AVG(salary) FROM emp);",
      "SELECT name FROM emp WHERE dept_id = (SELECT dept_id FROM dept WHERE name = 'HR');",
      "SELECT * FROM emp;"
    ]
  },
  {
    "id": 5,
    "title": "Perform SET Operations",
    "aim": "To perform set operations in SQL.",
    "algorithm": [
      "Step 1: Create two sample tables A and B.",
      "Step 2: Insert numeric tuples into tables A and B.",
      "Step 3: Perform SET operations: UNION, UNION ALL, INTERSECT, and MINUS.",
      "Step 4: Display the set combination outputs."
    ],
    "steps": [
      {
        "query": "CREATE TABLE A (x INT);",
        "output": "Table created."
      },
      {
        "query": "CREATE TABLE B (x INT);",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO A VALUES (1), (2);",
        "output": "2 rows created."
      },
      {
        "query": "INSERT INTO B VALUES (2), (3);",
        "output": "2 rows created."
      },
      {
        "query": "SELECT * FROM A UNION SELECT * FROM B;",
        "output": "         X\n----------\n         1\n         2\n         3\n\n3 rows selected."
      },
      {
        "query": "SELECT * FROM A UNION ALL SELECT * FROM B;",
        "output": "         X\n----------\n         1\n         2\n         2\n         3\n\n4 rows selected."
      },
      {
        "query": "SELECT * FROM A INTERSECT SELECT * FROM B;",
        "output": "         X\n----------\n         2\n\n1 row selected."
      },
      {
        "query": "SELECT * FROM A MINUS SELECT * FROM B;",
        "output": "         X\n----------\n         1\n\n1 row selected."
      },
      {
        "query": "SELECT * FROM A;",
        "output": "         X\n----------\n         1\n         2\n\n2 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE A (x INT);",
      "CREATE TABLE B (x INT);",
      "INSERT INTO A VALUES (1), (2);",
      "INSERT INTO B VALUES (2), (3);",
      "SELECT * FROM A UNION SELECT * FROM B;",
      "SELECT * FROM A UNION ALL SELECT * FROM B;",
      "SELECT * FROM A INTERSECT SELECT * FROM B;",
      "SELECT * FROM A MINUS SELECT * FROM B;",
      "SELECT * FROM A;"
    ]
  },
  {
    "id": 6,
    "title": "Illustrate Built-in Functions",
    "aim": "To illustrate the use of SQL built-in functions.",
    "algorithm": [
      "Step 1: Create a table with numeric and string attributes.",
      "Step 2: Use MIN() and MAX() to get minimum and maximum values.",
      "Step 3: Use AVG() to find the average numeric value.",
      "Step 4: Use COUNT() to count the total number of records.",
      "Step 5: Use ROUND() to round numeric values.",
      "Step 6: Use LENGTH() to compute character count.",
      "Step 7: Use LOWER() and UPPER() for string case transformations.",
      "Step 8: Display the evaluated results."
    ],
    "steps": [
      {
        "query": "CREATE TABLE num (val INT, name VARCHAR(10));",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO num VALUES (100, 'Alex'), (200, 'Alvin'), (300, 'Sam'), (400, 'John'), (500, 'Sara');",
        "output": "5 rows created."
      },
      {
        "query": "SELECT MIN(val) FROM num;",
        "output": "  MIN(VAL)\n----------\n       100\n\n1 row selected."
      },
      {
        "query": "SELECT MAX(val) FROM num;",
        "output": "  MAX(VAL)\n----------\n       500\n\n1 row selected."
      },
      {
        "query": "SELECT AVG(val) FROM num;",
        "output": "  AVG(VAL)\n----------\n       300\n\n1 row selected."
      },
      {
        "query": "SELECT COUNT(*) FROM num;",
        "output": "  COUNT(*)\n----------\n         5\n\n1 row selected."
      },
      {
        "query": "SELECT ROUND(val) FROM num;",
        "output": "ROUND(VAL)\n----------\n       100\n       200\n       300\n       400\n       500\n\n5 rows selected."
      },
      {
        "query": "SELECT LENGTH(name) FROM num;",
        "output": "LENGTH(NAME)\n------------\n           4\n           5\n           3\n           4\n           4\n\n5 rows selected."
      },
      {
        "query": "SELECT LOWER(name) FROM num;",
        "output": "LOWER(NAME\n----------\nalex\nalvin\nsam\njohn\nsara\n\n5 rows selected."
      },
      {
        "query": "SELECT * FROM num;",
        "output": "       VAL NAME\n---------- ----------\n       100 Alex\n       200 Alvin\n       300 Sam\n       400 John\n       500 Sara\n\n5 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE num (val INT, name VARCHAR(10));",
      "INSERT INTO num VALUES (100, 'Alex'), (200, 'Alvin'), (300, 'Sam'), (400, 'John'), (500, 'Sara');",
      "SELECT MIN(val) FROM num;",
      "SELECT MAX(val) FROM num;",
      "SELECT AVG(val) FROM num;",
      "SELECT COUNT(*) FROM num;",
      "SELECT ROUND(val) FROM num;",
      "SELECT LENGTH(name) FROM num;",
      "SELECT LOWER(name) FROM num;",
      "SELECT * FROM num;"
    ]
  },
  {
    "id": 7,
    "title": "Implementation of Rollback, Commit and Savepoint",
    "aim": "To implement Rollback, Commit and Savepoint operations.",
    "algorithm": [
      "Step 1: Create a users table.",
      "Step 2: Insert initial records.",
      "Step 3: Use COMMIT to make changes permanent.",
      "Step 4: Insert another user record.",
      "Step 5: Create a SAVEPOINT named s1.",
      "Step 6: Insert an uncommitted record.",
      "Step 7: ROLLBACK TO s1 to discard the uncommitted record.",
      "Step 8: Execute COMMIT.",
      "Step 9: Display the verified table data."
    ],
    "steps": [
      {
        "query": "CREATE TABLE users (name VARCHAR(10));",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO users VALUES ('Alex'), ('Alvin');",
        "output": "2 rows created."
      },
      {
        "query": "COMMIT;",
        "output": "Commit complete."
      },
      {
        "query": "INSERT INTO users VALUES ('Sam');",
        "output": "1 row created."
      },
      {
        "query": "SAVEPOINT s1;",
        "output": "Savepoint created."
      },
      {
        "query": "INSERT INTO users VALUES ('Bob');",
        "output": "1 row created."
      },
      {
        "query": "ROLLBACK TO s1;",
        "output": "Rollback complete."
      },
      {
        "query": "COMMIT;",
        "output": "Commit complete."
      },
      {
        "query": "SELECT * FROM users;",
        "output": "NAME\n----------\nAlex\nAlvin\nSam\n\n3 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE users (name VARCHAR(10));",
      "INSERT INTO users VALUES ('Alex'), ('Alvin');",
      "COMMIT;",
      "INSERT INTO users VALUES ('Sam');",
      "SAVEPOINT s1;",
      "INSERT INTO users VALUES ('Bob');",
      "ROLLBACK TO s1;",
      "COMMIT;",
      "SELECT * FROM users;"
    ]
  },
  {
    "id": 8,
    "title": "SQL Query to Implement Joins",
    "aim": "To implement different types of Joins operations using SQL.",
    "algorithm": [
      "Step 1: Create two tables with a common relationship key (d_id).",
      "Step 2: Insert records into both tables.",
      "Step 3: Use INNER JOIN to display matching records across tables.",
      "Step 4: Use LEFT JOIN to display all records from the primary table.",
      "Step 5: Use RIGHT JOIN to display all records from the secondary table.",
      "Step 6: Display the resulting join datasets."
    ],
    "steps": [
      {
        "query": "CREATE TABLE stud (id INT, name VARCHAR(10), d_id INT);",
        "output": "Table created."
      },
      {
        "query": "CREATE TABLE dept (d_id INT, dname VARCHAR(10));",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO stud VALUES (1, 'Alex', 10), (2, 'Sam', 20);",
        "output": "2 rows created."
      },
      {
        "query": "INSERT INTO dept VALUES (10, 'CS'), (30, 'IT');",
        "output": "2 rows created."
      },
      {
        "query": "SELECT stud.name, dept.dname FROM stud INNER JOIN dept ON stud.d_id = dept.d_id;",
        "output": "NAME       DNAME\n---------- ----------\nAlex       CS\n\n1 row selected."
      },
      {
        "query": "SELECT stud.name, dept.dname FROM stud LEFT JOIN dept ON stud.d_id = dept.d_id;",
        "output": "NAME       DNAME\n---------- ----------\nAlex       CS\nSam        NULL\n\n2 rows selected."
      },
      {
        "query": "SELECT stud.name, dept.dname FROM stud RIGHT JOIN dept ON stud.d_id = dept.d_id;",
        "output": "NAME       DNAME\n---------- ----------\nAlex       CS\nNULL       IT\n\n2 rows selected."
      },
      {
        "query": "SELECT * FROM stud;",
        "output": "        ID NAME             D_ID\n---------- ---------- ----------\n         1 Alex               10\n         2 Sam                20\n\n2 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE stud (id INT, name VARCHAR(10), d_id INT);",
      "CREATE TABLE dept (d_id INT, dname VARCHAR(10));",
      "INSERT INTO stud VALUES (1, 'Alex', 10), (2, 'Sam', 20);",
      "INSERT INTO dept VALUES (10, 'CS'), (30, 'IT');",
      "SELECT stud.name, dept.dname FROM stud INNER JOIN dept ON stud.d_id = dept.d_id;",
      "SELECT stud.name, dept.dname FROM stud LEFT JOIN dept ON stud.d_id = dept.d_id;",
      "SELECT stud.name, dept.dname FROM stud RIGHT JOIN dept ON stud.d_id = dept.d_id;",
      "SELECT * FROM stud;"
    ]
  },
  {
    "id": 9,
    "title": "Perform Trigger Operations",
    "aim": "To create database triggers on a table to automatically log DML operations into an audit table.",
    "algorithm": [
      "Step 1: Create a database instance.",
      "Step 2: Create a primary table and an audit log table.",
      "Step 3: Define AFTER INSERT, AFTER UPDATE, and AFTER DELETE triggers.",
      "Step 4: Execute DML statements (INSERT, UPDATE, DELETE) on the primary table.",
      "Step 5: Query the audit table to verify automated logging."
    ],
    "steps": [
      {
        "query": "CREATE DATABASE clg;",
        "output": "Database created."
      },
      {
        "query": "USE clg;",
        "output": "Database changed."
      },
      {
        "query": "CREATE TABLE stud (id INT, name VARCHAR(10));",
        "output": "Table created."
      },
      {
        "query": "CREATE TABLE stud_audit (id INT, times TIMESTAMP DEFAULT CURRENT_TIMESTAMP, action VARCHAR(20));",
        "output": "Table created."
      },
      {
        "query": "DELIMITER //",
        "output": ""
      },
      {
        "query": "CREATE TRIGGER st_ins AFTER INSERT ON stud FOR EACH ROW\nBEGIN\n  INSERT INTO stud_audit (id, action) VALUES (NEW.id, 'INSERT');\nEND //",
        "output": "Trigger created."
      },
      {
        "query": "DELIMITER ;",
        "output": ""
      },
      {
        "query": "INSERT INTO stud VALUES (101, 'Alex'), (102, 'Alvin');",
        "output": "2 rows created."
      },
      {
        "query": "DELIMITER //",
        "output": ""
      },
      {
        "query": "CREATE TRIGGER st_up AFTER UPDATE ON stud FOR EACH ROW\nBEGIN\n  INSERT INTO stud_audit (id, action) VALUES (NEW.id, 'UPDATE');\nEND //",
        "output": "Trigger created."
      },
      {
        "query": "CREATE TRIGGER st_del AFTER DELETE ON stud FOR EACH ROW\nBEGIN\n  INSERT INTO stud_audit (id, action) VALUES (NEW.id, 'DELETE');\nEND //",
        "output": "Trigger created."
      },
      {
        "query": "DELIMITER ;",
        "output": ""
      },
      {
        "query": "UPDATE stud SET name = 'Sam' WHERE id = 101;",
        "output": "1 row updated."
      },
      {
        "query": "DELETE FROM stud WHERE id = 102;",
        "output": "1 row deleted."
      },
      {
        "query": "SELECT * FROM stud_audit;",
        "output": "        ID TIMES               ACTION\n---------- ------------------- --------------------\n       101 2026-10-12 19:44:10 INSERT\n       102 2026-10-12 19:44:10 INSERT\n       101 2026-10-12 19:44:10 UPDATE\n       102 2026-10-12 19:44:10 DELETE\n\n4 rows selected."
      },
      {
        "query": "SELECT * FROM stud;",
        "output": "        ID NAME\n---------- ----------\n       101 Sam\n\n1 row selected."
      },
      {
        "query": "SELECT * FROM stud_audit;",
        "output": "        ID TIMES               ACTION\n---------- ------------------- --------------------\n       101 2026-10-12 19:44:10 INSERT\n       102 2026-10-12 19:44:10 INSERT\n       101 2026-10-12 19:44:10 UPDATE\n       102 2026-10-12 19:44:10 DELETE\n\n4 rows selected."
      }
    ],
    "queries": [
      "CREATE DATABASE clg;",
      "USE clg;",
      "CREATE TABLE stud (id INT, name VARCHAR(10));",
      "CREATE TABLE stud_audit (id INT, times TIMESTAMP DEFAULT CURRENT_TIMESTAMP, action VARCHAR(20));",
      "DELIMITER //",
      "CREATE TRIGGER st_ins AFTER INSERT ON stud FOR EACH ROW\nBEGIN\n  INSERT INTO stud_audit (id, action) VALUES (NEW.id, 'INSERT');\nEND //",
      "DELIMITER ;",
      "INSERT INTO stud VALUES (101, 'Alex'), (102, 'Alvin');",
      "DELIMITER //",
      "CREATE TRIGGER st_up AFTER UPDATE ON stud FOR EACH ROW\nBEGIN\n  INSERT INTO stud_audit (id, action) VALUES (NEW.id, 'UPDATE');\nEND //",
      "CREATE TRIGGER st_del AFTER DELETE ON stud FOR EACH ROW\nBEGIN\n  INSERT INTO stud_audit (id, action) VALUES (NEW.id, 'DELETE');\nEND //",
      "DELIMITER ;",
      "UPDATE stud SET name = 'Sam' WHERE id = 101;",
      "DELETE FROM stud WHERE id = 102;",
      "SELECT * FROM stud_audit;",
      "SELECT * FROM stud;",
      "SELECT * FROM stud_audit;"
    ]
  },
  {
    "id": 10,
    "title": "Write SQL Queries to create views",
    "aim": "To write SQL Queries to create views.",
    "algorithm": [
      "Step 1: Create the base employee table.",
      "Step 2: Insert records into the table.",
      "Step 3: Create a VIEW based on filtered attributes.",
      "Step 4: Query the view and perform DML update.",
      "Step 5: Use CREATE OR REPLACE VIEW to update view criteria.",
      "Step 6: DROP the view and verify cleanup."
    ],
    "steps": [
      {
        "query": "CREATE TABLE emp (id INT, name VARCHAR(20), city VARCHAR(20), sal INT);",
        "output": "Table created."
      },
      {
        "query": "INSERT INTO emp VALUES (1, 'Alex', 'CBE', 100000), (2, 'Alvin', 'CHE', 20000), (3, 'Sam', 'PUD', 70000);",
        "output": "3 rows created."
      },
      {
        "query": "CREATE VIEW emp_view AS SELECT * FROM emp WHERE sal > 30000;",
        "output": "View created."
      },
      {
        "query": "SELECT * FROM emp_view;",
        "output": "        ID NAME                 CITY                        SAL\n---------- -------------------- -------------------- ----------\n         1 Alex                 CBE                      100000\n         3 Sam                  PUD                       70000\n\n2 rows selected."
      },
      {
        "query": "UPDATE emp_view SET city = 'KL' WHERE name = 'Alvin';",
        "output": "0 rows updated."
      },
      {
        "query": "SELECT * FROM emp_view;",
        "output": "        ID NAME                 CITY                        SAL\n---------- -------------------- -------------------- ----------\n         1 Alex                 CBE                      100000\n         3 Sam                  PUD                       70000\n\n2 rows selected."
      },
      {
        "query": "CREATE OR REPLACE VIEW emp_view AS SELECT * FROM emp WHERE sal > 70000;",
        "output": "View created."
      },
      {
        "query": "SELECT * FROM emp_view;",
        "output": "        ID NAME                 CITY                        SAL\n---------- -------------------- -------------------- ----------\n         1 Alex                 CBE                      100000\n\n1 row selected."
      },
      {
        "query": "DROP VIEW emp_view;",
        "output": "View dropped."
      },
      {
        "query": "SELECT * FROM emp;",
        "output": "        ID NAME                 CITY                        SAL\n---------- -------------------- -------------------- ----------\n         1 Alex                 CBE                      100000\n         2 Alvin                KL                        20000\n         3 Sam                  PUD                       70000\n\n3 rows selected."
      }
    ],
    "queries": [
      "CREATE TABLE emp (id INT, name VARCHAR(20), city VARCHAR(20), sal INT);",
      "INSERT INTO emp VALUES (1, 'Alex', 'CBE', 100000), (2, 'Alvin', 'CHE', 20000), (3, 'Sam', 'PUD', 70000);",
      "CREATE VIEW emp_view AS SELECT * FROM emp WHERE sal > 30000;",
      "SELECT * FROM emp_view;",
      "UPDATE emp_view SET city = 'KL' WHERE name = 'Alvin';",
      "SELECT * FROM emp_view;",
      "CREATE OR REPLACE VIEW emp_view AS SELECT * FROM emp WHERE sal > 70000;",
      "SELECT * FROM emp_view;",
      "DROP VIEW emp_view;",
      "SELECT * FROM emp;"
    ]
  }
];

// State Variables
let currentInput = "";
let commandHistory = [];
let historyIndex = -1;
let isStealth = false;
let isMultiLine = false;
let multiLineBuffer = [];
let isFullscreenRequested = false;

// DOM References
const terminal = document.getElementById("terminal");
const terminalHistory = document.getElementById("terminal-history");
const commandInput = document.getElementById("command-input");
const renderedInput = document.getElementById("rendered-input");
const promptLabel = document.getElementById("prompt-label");
const terminalModalOverlay = document.getElementById("terminal-modal-overlay");
const stealthOverlay = document.getElementById("stealth-overlay");

/* -------------------------------------------------------------
   INITIAL STARTUP HEADER / BANNER
   ------------------------------------------------------------- */
function formatStartupTimestamp() {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const secs = String(now.getSeconds()).padStart(2, "0");
  const year = now.getFullYear();
  return `${day} ${month} ${date} ${hours}:${mins}:${secs} ${year}`;
}

function initTerminal() {
  const startupBanner = 
`SQL*Plus: Release 19.0.0.0.0 - Production on ${formatStartupTimestamp()}
Version 19.3.0.0.0

Copyright (c) 1982, 2019, Oracle.  All rights reserved.

Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production
Version 19.3.0.0.0

`;
  appendOutput(startupBanner, "system-banner");
  focusInput();
}

function appendOutput(text, className = "output-line") {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = text;
  terminalHistory.appendChild(div);
  scrollToBottom();
}

function scrollToBottom() {
  terminal.scrollTop = terminal.scrollHeight;
}

function focusInput() {
  commandInput.focus();
}

window.addEventListener("click", (e) => {
  if (!isFullscreenRequested) {
    requestAppFullscreen();
    isFullscreenRequested = true;
  }
  if (!terminalModalOverlay.classList.contains("active") && !isStealth) {
    // Only refocus the hidden input if the user didn't click inside terminal history
    // (clicking on history text should allow copy-paste selection, not steal focus)
    if (!terminalHistory.contains(e.target)) {
      focusInput();
    }
  }
});

function requestAppFullscreen() {
  try {
    const docEl = document.documentElement;
    if (!document.fullscreenElement) {
      if (docEl.requestFullscreen) docEl.requestFullscreen().catch(() => {});
      else if (docEl.webkitRequestFullscreen) docEl.webkitRequestFullscreen().catch(() => {});
      else if (docEl.msRequestFullscreen) docEl.msRequestFullscreen().catch(() => {});
    }
  } catch (e) {}
}

/* -------------------------------------------------------------
   INPUT HANDLING
   ------------------------------------------------------------- */
commandInput.addEventListener("input", () => {
  currentInput = commandInput.value;
  renderedInput.textContent = currentInput;
});

commandInput.addEventListener("keydown", (e) => {
  // Up Arrow - History Previous
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (commandHistory.length > 0) {
      if (historyIndex === -1) historyIndex = commandHistory.length - 1;
      else if (historyIndex > 0) historyIndex--;
      currentInput = commandHistory[historyIndex];
      commandInput.value = currentInput;
      renderedInput.textContent = currentInput;
    }
    return;
  }

  // Down Arrow - History Next
  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex !== -1) {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        currentInput = commandHistory[historyIndex];
      } else {
        historyIndex = -1;
        currentInput = "";
      }
      commandInput.value = currentInput;
      renderedInput.textContent = currentInput;
    }
    return;
  }

  // Enter - Execute
  if (e.key === "Enter") {
    e.preventDefault();
    handleEnterKey();
    return;
  }

  // Tab - Autocomplete keyword
  if (e.key === "Tab") {
    e.preventDefault();
    handleTabAutocomplete();
    return;
  }

  // Ctrl + L - Clear Screen
  if (e.ctrlKey && (e.key === "l" || e.key === "L")) {
    e.preventDefault();
    clearScreen();
    return;
  }
});

function handleEnterKey() {
  const rawInput = commandInput.value;
  const trimmed = rawInput.trim();

  if (isMultiLine) {
    appendOutput(`  ${multiLineBuffer.length + 2}  ${rawInput}`, "prompt-echo");
    multiLineBuffer.push(rawInput);

    if (trimmed.endsWith(";") || trimmed === "/") {
      const fullQuery = multiLineBuffer.join(" ").replace(/;$/, "").replace(/\/$/, "").trim();
      commandHistory.push(fullQuery);
      historyIndex = -1;
      isMultiLine = false;
      multiLineBuffer = [];
      promptLabel.textContent = "SQL> ";
      processSQLStatement(fullQuery);
    }
  } else {
    appendOutput(`SQL> ${rawInput}`, "prompt-echo");

    if (trimmed.length > 0) {
      commandHistory.push(trimmed);
      historyIndex = -1;

      const isStandardCommand = isSpecialCommand(trimmed);
      if (!isStandardCommand && !trimmed.endsWith(";") && !trimmed.endsWith("/")) {
        isMultiLine = true;
        multiLineBuffer = [rawInput];
        promptLabel.textContent = "  2  ";
      } else {
        const cleanQuery = trimmed.replace(/;$/, "").trim();
        processSQLStatement(cleanQuery);
      }
    }
  }

  commandInput.value = "";
  currentInput = "";
  renderedInput.textContent = "";
  scrollToBottom();
}

function isSpecialCommand(cmd) {
  const upper = cmd.toUpperCase().trim();
  return (
    upper === "EXIT" ||
    upper === "QUIT" ||
    upper === "CLEAR SCREEN" ||
    upper === "CL SCR" ||
    upper === "CLEAR" ||
    upper === "HELP" ||
    upper === "?" ||
    upper === "SHOW TABLES" ||
    upper.startsWith("DESC ") ||
    upper.startsWith("DESCRIBE ")
  );
}

/* -------------------------------------------------------------
   SQL*PLUS AUTOCOMPLETE
   ------------------------------------------------------------- */
const SQL_KEYWORDS = [
  "SELECT", "FROM", "WHERE", "INSERT INTO", "VALUES", "CREATE TABLE",
  "ALTER TABLE", "DROP TABLE", "UPDATE", "SET", "DELETE FROM",
  "COMMIT", "ROLLBACK", "SAVEPOINT", "CREATE VIEW", "DROP VIEW",
  "UNION", "UNION ALL", "INTERSECT", "MINUS", "GROUP BY", "ORDER BY",
  "HAVING", "AND", "OR", "LIKE", "BETWEEN", "DESC", "CLEAR SCREEN"
];

function handleTabAutocomplete() {
  const val = commandInput.value.toUpperCase();
  const match = SQL_KEYWORDS.find(k => k.startsWith(val));
  if (match) {
    commandInput.value = match + " ";
    renderedInput.textContent = commandInput.value;
  }
}

function clearScreen() {
  terminalHistory.innerHTML = "";
  scrollToBottom();
}

/* -------------------------------------------------------------
   IN-MEMORY MOCK DATABASE
   ------------------------------------------------------------- */
const mockDB = {
  student: [
    { name: "Alex", reg_no: 101, ph: 1234560789, email: "alex@mail.com" },
    { name: "Alvin", reg_no: 102, ph: 7890123456, email: null },
    { name: "Sam", reg_no: 103, ph: 3456098712, email: null }
  ],
  stud: [
    { id: 1, name: "Alex", d_id: 10 },
    { id: 2, name: "Sam", d_id: 20 },
    { id: 3, name: "Alvin", d_id: null }
  ],
  users: [
    { name: "Alex", city: "CBE", percentage: 80 },
    { name: "Alvin", city: "CHE", percentage: 70 },
    { name: "Sam", city: "PUD", percentage: 85 },
    { name: "Jenna", city: "KL", percentage: 90 }
  ],
  emp: [
    { name: "Alex", dept_id: 101, salary: 10000 },
    { name: "Alvin", dept_id: 102, salary: 15000 },
    { name: "Sam", dept_id: 103, salary: 13000 }
  ],
  dept: [
    { dept_id: 101, name: "HR", dname: "HR" },
    { dept_id: 102, name: "IT", dname: "IT" },
    { dept_id: 103, name: "Admin", dname: "Admin" }
  ],
  a: [
    { x: 1 },
    { x: 2 }
  ],
  b: [
    { x: 2 },
    { x: 3 }
  ],
  num: [
    { val: 100, name: "Alex" },
    { val: 200, name: "Alvin" },
    { val: 300, name: "Sam" },
    { val: 400, name: "John" },
    { val: 500, name: "Sara" }
  ],
  stud_audit: [
    { id: 101, times: "2026-10-12 19:44:10", action: "INSERT" },
    { id: 102, times: "2026-10-12 19:44:10", action: "INSERT" },
    { id: 101, times: "2026-10-12 19:44:10", action: "UPDATE" },
    { id: 102, times: "2026-10-12 19:44:10", action: "DELETE" }
  ],
  emp_view: [
    { id: 1, name: "Alex", city: "CBE", sal: 100000 },
    { id: 3, name: "Sam", city: "PUD", sal: 70000 }
  ]
};

function formatSQLPlusTable(columns, rows) {
  if (!rows || rows.length === 0) {
    return "no rows selected.";
  }

  const colWidths = {};
  columns.forEach(col => {
    let maxLen = col.toUpperCase().length;
    rows.forEach(row => {
      const val = row[col] !== undefined && row[col] !== null ? String(row[col]) : "";
      if (val.length > maxLen) maxLen = val.length;
    });
    colWidths[col] = Math.max(maxLen, 4);
  });

  const isNum = {};
  columns.forEach(col => {
    isNum[col] = rows.some(r => typeof r[col] === "number");
  });

  const headerLine = columns.map(col => {
    const header = col.toUpperCase();
    return isNum[col] ? header.padStart(colWidths[col]) : header.padEnd(colWidths[col]);
  }).join(" ");

  const sepLine = columns.map(col => "-".repeat(colWidths[col])).join(" ");

  const dataLines = rows.map(row => {
    return columns.map(col => {
      const raw = row[col] !== undefined && row[col] !== null ? String(row[col]) : "";
      return isNum[col] ? raw.padStart(colWidths[col]) : raw.padEnd(colWidths[col]);
    }).join(" ");
  });

  const rowCountText = `${rows.length} row${rows.length === 1 ? "" : "s"} selected.`;
  return [headerLine, sepLine, ...dataLines, "", rowCountText].join("\n");
}

function processSQLStatement(statement) {
  const upper = statement.toUpperCase().trim();
  if (!upper) return;

  // Direct numeric or program trigger: 10, 0, P10, PROG 10, etc.
  const progDirectMatch = upper.replace(/;$/, "").match(/^(?:PROG(?:RAM)?\s*|P|@|RUN\s+|EXEC\s+)?(10|[0-9])$/i);
  if (progDirectMatch) {
    let pNum = parseInt(progDirectMatch[1], 10);
    if (pNum === 0) pNum = 10;
    if (pNum >= 1 && pNum <= 10) {
      safeExecuteProgramBatch(pNum);
      return;
    }
  }

  if (upper === "CLEAR SCREEN" || upper === "CL SCR" || upper === "CLEAR") {
    clearScreen();
    return;
  }

  if (upper === "EXIT" || upper === "QUIT") {
    appendOutput("Disconnected from Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production\nVersion 19.3.0.0.0", "system-banner");
    return;
  }

  if (upper === "HELP" || upper === "?") {
    const helpText = 
`HELP MANUAL:
--------------------------------------------------------------------------------
Ctrl + 1 to 10        : Open Aim & Algorithm for Lab Program 1..10 (Ctrl+0 for Prog 10)
Ctrl + Shift + 1 to 10: Run preloaded Lab Program 1..10 (Ctrl+Shift+0 for Prog 10)
Type 1..10 / P10      : Type number at SQL> prompt to execute that program
Ctrl + Space          : Stealth Mode (Blank screen)
Ctrl + X / Esc        : Close open dialog box
CLEAR SCREEN / cl scr : Clears terminal display
DESC <table_name>     : Describes table structure
SHOW TABLES           : Lists tables
--------------------------------------------------------------------------------`;
    appendOutput(helpText, "system-banner");
    return;
  }

  if (upper === "SHOW TABLES" || upper === "SELECT * FROM TAB" || upper === "SELECT TABLE_NAME FROM USER_TABLES") {
    const tableRows = Object.keys(mockDB).map(tbl => ({ table_name: tbl.toUpperCase(), tabtype: "TABLE" }));
    appendOutput(formatSQLPlusTable(["table_name", "tabtype"], tableRows), "table-grid");
    return;
  }

  if (upper === "COMMIT") {
    appendOutput("Commit complete.");
    return;
  }

  if (upper.startsWith("ROLLBACK")) {
    appendOutput("Rollback complete.");
    return;
  }

  if (upper.startsWith("SAVEPOINT")) {
    appendOutput("Savepoint created.");
    return;
  }

  if (upper.startsWith("CREATE TABLE")) {
    const match = upper.match(/CREATE TABLE\s+([A-Z0-9_]+)/i);
    const name = match ? match[1].toLowerCase() : "table";
    if (!mockDB[name]) mockDB[name] = [];
    appendOutput("Table created.");
    return;
  }

  if (upper.startsWith("CREATE VIEW") || upper.startsWith("CREATE OR REPLACE VIEW")) {
    appendOutput("View created.");
    return;
  }

  if (upper.startsWith("DROP VIEW")) {
    appendOutput("View dropped.");
    return;
  }

  if (upper.startsWith("DROP TABLE")) {
    appendOutput("Table dropped.");
    return;
  }

  if (upper.startsWith("ALTER TABLE")) {
    appendOutput("Table altered.");
    return;
  }

  if (upper.startsWith("CREATE TRIGGER")) {
    appendOutput("Trigger created.");
    return;
  }

  if (upper.startsWith("CREATE DATABASE")) {
    appendOutput("Database created.");
    return;
  }

  if (upper.startsWith("USE ")) {
    appendOutput("Database changed.");
    return;
  }

  if (upper.startsWith("DELIMITER")) {
    return;
  }

  if (upper.startsWith("INSERT INTO")) {
    const count = (upper.split("(").length - 1);
    const insertedRows = count > 1 ? count - 1 : 1;
    appendOutput(`${insertedRows} row${insertedRows === 1 ? "" : "s"} created.`);
    return;
  }

  if (upper.startsWith("UPDATE")) {
    appendOutput("1 row updated.");
    return;
  }

  if (upper.startsWith("DELETE FROM") || upper.startsWith("DELETE ")) {
    appendOutput("1 row deleted.");
    return;
  }

  if (upper.startsWith("DESC ") || upper.startsWith("DESCRIBE ")) {
    const tbl = upper.replace(/^(DESC|DESCRIBE)\s+/, "").trim().toLowerCase();
    if (mockDB[tbl]) {
      const descOutput = 
` Name                                      Null?    Type
 ----------------------------------------- -------- ----------------------------
 ID                                                 NUMBER(38)
 NAME                                               VARCHAR2(20)
 CREATED_AT                                         TIMESTAMP(6)`;
      appendOutput(descOutput, "table-grid");
    } else {
      appendOutput(`ORA-04043: object ${tbl.toUpperCase()} does not exist`, "error-msg");
    }
    return;
  }

  if (upper.startsWith("SELECT")) {
    handleSelectQuery(upper);
    return;
  }

  appendOutput("ORA-00900: invalid SQL statement", "error-msg");
}

function handleSelectQuery(upper) {
  if (upper.includes("MAX(SALARY)")) {
    appendOutput(formatSQLPlusTable(["MAX(SALARY)"], [{ "MAX(SALARY)": 15000 }]), "table-grid");
    return;
  }
  if (upper.includes("MIN(SALARY)")) {
    appendOutput(formatSQLPlusTable(["MIN(SALARY)"], [{ "MIN(SALARY)": 10000 }]), "table-grid");
    return;
  }
  if (upper.includes("COUNT(*)") && upper.includes("EMP")) {
    appendOutput(formatSQLPlusTable(["COUNT(*)"], [{ "COUNT(*)": 3 }]), "table-grid");
    return;
  }
  if (upper.includes("SUM(SALARY)")) {
    appendOutput(formatSQLPlusTable(["SUM(SALARY)"], [{ "SUM(SALARY)": 38000 }]), "table-grid");
    return;
  }
  if (upper.includes("AVG(SALARY)")) {
    appendOutput(formatSQLPlusTable(["AVG(SALARY)"], [{ "AVG(SALARY)": "12666.6667" }]), "table-grid");
    return;
  }
  if (upper.includes("MIN(VAL)")) {
    appendOutput(formatSQLPlusTable(["MIN(VAL)"], [{ "MIN(VAL)": 100 }]), "table-grid");
    return;
  }
  if (upper.includes("MAX(VAL)")) {
    appendOutput(formatSQLPlusTable(["MAX(VAL)"], [{ "MAX(VAL)": 500 }]), "table-grid");
    return;
  }
  if (upper.includes("AVG(VAL)")) {
    appendOutput(formatSQLPlusTable(["AVG(VAL)"], [{ "AVG(VAL)": 300 }]), "table-grid");
    return;
  }
  if (upper.includes("COUNT(*)") && upper.includes("NUM")) {
    appendOutput(formatSQLPlusTable(["COUNT(*)"], [{ "COUNT(*)": 5 }]), "table-grid");
    return;
  }
  if (upper.includes("ROUND(VAL)")) {
    appendOutput(formatSQLPlusTable(["ROUND(VAL)"], [
      { "ROUND(VAL)": 100 },
      { "ROUND(VAL)": 200 },
      { "ROUND(VAL)": 300 },
      { "ROUND(VAL)": 400 },
      { "ROUND(VAL)": 500 }
    ]), "table-grid");
    return;
  }
  if (upper.includes("LENGTH(NAME)")) {
    appendOutput(formatSQLPlusTable(["LENGTH(NAME)"], [
      { "LENGTH(NAME)": 4 },
      { "LENGTH(NAME)": 5 },
      { "LENGTH(NAME)": 3 },
      { "LENGTH(NAME)": 4 },
      { "LENGTH(NAME)": 4 }
    ]), "table-grid");
    return;
  }
  if (upper.includes("LOWER(NAME)")) {
    appendOutput(formatSQLPlusTable(["LOWER(NAME)"], [
      { "LOWER(NAME)": "alex" },
      { "LOWER(NAME)": "alvin" },
      { "LOWER(NAME)": "sam" },
      { "LOWER(NAME)": "john" },
      { "LOWER(NAME)": "sara" }
    ]), "table-grid");
    return;
  }
  if (upper.includes("UNION ALL")) {
    appendOutput(formatSQLPlusTable(["X"], [{ "X": 1 }, { "X": 2 }, { "X": 2 }, { "X": 3 }]), "table-grid");
    return;
  }
  if (upper.includes("UNION")) {
    appendOutput(formatSQLPlusTable(["X"], [{ "X": 1 }, { "X": 2 }, { "X": 3 }]), "table-grid");
    return;
  }
  if (upper.includes("INTERSECT")) {
    appendOutput(formatSQLPlusTable(["X"], [{ "X": 2 }]), "table-grid");
    return;
  }
  if (upper.includes("MINUS")) {
    appendOutput(formatSQLPlusTable(["X"], [{ "X": 1 }]), "table-grid");
    return;
  }

  for (const tbl of Object.keys(mockDB)) {
    if (upper.includes(tbl.toUpperCase())) {
      const rows = mockDB[tbl];
      if (rows && rows.length > 0) {
        const cols = Object.keys(rows[0]);
        appendOutput(formatSQLPlusTable(cols, rows), "table-grid");
        return;
      }
    }
  }

  appendOutput(formatSQLPlusTable(["STATUS"], [{ STATUS: "SUCCESS" }]), "table-grid");
}

/* -------------------------------------------------------------
   KEYBOARD SHORTCUT PARSER (ROBUST ACROSS ALL LAYOUTS & OS)
   ------------------------------------------------------------- */
function getProgramNumberFromEvent(e) {
  // Check Program 10 (Key 0 / Numpad 0) first
  if (
    e.code === "Digit0" ||
    e.code === "Numpad0" ||
    e.key === "0" ||
    e.key === ")" ||
    (e.shiftKey && (e.key === "Insert" || e.code === "Numpad0")) ||
    e.keyCode === 48 ||
    e.which === 48 ||
    e.keyCode === 96 ||
    e.which === 96
  ) {
    return 10;
  }

  // 1 to 9
  if (e.code === "Digit1" || e.code === "Numpad1" || e.key === "1" || e.key === "!" || e.keyCode === 49 || e.keyCode === 97) return 1;
  if (e.code === "Digit2" || e.code === "Numpad2" || e.key === "2" || e.key === "@" || e.keyCode === 50 || e.keyCode === 98) return 2;
  if (e.code === "Digit3" || e.code === "Numpad3" || e.key === "3" || e.key === "#" || e.keyCode === 51 || e.keyCode === 99) return 3;
  if (e.code === "Digit4" || e.code === "Numpad4" || e.key === "4" || e.key === "$" || e.keyCode === 52 || e.keyCode === 100) return 4;
  if (e.code === "Digit5" || e.code === "Numpad5" || e.key === "5" || e.key === "%" || e.keyCode === 53 || e.keyCode === 101) return 5;
  if (e.code === "Digit6" || e.code === "Numpad6" || e.key === "6" || e.key === "^" || e.keyCode === 54 || e.keyCode === 102) return 6;
  if (e.code === "Digit7" || e.code === "Numpad7" || e.key === "7" || e.key === "&" || e.keyCode === 55 || e.keyCode === 103) return 7;
  if (e.code === "Digit8" || e.code === "Numpad8" || e.key === "8" || e.key === "*" || e.keyCode === 56 || e.keyCode === 104) return 8;
  if (e.code === "Digit9" || e.code === "Numpad9" || e.key === "9" || e.key === "(" || e.keyCode === 57 || e.keyCode === 105) return 9;

  return null;
}

let lastBatchExecution = 0;
function safeExecuteProgramBatch(programId) {
  const now = Date.now();
  if (now - lastBatchExecution < 250) return;
  lastBatchExecution = now;
  closeModal();
  executeProgramBatch(programId);
}

// Window Keydown Listener
window.addEventListener("keydown", (e) => {
  // Stealth Screen Toggle: Ctrl + Space
  if (e.ctrlKey && (e.code === "Space" || e.key === " " || e.keyCode === 32)) {
    e.preventDefault();
    e.stopPropagation();
    toggleStealthMode();
    return;
  }

  // In stealth mode, ignore all other shortcuts
  if (isStealth) return;

  // Close Modal: Ctrl + X or Escape
  if ((e.ctrlKey && (e.key === "x" || e.key === "X" || e.code === "KeyX")) || e.key === "Escape") {
    if (terminalModalOverlay.classList.contains("active")) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
      return;
    }
  }

  // Preloaded Query Execution: Ctrl + Shift + [0..9] or Alt + Shift + [0..9]
  if ((e.ctrlKey && e.shiftKey) || (e.altKey && e.shiftKey)) {
    const progNum = getProgramNumberFromEvent(e);
    if (progNum !== null) {
      e.preventDefault();
      e.stopPropagation();
      safeExecuteProgramBatch(progNum);
      return;
    }
  }

  // Explicit Fallback for Ctrl + Shift + 0 (Program 10)
  if (e.ctrlKey && e.shiftKey && (e.code === "Digit0" || e.code === "Numpad0" || e.key === "0" || e.key === ")" || e.keyCode === 48 || e.keyCode === 96)) {
    e.preventDefault();
    e.stopPropagation();
    safeExecuteProgramBatch(10);
    return;
  }

  // Modal Dialog Box (Aim & Algorithm): Ctrl + [1..10] (without Shift)
  if (e.ctrlKey && !e.shiftKey && !e.altKey) {
    const progNum = getProgramNumberFromEvent(e);
    if (progNum !== null) {
      e.preventDefault();
      e.stopPropagation();
      openProgramModal(progNum);
      return;
    }
  }
}, true);

// Window Keyup Fallback Listener (specifically catches Windows IME hotkey swallowed keydowns)
window.addEventListener("keyup", (e) => {
  if (isStealth) return;
  if ((e.ctrlKey && e.shiftKey) || (e.altKey && e.shiftKey)) {
    const progNum = getProgramNumberFromEvent(e);
    if (progNum !== null) {
      safeExecuteProgramBatch(progNum);
    }
  }
}, true);

/* -------------------------------------------------------------
   STEALTH SCREEN TOGGLE (Ctrl + Space)
   ------------------------------------------------------------- */
function toggleStealthMode() {
  isStealth = !isStealth;
  if (isStealth) {
    stealthOverlay.classList.add("active");
  } else {
    stealthOverlay.classList.remove("active");
    focusInput();
  }
}

/* -------------------------------------------------------------
   MODAL DIALOG (Ctrl + 1..10)
   ------------------------------------------------------------- */
function openProgramModal(programId) {
  const prog = PROGRAMS.find(p => p.id === programId);
  if (!prog) return;

  document.getElementById("modal-program-title").textContent = 
    `PROGRAM ${String(prog.id).padStart(2, "0")}: ${prog.title.toUpperCase()}`;
  document.getElementById("modal-aim-text").textContent = prog.aim;

  const algoListEl = document.getElementById("modal-algo-list");
  algoListEl.innerHTML = "";
  prog.algorithm.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    algoListEl.appendChild(li);
  });

  terminalModalOverlay.classList.add("active");
}

function closeModal() {
  terminalModalOverlay.classList.remove("active");
  focusInput();
}

/* -------------------------------------------------------------
   PRELOADED QUERY EXECUTION (Ctrl + Shift + 1..10)
   Pure SQL Output without banners or result text
   ------------------------------------------------------------- */
function executeProgramBatch(programId) {
  const prog = PROGRAMS.find(p => p.id === programId);
  if (!prog) return;

  closeModal();

  const steps = prog.steps || prog.queries.map(q => ({ query: q, output: "" }));
  const firstQuery = steps.length > 0 ? steps[0].query : "";

  // Echo query into active prompt
  commandInput.value = firstQuery;
  renderedInput.textContent = firstQuery;

  // Render each SQL query and its exact output line-by-line
  steps.forEach(step => {
    appendOutput(`SQL> ${step.query}`, "prompt-echo");
    if (step.output) {
      appendOutput(step.output, "table-grid");
    }
  });

  // Reset command input prompt line
  commandInput.value = "";
  renderedInput.textContent = "";
  scrollToBottom();
  focusInput();
}

/* -------------------------------------------------------------
   WINDOW CONTROL BUTTONS
   ------------------------------------------------------------- */
document.getElementById("btn-minimize").addEventListener("click", () => {
  toggleStealthMode();
});

document.getElementById("btn-maximize").addEventListener("click", () => {
  if (!document.fullscreenElement) {
    requestAppFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
  }
});

document.getElementById("btn-close").addEventListener("click", () => {
  appendOutput("SQL> EXIT", "prompt-echo");
  appendOutput("Disconnected from Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production\nVersion 19.3.0.0.0", "system-banner");
});

// Boot Terminal Replica
initTerminal();
