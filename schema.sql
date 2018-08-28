-- Create database

CREATE DATABASE IF NOT EXISTS grocery_list;

-- Use database

USE grocery_list;

-- Create table

CREATE TABLE IF NOT EXISTS groceries (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Does not need 'NOT NULL'
    -- PRIMARY KEY (id),
    `name` TEXT NOT NULL,
    quantity INT NOT NULL
);

-- Insert sample item
INSERT INTO groceries VALUES (1, "pizza", 5);

