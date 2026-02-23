<?php
// backend/init_db.php
error_reporting(E_ALL);
ini_set('display_errors', 1);

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'appliance_vista_db');

echo "<h2>Database Setup Utility</h2>";

// 1. Initial Connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS);

if ($conn->connect_error) {
    die("<p style='color:red'>Connection failed: " . $conn->connect_error . " (Make sure XAMPP MySQL is running!)</p>");
}

// 2. Create Database
if ($conn->query("CREATE DATABASE IF NOT EXISTS " . DB_NAME)) {
    echo "<p style='color:green'>✓ Database '" . DB_NAME . "' ensured.</p>";
} else {
    die("<p style='color:red'>Error creating database: " . $conn->error . "</p>");
}

$conn->select_db(DB_NAME);

// 3. Create Tables
$tables = [
    "bookings" => "CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        phone VARCHAR(20),
        email VARCHAR(255),
        appliance VARCHAR(100),
        location TEXT,
        status ENUM('pending', 'completed') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )",
    "contacts" => "CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        subject VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )",
    "newsletter" => "CREATE TABLE IF NOT EXISTS newsletter (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )",
    "admins" => "CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE,
        password VARCHAR(255)
    )"
];

foreach ($tables as $name => $sql) {
    if ($conn->query($sql)) {
        echo "<p style='color:green'>✓ Table '$name' ensured.</p>";
    } else {
        echo "<p style='color:red'>Error creating table $name: " . $conn->error . "</p>";
    }
}

// 4. Default Admin
$check = $conn->query("SELECT * FROM admins WHERE username = 'admin'");
if ($check->num_rows == 0) {
    $pass = password_hash('password123', PASSWORD_DEFAULT);
    $conn->query("INSERT INTO admins (username, password) VALUES ('admin', '$pass')");
    echo "<p style='color:blue'><b>Note:</b> Default admin created (User: admin / Pass: password123)</p>";
}

echo "<hr><p><b>Setup Complete!</b> You can now close this page and use your website forms.</p>";
echo "<a href='admin/login.php' style='padding:10px 20px; background:#1E63FF; color:white; text-decoration:none; border-radius:5px;'>Go to Admin Login</a>";
?>
