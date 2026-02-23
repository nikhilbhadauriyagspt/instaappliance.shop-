<?php
// backend/api/get_submissions.php
require_once '../config.php';

// In a real app, verify 'token' header here.
$bookings = $conn->query("SELECT * FROM bookings ORDER BY created_at DESC");
$contacts = $conn->query("SELECT * FROM contacts ORDER BY created_at DESC");
$newsletter = $conn->query("SELECT * FROM newsletter ORDER BY created_at DESC");

$data = [
    "bookings" => [],
    "contacts" => [],
    "newsletter" => []
];

while($row = $bookings->fetch_assoc()) $data['bookings'][] = $row;
while($row = $contacts->fetch_assoc()) $data['contacts'][] = $row;
while($row = $newsletter->fetch_assoc()) $data['newsletter'][] = $row;

echo json_encode(["status" => "success", "data" => $data]);
?>
