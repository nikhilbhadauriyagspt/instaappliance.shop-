<?php
// backend/admin/login.php
session_start();
require_once '../config.php';

if (isset($_SESSION['admin'])) {
    header("Location: index.php");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $conn->real_escape_string($_POST['username']);
    $pass = $_POST['password'];

    $res = $conn->query("SELECT * FROM admins WHERE username = '$user'");
    if ($res->num_rows > 0) {
        $admin = $res->fetch_assoc();
        if (password_verify($pass, $admin['password'])) {
            $_SESSION['admin'] = $admin['username'];
            header("Location: index.php");
        } else {
            $error = "Invalid password";
        }
    } else {
        $error = "Admin not found";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 h-screen flex items-center justify-center">
    <div class="bg-white p-10 rounded-3xl shadow-xl w-96">
        <h2 class="text-3xl font-black text-slate-900 mb-6 text-center">Admin Login</h2>
        <?php if(isset($error)) echo "<p class='text-red-500 mb-4 text-center'>$error</p>"; ?>
        <form method="POST" class="space-y-4">
            <input type="text" name="username" placeholder="Username" class="w-full p-4 bg-slate-50 rounded-xl outline-none border focus:border-blue-500 transition-all" required>
            <input type="password" name="password" placeholder="Password" class="w-full p-4 bg-slate-50 rounded-xl outline-none border focus:border-blue-500 transition-all" required>
            <button type="submit" class="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all">Login</button>
        </form>
    </div>
</body>
</html>
