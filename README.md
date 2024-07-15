# BBDD with SQL

<p align="center">
  <img src="https://img.shields.io/badge/Curso%20-Finalizado-brightgreen"/>
</p>

<br>

# INDEX

<br>
<br>
<br>

# INTRODUCCTION TO RELATIONALS BBDD
  ## [BBDD GOOD PRACTICES WITH SQL]()
Database normalization is essential to ensure data integrity, organize data properly, and manage relationships between tables.

  ### What is the First Normal Form (1NF)?
The first normal form (**1NF**) is based on three fundamental steps:

  - **Atomic data**: Information must be indivisible.
  - **Primary key**: A unique identifier for each record.
  - **Centralization of data by column**: Do not separate information by commas, except for descriptions.

A bad example would be having a student, Marco, with courses listed in a single column. The correct solution is to create an individual record for each course and student, ensuring that each course is properly referenced.

<p align="center">
  <img src="https://github.com/juancumbeq/platzi-bbdd-with-sql/blob/main/readme_images/raw.png?raw=true" width= "75%" alt="raw">
</p>

  ### How is the Second Normal Form (2NF) applied?
The second normal form (**2NF**) requires that all non-key attributes depend on the primary key. To comply with 2NF, you must first satisfy the requirements of 1NF. This involves separating information into additional tables and using foreign keys to establish relationships. For example, creating a separate table for courses and referencing it from the student table using a foreign key.

<p align="center">
  <img src="https://github.com/juancumbeq/platzi-bbdd-with-sql/blob/main/readme_images/course-table.png?raw=true" width= "65%" alt="course-table">
</p>

  ### What does the Third Normal Form (3NF) entail?
The third normal form (3NF) adds that all non-key attributes must be independent of each other and comply with the previous two forms. Any redundancy and unnecessary dependency should be eliminated. In this case, an intermediate table between students and courses can help maintain the independence of attributes, relating students and courses through unique identifiers.

<p align="center">
  <img src="https://github.com/juancumbeq/platzi-bbdd-with-sql/blob/main/readme_images/3fn.png?raw=true" width= "65%" alt="3fn">
</p>

  ### What are other examples of normalization?
A common example is addresses. An address record can be more atomic if it is divided into separate tables for countries, cities, and departments. Although some companies prefer a single address table, the normalization process always seeks the most efficient and organized structure.

Understanding these forms of normalization and applying them correctly improves the quality and management of data in any database.

<br>
<br>

  ##  [DATATYPES IN SQL]()
Optimizing data processes and improving their quality is possible thanks to the correct definition of data types. These are crucial for specifying the kind of information to be inserted into columns, variables, and parameters.

  ### What are data types?
Data types are used in columns, variables, and parameters to define the kind of information that will be inserted into an object. This helps to identify the type of content in a column in a table, a parameter in a stored procedure, or a variable.

  ### What are the categories of data types?
Data types are grouped into three main categories: numeric, text, and date types.

  ### What numeric data types exist?
  - **Integer**: Classified into three types:
    - **Int**: 4 bytes of capacity.
    - **Smallint**: 2 bytes of capacity.
    - **Bigint**: 8 bytes of capacity.
    -  Used in primary keys and quantities.
  
  - **Decimal**: Specified with "decimal" and two values in parentheses.
    - Example: decimal(10, 2) for 10 digits with 2 decimal places.
  - **Float**: Similar to decimal but with unlimited precision.

  ### What text data types are most commonly used?
  - **Char**: Specified with fixed length.
    - Example: char(10).
    - Occupies the full length regardless of the stored text.
  - **Varchar**: Variable length.
    - Example: varchar(10).
    - Occupies only the space of the stored text.
  - **Text**: No length limitation.
    - Ideal for long descriptions.

  ### What are the date data types?
  - **Time**: Specifies the time.
  - **Date**: Specifies the date.
  - **Datetime**: Combines date and time.

  ### Other data types
  - Boolean data types:
    - **BOOLEAN**: Almacena valores TRUE o FALSE.
      - Tamaño: 1 byte (aunque esto puede variar según el sistema de bases de datos).

  - Spatial Data Types
    - **GEOMETRY**: Stores geometric data.
      - Size: Variable, depends on the content.
    - **POINT**: Stores a point in geometric space.
      - Size: Variable, depends on the content.
    - **LINESTRING**: Stores a line in geometric space.
      - Size: Variable, depends on the content.
    - **POLYGON**: Stores a polygon in geometric space.
      - Size: Variable, depends on the content.

  - JSON and XML Data Types
    - **JSON**: Stores data in JSON format.
      - Size: Variable, depends on the content.
    - **XML**: Stores data in XML format.
      - Size: Variable, depends on the content.
  - UUID Data Types
    - **UUID**: Stores universally unique identifiers.
      - Size: 16 bytes.

