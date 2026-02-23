<?php
// backend/admin/index.php
session_start();
require_once '../config.php';

if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
}

$bookings = $conn->query("SELECT * FROM bookings ORDER BY created_at DESC");
$contacts = $conn->query("SELECT * FROM contacts ORDER BY created_at DESC");
$emails = $conn->query("SELECT * FROM newsletter ORDER BY created_at DESC");
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 font-sans">
    <nav class="bg-[#0B0F3B] text-white py-6 px-10 flex justify-between items-center sticky top-0 z-50">
        <h1 class="text-2xl font-black uppercase tracking-widest">Dashboard</h1>
        <div class="flex items-center gap-6">
            <span class="text-sm font-medium opacity-70">Welcome, <?php echo $_SESSION['admin']; ?></span>
            <a href="logout.php" class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold text-xs transition-all uppercase tracking-widest">Logout</a>
        </div>
    </nav>

    <div class="p-10 space-y-12">
        <!-- Bookings -->
        <section>
            <h2 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-blue-600 rounded-full"></span> Service Bookings
            </h2>
            <div class="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-slate-50 text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                        <tr>
                            <th class="p-6">Client</th>
                            <th class="p-6">Contact</th>
                            <th class="p-6">Appliance</th>
                            <th class="p-6">Location</th>
                            <th class="p-6">Date</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-50">
                        <?php while($row = $bookings->fetch_assoc()): ?>
                        <tr class="hover:bg-slate-50 transition-all">
                            <td class="p-6 font-bold text-slate-900"><?php echo $row['name']; ?></td>
                            <td class="p-6">
                                <p class="text-sm text-slate-600 font-medium"><?php echo $row['email']; ?></p>
                                <p class="text-xs text-slate-400"><?php echo $row['phone']; ?></p>
                            </td>
                            <td class="p-6">
                                <span class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase"><?php echo $row['appliance']; ?></span>
                            </td>
                            <td class="p-6 text-sm text-slate-500 max-w-xs truncate"><?php echo $row['location']; ?></td>
                            <td class="p-6 text-xs text-slate-400 font-medium"><?php echo date('M d, Y H:i', strtotime($row['created_at'])); ?></td>
                        </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Contact Inquiries -->
        <section>
            <h2 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-orange-500 rounded-full"></span> Contact Inquiries
            </h2>
            <div class="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-slate-50 text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                        <tr>
                            <th class="p-6">Sender</th>
                            <th class="p-6">Subject</th>
                            <th class="p-6">Message</th>
                            <th class="p-6">Date</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-50">
                        <?php while($row = $contacts->fetch_assoc()): ?>
                        <tr class="hover:bg-slate-50 transition-all">
                            <td class="p-6">
                                <p class="font-bold text-slate-900"><?php echo $row['name']; ?></p>
                                <p class="text-xs text-slate-400"><?php echo $row['email']; ?></p>
                            </td>
                            <td class="p-6 text-sm font-bold text-slate-700"><?php echo $row['subject']; ?></td>
                            <td class="p-6 text-sm text-slate-500 italic max-w-md"><?php echo $row['message']; ?></td>
                            <td class="p-6 text-xs text-slate-400 font-medium"><?php echo date('M d, Y H:i', strtotime($row['created_at'])); ?></td>
                        </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Newsletter -->
        <section>
            <h2 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-green-500 rounded-full"></span> Newsletter Subscribers
            </h2>
            <div class="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden max-w-2xl">
                <table class="w-full text-left">
                    <thead class="bg-slate-50 text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                        <tr>
                            <th class="p-6">Email Address</th>
                            <th class="p-6">Subscribed At</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-50">
                        <?php while($row = $emails->fetch_assoc()): ?>
                        <tr class="hover:bg-slate-50 transition-all">
                            <td class="p-6 font-bold text-slate-900"><?php echo $row['email']; ?></td>
                            <td class="p-6 text-xs text-slate-400 font-medium"><?php echo date('M d, Y H:i', strtotime($row['created_at'])); ?></td>
                        </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</body>
</html>
