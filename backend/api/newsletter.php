<?php
// backend/api/newsletter.php
require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $conn->real_escape_string($data['email']);

    $sql = "INSERT INTO newsletter (email) VALUES ('$email')";
    
    if ($conn->query($sql)) {
        response("success", "Subscribed successfully");
    } else {
        response("error", "Already subscribed or error occurred");
    }
}
?>