Analyzing and choosing the correct data type is vital to avoid extensive data cleaning and transformation processes. Share your knowledge or questions in the comments.

<br>
<br>

  ##  [HOW TO CREATE A DATABASE?]()
  ### What are the best practices for creating relational databases?
  - **Normalization**: Apply the three normalization rules to avoid redundancies.
  - **Keys**: Understand primary keys, foreign keys, business keys, and surrogate keys.
  - **Data types**: Correctly identify the data types for each attribute.

  ### How to create a database and tables in SQL?
  - **Creation syntax**: Use ``CREATE DATABASE database_name;`` for the database and ``CREATE TABLE table_name (attributes);`` for the tables.
  - **Consistency in names**: Maintain a uniform format (uppercase or lowercase) for table and attribute names.
  
  ### What to consider when defining table attributes?
  - **Primary key**: Choose a unique key, such as an auto-incremental ID.
  - **Business attributes**: Use business keys for external identification.
  - **Data types**: Select appropriate types, such as ``INTEGER`` for ``IDs`` and ``VARCHAR`` for text.
  
  ### Why is it important to record dates in tables?
  - **Traceability**: Include ``date_loaded`` and ``date_modified`` to monitor changes and support data-driven decisions.
  - **Compliance**: Ensure data is up-to-date and documented.
  
  ### How to relate tables using foreign keys?
  - **Foreign key**: Define the relationship between tables using ``FOREIGN KEY`` pointing to the primary key of another table.
  - **Example**: ``FOREIGN KEY (COURSEID) REFERENCES COURSES(COURSEID)``, In this case we are creating another atribute called ``COURSEID`` that makes reference to a another table atribute ``REFERENCES COURSES(COURSEID)``

<br>
<br>

  ##  [SQL HISTORY AND EVOLUTION]()
SQL, which stands for "Structured Query Language," is a programming language used to manage and manipulate relational databases. It is the de facto standard for interacting with database management systems (DBMS) such as MySQL, PostgreSQL, Oracle, and SQL Server. Since its inception, SQL has been fundamental in developing applications requiring efficient data storage and retrieval.

  ### Origins of SQL
  #### The Beginning at IBM
The story of SQL begins in the 1970s at IBM laboratories. Edgar F. Codd, a British computer scientist, proposed the relational model for databases in his 1970 paper titled "A Relational Model of Data for Large Shared Data Banks." This model revolutionized the way data could be organized and accessed.

  #### System R: The Pioneering Project
In 1974, the System R project was initiated by IBM in San Jose, California, with the goal of creating a prototype relational database system based on Codd's ideas. Two researchers, Donald D. Chamberlin and Raymond F. Boyce, developed the SEQUEL (Structured English Query Language) to interact with System R. SEQUEL, later renamed SQL due to trademark issues, was designed to be an intuitive and easy-to-use query language.

  ### Evolution and Standardization
  #### Commercialization and Adoption
IBM was not the only one to recognize SQL's potential. In 1979, Oracle (then Relational Software, Inc.) released its commercial database product, Oracle V2, which implemented SQL. This was the first commercial DBMS to use SQL, marking the beginning of rapid industry adoption.

  #### ANSI and ISO Standards
In 1986, SQL was adopted as a standard by the American National Standards Institute (ANSI), and a year later by the International Organization for Standardization (ISO). This standardization was crucial to ensuring interoperability between different database systems and facilitated the widespread adoption of SQL in various applications.

  #### Versions and Updates
