// Import necessary modules
const express = require('express');
const { Pool } = require('pg');

// Initialize Express app and PostgreSQL pool
const app = express();
const pool = new Pool({
  user: 'yourUser',
  host: 'localhost',
  database: 'todo_app',
  password: 'yourPassword',
  port: 5432,
});

app.use(express.json()); // For parsing application/json

// Define the Task class
class Task {
  constructor(id, title, description, dueDate, isCompleted) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
  }

  static async create({ title, description, dueDate }) {
    const result = await pool.query(
      'INSERT INTO tasks (title, description, due_date, is_completed) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, dueDate, false]
    );
    return new Task(...Object.values(result.rows[0]));
  }

  async save() {
    await pool.query(
      'UPDATE tasks SET title = $1, description = $2, due_date = $3, is_completed = $4 WHERE id = $5',
      [this.title, this.description, this.dueDate, this.isCompleted, this.id]
    );
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows.length ? new Task(...Object.values(result.rows[0])) : null;
  }

  async delete() {
    await pool.query('DELETE FROM tasks WHERE id = $1', [this.id]);
  }
}

// Define the User class (for future user management)
class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  // Other methods for managing users can be added here
}

// Define the Database class for encapsulating database operations
class Database {
  static async getTasks() {
    const result = await pool.query('SELECT * FROM tasks');
    return result.rows.map(row => new Task(...Object.values(row)));
  }
}

// API Endpoints

// Create a new task
app.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Database.getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Get a task by ID
app.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) res.json(task);
    else res.status(404).json({ error: 'Task not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.title = req.body.title;
      task.description = req.body.description;
      task.dueDate = req.body.dueDate;
      task.isCompleted = req.body.isCompleted;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      await task.delete();
      res.json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
