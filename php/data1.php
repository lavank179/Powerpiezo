<?php

// Create connection
$link = mysqli_connect('localhost', 'chlavank_user1', 'LAVAN@801kumar', 'chlavank_powerd');
// Check connection
if (mysqli_connect_error()) {
            
    die ("Database Connection Error");
    
}

$jsonArray = array();



        $query1 = "SELECT SUM(voltage) AS voltage,UNIX_TIMESTAMP(timed) AS datetime FROM powerdat WHERE Date(timed)=Date(Now()) GROUP BY HOUR(timed)";
        $result1 = mysqli_query($link, $query1);
            $rows = array();
            $table = array();

            $table['cols'] = array(
            array(
              'label' => 'Date_Time', 
              'type' => 'datetime'
            ),
            array(
              'label' => 'voltage', 
              'type' => 'number'
            )
            );

            while($row = mysqli_fetch_array($result1))
            {
            $sub_array = array();
            $datetime = explode(".", $row["datetime"]);
            $sub_array[] =  array(
                  "v" => 'Date(' . $datetime[0] . '000)'
                );
            $sub_array[] =  array(
                  "v" => $row["voltage"]
                );
            $rows[] =  array(
                "c" => $sub_array
                );
            }
            $table['rows'] = $rows;
            $jsonTable = json_encode($table);
            echo $jsonTable;
            return $jsonTable;

?>