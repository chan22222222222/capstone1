<?php
$host = 'localhost';
$user = 'root';
$pass = ''; // your db password
$db   = 'gamacare';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