Over the years, SQL has seen numerous revisions and additions, reflecting the changing needs of the information technology industry. Some important versions include:

  - **SQL-86**: The first standard version of SQL.
  - **SQL-89**: Included corrections and minor improvements to the initial standard.
  - **SQL-92**: Introduced significant features such as subqueries, outer joins, and additional data types.
  - **SQL:1999 (SQL3)**: Added support for object-oriented programming, triggers, and stored procedures.
  - **SQL:2003**: Introduced native XML support and data management improvements.
  - **SQL:2008**: Added support for temporal data and portability improvements.
  - **SQL:2011**: Introduced support for parallel data processing.
  - **SQL:2016**: Incorporated significant improvements in security and JSON management.

  ### Key Features of SQL
  #### Data Manipulation Language (DML)
SQL allows basic data manipulation operations through commands such as:
  - **SELECT**: Retrieve data from a database.
  - **INSERT**: Insert new data into a table.
  - **UPDATE**: Modify existing data.
  - **DELETE**: Delete data from a table.

  #### Data Definition Language (DDL)
SQL also provides commands to define and modify the database structure:

  - **CREATE TABLE**: Create a new table.
  - **ALTER TABLE**: Modify an existing table.
  - **DROP TABLE**: Delete a table.

  #### Access Control and Transactions
With SQL, users can control data access and ensure transaction integrity through commands such as:

  - **GRANT** and **REVOKE**: Control access permissions.
  - **BEGIN TRANSACTION**, **COMMIT**, and **ROLLBACK**: Manage transactions to ensure data integrity.

  #### Impact of SQL on the Industry
SQL has profoundly impacted data management and the software industry. It has facilitated the development of enterprise applications, content management systems, and e-commerce platforms. Its ability to handle large volumes of data and perform complex queries efficiently has made it indispensable in the data world.

From its humble beginnings in IBM laboratories to its current status as a global standard, SQL has come a long way. Its evolution reflects the transformation of database technology and the growing demand for more powerful and flexible data management tools. As technology advances, SQL will likely continue to adapt and maintain its relevance in managing relational data.

<br>
<br>

  ##  [PRACTICE: ``CREATE TABLE``]()
```
CREATE TABLE people (  
    person_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    last_name VARCHAR(255),  
    first_name VARCHAR(255),  
    address VARCHAR(255),  
    city VARCHAR(255)
  );
```

<br>
<br>
<br>

# DATA MANIPULATION
  ##  [``INSERT`` DATA]()
How to Insert Data in SQL
To insert data, we use ``INSERT INTO``, specifying the table name and attributes. For example, when inserting into the students and courses tables, we don't need to include default values such as load and update dates. Here is a practical example:
```
INSERT INTO students (first_name, last_name, email)
VALUES ('Carolina', 'Pérez', 'carolina@example.com');
```

  ### How to Insert Data into Tables with Foreign Keys
When working with foreign keys, we first identify the relevant IDs. Suppose we want to enroll Carolina in the French course. Carolina has the ID 1, and the French course is course 1. The insert would be:
```
INSERT INTO student_course_relation (student_id, course_id)
VALUES (1, 1);
```

  ### How to Validate the Inserted Data
To validate that the data has been inserted correctly, we use ``SELECT * FROM`` followed by the table name. This way, we can verify that the records are in place.
```
SELECT * FROM students;
```
```
SELECT * FROM student_course_relation;
```

<br>
<br>

  ##  [``SELECT`` DATA]()
The ``SELECT * FROM`` command is a fundamental tool in SQL that allows for easy and quick data querying. This statement is used to retrieve all the information from a specific table in the database.

  ### How does the SELECT * FROM command work?
The ``SELECT`` command is the reserved word that initiates the query. The asterisk (``*``) indicates that you want to select all columns from the specified table. The word ``FROM`` is used to reference the source table of the query. For example, if we execute ``SELECT * FROM courses``, we will get all the rows and columns from the courses table.

  ### How to specify columns instead of selecting all?
If we only want to query specific columns, we replace the asterisk with the column names. For example, ``SELECT name, description FROM courses`` will only return the name and description columns from the courses table.

  ### How to order the query results?
We can order the results using the ``ORDER BY`` clause. This allows us to specify whether we want the data to be sorted in ascending (default) or descending order. For example, ``SELECT * FROM courses ORDER BY load_date DESC`` will sort the results by the load_date column in descending order.

  ### How to handle common errors in queries?
