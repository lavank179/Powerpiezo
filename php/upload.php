<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {

      $voltage = test_input($_POST["voltage"]);
      $total = test_input($_POST["total"]);
      $totalrows = test_input($POST["totalRows"]);
      $voltage1 = floatval($voltage);
      $total1 = floatval($total);
      
      // Create connection
      $link = mysqli_connect('localhost', 'chlavank_user1', 'LAVAN@801kumar', 'chlavank_powerd');
      // Check connection
      if (mysqli_connect_error()) {
            
        die ("Database Connection Error");
        
    }
      
      $query = "INSERT INTO powerdat (voltage, total, sv)
      VALUES ('" . $voltage1 . "', '" . $total1 . "','" . $totalrows . "')";
      
      if ( mysqli_query($link, $query) === TRUE) {
          echo "New record created successfully";
      } 
}
else {
  echo "No data posted with HTTP POST.";
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;

}
?>