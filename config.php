<?php
$db_host = "localhost";
$db_name = "shop_db";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Connected to shop_db successfully!";
} catch (PDOException $e) {
    echo "❌ Connection failed: " . $e->getMessage();
}
?>
