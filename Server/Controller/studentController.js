import mysql from "mysql";
import { config } from "../Db/config.js";

// Getting all students
export const getStudents = async (req, res) => {
  try {
    const connection = mysql.createConnection(config.sql);
    connection.query("SELECT * FROM students", (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong. ${error.message}` });
  }
};

// Adding a new student
export const addStudent = async (req, res) => {
  const { name, email } = req.body;
  try {
    const connection = mysql.createConnection(config.sql);
    connection.query(
      "INSERT INTO students (name, email) VALUES (?, ?)",
      [name, email],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({ message: "Student added successfully!" });
      }
    );
  } catch (error) {
    res
      .status(400)
      .json({ message: `Failed to add Student. ${error.message}` });
  }
};

// Getting a single student
export const getStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = mysql.createConnection(config.sql);
    connection.query(
      "SELECT * FROM students WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        if (results.length === 0) {
          res.status(404).json({ message: `No Student with the id: ${id}.` });
        } else {
          res.json(results[0]);
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: `Something went wrong. ${error.message}` });
  }
};

// Updating a student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const connection = mysql.createConnection(config.sql);
    connection.query(
      "UPDATE students SET name = ?, email = ? WHERE id = ?",
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({ message: "Student updated successfully!" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: `Something went wrong. ${error.message}` });
  }
};

// Deleting a student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = mysql.createConnection(config.sql);
    connection.query(
      "DELETE FROM students WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({ message: "Student deleted successfully!" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: `Something went wrong. ${error.message}` });
  }
};