It is normal to encounter syntax errors when writing SQL queries. For example, if we try to execute ``SELECT email, first_name FROM instructors ORDER BY load_date``, and load_date is not the correct column name, we will get an error. Ensuring the exact column names are used, which can be case-sensitive in some database engines, is crucial to avoid these errors.

  ### What additional considerations should we have?
It's important to remember that some database management systems are case-sensitive. This means that column names must exactly match how they were defined in the database. Practicing with different tables and exercises can help you become more familiar with these tools and improve your ability to perform efficient queries.

<br>
<br>

  ##  [PRACTICE: ``SELECT`` IN SQL]()
```
SELECT * FROM cursos;
SELECT COUNT(*) AS cantidad FROM cursos;
SELECT nombre AS name, profe AS teacher, n_calificaciones AS n_reviews FROM cursos;
```

<br>
<br>

  ##  [``UPDATE`` DATA]()
Updating data in a database is essential to maintain the accuracy and integrity of the information. Using the UPDATE statement allows you to correct errors without having to delete and reinsert records.

  ### How is the UPDATE statement used in a database?
The **UPDATE** statement is a powerful tool that allows you to modify information in existing records within a table. For example, if an employee, Julian, receives an incorrect salary due to an error in data entry, we can fix it with a simple command.

  ### What is the basic structure of the UPDATE statement?
The structure for performing an **UPDATE** in your database is as follows:
  - Use the reserved word **UPDATE** followed by the name of the table.
  - Use **SET** to specify the column you are going to modify and the new value.
  - Filter the information with **WHERE** to avoid modifying all records.
```
UPDATE table_name
SET column_to_modify = 'new_value'
WHERE condition
```

  ### How do you avoid modifying all records when using UPDATE?
To avoid modifying all the records in the table, it is crucial to use an appropriate filter with **WHERE**. For example, if you want to change Julian's first name to Carolina, your statement would be:
```
UPDATE employees
SET first_name = 'Carolina'
WHERE first_name = 'Julian'
```

  ### What happens if we forget the WHERE filter?
If we forget the **WHERE** filter, all the records in the table will be modified. For example, if you simply execute:
```
UPDATE employees
SET first_name = 'Carolina'
```
All the records will have the first name Carolina, which is a serious error.

  ### How do you verify the changes made with the UPDATE statement?
After performing an **UPDATE**, it is important to verify that the changes have been applied correctly. This can be done using a **SELECT** statement to query the table.
```
SELECT * FROM employees WHERE first_name = 'Carolina'
```

  ### How to fix a specific error in the salary table?
If the data engineer needs to correct Julian's salary to $5000, the statement would be:
```
UPDATE employees
SET salary = 5000
WHERE first_name = 'Julian'
```

<br>
<br>

  ##  [``DELETE`` DATA]()
Avoiding errors in production is crucial in SQL. Stories of engineers who delete data by omitting a **WHERE** clause are common and preventable. Here, we will learn how to use DELETE correctly to avoid these errors.


  ### How to avoid critical errors when using DELETE in SQL?
To avoid accidentally deleting all information from a table, we must always use the **WHERE** clause in our **DELETE** statements. The basic structure is:

  - ``DELETE FROM table_name``
  - ``WHERE condition;``

Omitting the **WHERE** clause will delete all records in the table, potentially causing disasters in production.

  ### What is the correct syntax for DELETE?
The basic syntax includes:
```
DELETE FROM table_name
WHERE condition;
```
Before executing DELETE, it is important to check the table's contents. For example, if we want to delete a specific record:
  - Query the table to view the records.
  - Use the primary key to specify the record to delete.

  ### How to execute DELETE correctly?
Imagine a table that relates students to their courses. We want to delete the student with ID 2:

  - Query the table to view the records.
  - Execute:
    ```
    DELETE FROM student_course_relation
    WHERE student_id = 2;
    ```
  - Verify that the record has been deleted correctly.

  ### What common errors should we avoid?
A common error is executing DELETE without a WHERE clause. This deletes all records:
```
DELETE FROM student_course_relation;
```
Identifying this error is crucial for maintaining data integrity. Always analyze the syntax before executing it.


  ### What other essential SQL statements are there?
  - SELECT
    - Basic syntax: ``SELECT fields FROM table;``
    - Use ``*`` for all fields or specify the necessary fields.
    - Can be combined with **WHERE**, **GROUP** **BY**, **ORDER** **BY**, etc.

  - UPDATE
    - Syntax: ``UPDATE table SET field = value WHERE condition;``
    - IMPORTANT: Always use **WHERE** to avoid updating all records.

  - CREATE DATABASE and CREATE TABLE
    - ``CREATE DATABASE database_name;``
    - ``CREATE TABLE table_name (field data_type constraints, ...);``
