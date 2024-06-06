-- Create the Students database
CREATE DATABASE Students;

-- Use the Students database
USE Students;

-- Create the students table
CREATE TABLE students (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

-- Query to select all records from the students table
SELECT * FROM students;
