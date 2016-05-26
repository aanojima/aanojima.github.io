<?php

$data = $_GET["data"];
$filename = "../data/" . htmlspecialchars($data) . ".txt";
$file = fopen($filename, "r") or die("Unable to open file");
echo fread($file, filesize($filename));
fclose($file);

?>