Clearly defining data types and constraints is fundamental for the database structure.

  ### What best practices should we follow?
  - Constant use of the **WHERE** clause
  - Verifying data types and constraints
  - Clear and consistent naming of tables and databases

<br>
<br>

  ##  [PRACTICE: CRUD WITH SQL]()
```
SELECT * FROM students;

INSERT INTO students (nombre, apellido, edad, correo_electronico, telefono) VALUES ("Alexis", "Araujo", 33, "alexis@gmail.com", "777-1234");

DELETE FROM students WHERE id = 1;

UPDATE students SET edad = 55 WHERE id = 2;
```

<br>
<br>
<br>

# ADVANCED DATA MANIPULATION
  ##  [MYSQL SERVER AND MYSQL WORKBENCH INSTALLATION]()
  ### Download MySQL DMG:
  - Go to the MySQL downloads page: MySQL Downloads.
  - Download the DMG file for macOS.

  ### Install MySQL:
  - Open the downloaded DMG file.
  - Follow the instructions in the installation wizard.

  ### Configure MySQL Server:
  - During installation, you will be prompted to set the root password.
  - Once installed, open “System Preferences” and select “MySQL” to start the server.

<br>
<br>

  ##  [WHAT IS THE SQL ``WHERE`` CLAUSE?]()
  ### How to use the WHERE statement to query data?
The **WHERE** statement is used in different contexts, such as modifying data with **UPDATE**, deleting data with **DELETE**, and querying data with **SELECT**. To start, the basic syntax of **WHERE** includes the reserved word, the column name, and logical operators. For example, to query a specific instructor:
```
SELECT * FROM instructors WHERE INSTRUCTORID = 1;
SELECT * FROM instructors WHERE INSTRUCTORID IN (1,2,3);
```

  ### How to use logical operators in MySQL?
You can use various logical operators, such as the equal sign (``=``) for equality and the exclamation mark followed by an equal sign (``!=``) for differences. For example, to exclude an instructor with a specific ID:
```
SELECT * FROM instructors WHERE INSTRUCTORID != 1;
```

  ### How to filter text data in MySQL?
To filter text data, use single quotes around the value. For example, to find an instructor named John:
```
SELECT * FROM instructors WHERE name = 'John';
```

  ### How to work with numeric data in MySQL?
Operators for numeric data allow comparisons such as greater than or less than. For example, to find instructors with a salary greater than 5000 dollars:
```
SELECT * FROM instructors WHERE salary > 5000;
```

  ### How to use the BETWEEN operator in MySQL?
The BETWEEN operator is used to specify a range of values. For example, to find instructors with salaries between 5000 and 9000 dollars:
```
SELECT * FROM instructors WHERE salary BETWEEN 5000 AND 9000;
```

<br>
<br>

  ##  [FILTER AND ORDER DATA IN SQL (``LIKE``)]()
How to filter names by the initial letter in a table?
To display only the information of names that start with the letter "C", we can use the reserved word **LIKE** in SQL. For example, if we want to see names that start with "C", the query would be:
```
SELECT * FROM table WHERE name LIKE 'C%';
```
This will show all names that begin with "C".

  ### How to filter last names that end with a specific letter?
To display information of people whose last name ends with "O", the SQL query would be:
```
SELECT * FROM table WHERE last_name LIKE '%O';
```
This will select all last names that end with the letter "O".

  ### How to search for characters anywhere in the name?
If we need to display information of people who have the letter "A" anywhere in their name, the query would be:
```
SELECT * FROM table WHERE name LIKE '%A%';
```
This will select all names that contain the letter "A" in any position.

  ### How to filter data using the LIKE operator in SQL?
To filter last names that end with "Z", we use the following query:
```
SELECT * FROM table WHERE last_name LIKE '%Z';
```
For example, last names like Pérez, González, López, and Martínez will be selected.

  ### How to filter names that begin with a specific letter?
