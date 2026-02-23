<?php
// backend/api/admin_login.php
require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $user = $conn->real_escape_string($data['username']);
    $pass = $data['password'];

    $res = $conn->query("SELECT * FROM admins WHERE username = '$user'");
    if ($res->num_rows > 0) {
        $admin = $res->fetch_assoc();
        if (password_verify($pass, $admin['password'])) {
            // In a real app, use JWT. For now, we'll return a simple success.
            echo json_encode(["status" => "success", "token" => "admin_authenticated_session"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid password"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Admin not found"]);
    }
}
?>
