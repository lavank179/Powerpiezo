<?php

// Create connection
$link = mysqli_connect('localhost', 'chlavank_user1', 'LAVAN@801kumar', 'chlavank_powerd');
// Check connection
if (mysqli_connect_error()) {
            
    die ("Database Connection Error");
    
}

$query = "SELECT voltage as voltage,timed as datetime FROM powerdat ORDER BY id desc LIMIT 1";

                $result = mysqli_query($link, $query);

                $row = mysqli_fetch_assoc($result);
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

            $sub_array = array();
            $datetime = explode(".", $row["datetime"]);
            $sub_array[] =  array(
                  "v" => 'Date(' . $datetime[0] . ')'
                );
            $sub_array[] =  array(
                  "v" => $row["voltage"]
                );
            $rows[] =  array(
                "c" => $sub_array
                );
            $table['rows'] = $rows;
            $jsonTable = json_encode($table);
            echo $jsonTable;
            return $jsonTable;
?>