To display names that begin with the letter "J", we modify the query as follows:
```
SELECT * FROM table WHERE name LIKE 'J%';
```
This will select names like Jiménez.

  ### Is it necessary to display all columns in the query?
It is not necessary. In complex queries or Big Data analysis, it is better to specify only the required columns. For example, to show only the first name and last name of people who are 20 years old, we use:
```
SELECT first_name, last_name FROM table WHERE age = 20;
```
Although we don't show the age in the SELECT, we use it in the WHERE condition.

  ### How to filter last names that contain a specific letter?
To display people whose last name contains the letter "O", the query would be:
```
SELECT * FROM table WHERE last_name LIKE '%O%';
```
This will select last names like González, López, and Rodríguez.

  ### How to combine multiple criteria in a query?
If we want to see names that start with "M", people who are 20 years old, and last names that contain "O", the query would be:
```
SELECT first_name, last_name FROM table 
WHERE name LIKE 'M%' AND age = 20 AND last_name LIKE '%O%';
```
This will filter specific data based on multiple criteria, optimizing the query and improving system performance.

<br>
<br>

  ## [PRACTICE: SQL FILTER DATA WITH ``WHERE``]()
```
SELECT * FROM COURSES WHERE n_reviews > 0;

SELECT * FROM COURSES WHERE n_reviews BETWEEN 1 AND 100;

SELECT name FROM COURSES WHERE name LIKE "%SQL%";
```

<br>
<br>

  ##  [TEXTUAL COMPARISON CLAUSES IN SQL (``AND``, ``NULL``, ``IN``, ``NOT``)]()
The use of logical operators is essential in data analysis to refine queries and obtain precise results. By mixing these operators, we can apply multiple criteria simultaneously, which is a common practice for data engineers in stored procedures and views.

  ### How do we use logical operators in a query?
To illustrate the use of logical operators, let's take the instructors table and apply several criteria. First, we can filter instructors whose salary is greater than 50 thousand dollars. Then, we add the AND operator to specify that the first name must start with the letter J. We observe that the results decrease since the criteria are being nested.
```
SELECT * FROM INSTRUCTORS WHERE SALARY > 50000 AND FIRSTNAME LIKE "J%";
```

  ### What if we want exclusive criteria?
If we want exclusive criteria, we use the OR operator. For example, we can show instructors with a salary greater than 50 thousand dollars or whose first name starts with J. The results increase because either of the two conditions can be met.
```
SELECT * FROM INSTRUCTORS WHERE SALARY > 50000 OR FIRSTNAME LIKE "J%";
```

  ### How do we add multiple conditions?
We can add more conditions to further refine our query. For example, if we also want to include names that start with D, we combine the logical operators. Thus, we get a more extensive list that includes names like Jessica, Jane, Daniel, and James.
```
SELECT * FROM INSTRUCTORS WHERE SALARY > 50000 AND FIRSTNAME LIKE "J%" OR FIRSTNAME LIKE "D%";
```

  ### How do we handle null values?
In the day-to-day work of a data engineer, null values are crucial. We use the WHERE clause with IS NOT NULL to get records where the first name is not null. If we want information from records with null names, we switch to IS NULL. This allows us to handle incomplete data effectively.
```
SELECT * FROM INSTRUCTORS WHERE FIRSTNAME IS NOT NULL;
```

  ### How do we exclude certain values?
To exclude specific values, we use the NOT IN operator. For example, if we do not want to see students who are 20 years old, we use NOT IN (20). This way, we get all students except those who are 20 years old.
```
SELECT * FROM INSTRUCTORS WHERE AGE NOT IN (20);
```

<br>
<br>

  ##  [BASIC ARITHMETIC FUNCTIONS IN SQL (``COUNT``, ``SUM``, ``AVG``)]()

  ### ``GROUP BY``
This command allows us to group the information based on any field in our table.
```
SELECT COURSEID, COUNT(STUDENT_ID) FROM STUDENT_COURSE GROUP BY COURSEID;
``` 

  ### ```SUM```
This command allows us to sum all the values of a specified column. Additionally, we can add an alias, which is a kind of variable where we store the obtained value.  
```
SELECT SUM(SALARY) AS "Salary" FROM INSTRUCTORS;
```

  ### ```AVG```

