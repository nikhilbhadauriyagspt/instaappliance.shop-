<?php
// backend/api/booking.php
require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = $conn->real_escape_string($data['name']);
    $phone = $conn->real_escape_string($data['phone']);
    $email = $conn->real_escape_string($data['email']);
    $appliance = $conn->real_escape_string($data['appliance']);
    $location = $conn->real_escape_string($data['location']);

    $sql = "INSERT INTO bookings (name, phone, email, appliance, location) VALUES ('$name', '$phone', '$email', '$appliance', '$location')";
    
    if ($conn->query($sql)) {
        response("success", "Booking saved successfully");
    } else {
        response("error", "Failed to save booking");
    }
}
?>
