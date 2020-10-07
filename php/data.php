<?php

// Create connection
$link = mysqli_connect('localhost', 'chlavank_user1', 'LAVAN@801kumar', 'chlavank_powerd');
// Check connection
if (mysqli_connect_error()) {
            
    die ("Database Connection Error");
    
}

$query = "SELECT voltage, timed as datetime FROM powerdat ORDER BY id desc LIMIT 1";

$result = mysqli_query($link, $query);


        $row = mysqli_fetch_assoc($result);
        $voltage = floatval($row["voltage"]);
        $dated = $row['datetime'];
        $dated = new DateTime($dated, new DateTimeZone('Asia/Kolkata'));
        echo "<div>" . $voltage  . "v<br><span style='font-size: 20px; color: black'>" . $dated->format("d/m/y  H:i A") . ".</span></div>";
?>