This command gives us the average value of the records in a specific column.
```
SELECT SUM(SALARY) AS "SALARY", AVG(SALARY) AS "AVG" FROM INSTRUCTORS;
```

<br>
<br>

  ##  [BASIC ARITHMETIC FUNCTIONS IN SQL (``MIN``, ``MAX``)]()
  ## ``MIN`` & ``MAX``
These commands give us the minimum and maximum values of specific columns.
```
SELECT MIN(AGE) AS "MINAGE", MAX(AGE) AS "MAXAGE" FROM STUDENTS;
```

  ## ``ROUND``
This command rounds the values in the AGE column and returns them, displaying the same number of records but with the AGE column showing the rounded values.
```
SELECT ROUND(AGE) FROM STUDENTS;
```

<br>
<br>
<br>

# DATA GROUPING
  ## [SQL DATA GROUPING: ``GROUP BY``, ``HAVING`` AND ``CASE`` FOR ADVANCED ANALYTICS]()
  ### ``GROUP BY``
Este comando nos permite agrupar los resultados en base a un campo especificado, para evitar duplicados en la consulta. Por ejemplo, en la consulta inferior estamos obteniendo la cantidad de alumnos por cada uno de los cursos disponibles en la tabla STUDENT_COURSE
```
SELECT COURSEID, COUNT(*) FROM STUDENT_COURSE GROUP BY COURSEID
```

  ### ``HAVING COUNT``

This command allows us to limit the results based on a condition, in this case, that the number of students in each course is greater than 3.
```
SELECT COURSEID, COUNT(*) FROM STUDENT_COURSE GROUP BY COURSEID HAVING COUNT(*) > 3
```

  ### ``CASE / WHEN``
The CASE statement in SQL is a conditional expression that provides a way to return different values based on different conditions. It's similar to the if-then-else statements in programming languages. The CASE statement evaluates a list of conditions and returns one of multiple possible result expressions.
```
SELECT CASE WHEN AGE BETWEEN 18 AND 20 THEN "TEAM A" ELSE "TEAM B" END
FROM STUDENTS
```
```
SELECT AGE, CASE WHEN AGE BETWEEN 18 AND 20 THEN "TEAM A" ELSE "TEAM B" END
FROM STUDENTS
GROUP BY AGE
```

<br>
<br>

  ## [PRACTICE: DATA GROUPING AND SORTING]()

<br>
<br>

  ## [HOW DO THE ``INNER JOIN``, ``LEFT JOIN``, ``RIGHT JOIN`` AND ``FULL JOIN`` WORK]()

<br>
<br>

  ## [PRATICE: SQL LEFT JOIN]()


<br>
<br>
<br>

# DATA TRANSFORMATION
  ##  [SQL MATERIALIZED VIEWS: HOW TO OPTIMIZE YOUR QUERYS AND REPORTS]()

<br>
<br>

  ##  [PRATICE: CREATE SQL MATERIALIZED VIEWS]()

<br>
<br>

  ##  [SQL DATABASE OPTIMIZATION: ``CREATE INDEX`` AND ``TRIGGER``]()

<br>
<br>

  ##  [SQL MATERIALIZED AND TEMPORARY VIEWS]()

<br>
<br>

  ##  [SQL COMMON TABLE EXPRESSIONS]()

<br>
<br>
<br>

# STORED PROCEDURES
  ##  [SQL STORED PROCEDURES]()

<br>
<br>

  ##  [SQL STORED PROCEDURES: VARIABLE MANAGEMENT AND EXCEPTION HANDLING]()

<br>
<br>

  ##  [DATABASE BACKUPS AND RESTORATION]()

<br>
<br>

  ##  [SQL DATABASE SECURITY]()

<br>
<br>
<br>

# ADVANCED DATA ANALYTICS 
  ##  [POWERING DATA IN THE CLOUD: DATA SCIENCE, BIG DATA, ML AND AI]()

<br>
<br>

  ## [SQL FOR DATA ANALYTCS: FIRST STEPS WITH POWER BI]()

<br>
<br>
<br>

# AUTHOR
This project was developed by *Juan Cumbe*. If you have any questions or suggestions about the project, feel free to contact me via [e-mail](mailto:hello@juancumbe.com) or my [Linkedin](https://www.linkedin.com/in/juancumbeq/) profile.