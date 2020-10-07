$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });


$(document).ready(function(){
  setInterval(function(){
    $("#output1").load("./php/data.php");
    refresh();
  },500);
});


$(document).ready(function(){
  setInterval(function(){
    $.ajax({
          url: "./php/data1.php",
          type: "GET",
          async: true,
          success: function(results) {
              var results1 = JSON.parse(results);

                  google.load("visualization", "1", {packages:["corechart"]});
                  google.setOnLoadCallback(draw_chart);

                function draw_chart() {
                  var data = new google.visualization.DataTable(results1);

                  var options = {
                    title:'Sensors Data',
                    legend:{position:'right'},
                    chartArea:{width:'75%', height:'65%'},
                    curveType: 'function',
                        pointSize: 7,
                        dataOpacity: 0.3,
                        vAxis: {
                          title: 'Voltage',
                          textStyle: {
                             color: '#1a237e',
                             bold: true
                          }
                       },
                       hAxis: {
                        title: 'Time',
                        textStyle: {
                           color: '#1a237e',
                           bold: true
                        }
                     }
                    };
                    var chart = new google.visualization.LineChart(document.getElementById('line_chart1'));
                    chart.draw(data, options);
                }

          },
          error: function() {
              console.log('Cannot retrieve data.');
          }
      });
    
    refresh();
  },500);
});


$(document).ready(function(){
  setInterval(function(){
    $.ajax({
          url: "./php/data2.php",
          type: "GET",
          async: true,
          success: function(results) {
              var results1 = JSON.parse(results);

                  google.load("visualization", "1", {packages:["corechart"]});
                  google.setOnLoadCallback(draw_chart);

                function draw_chart() {
                  var data = new google.visualization.DataTable(results1);

                  var options = {
                    title:'Sensors Data',
                    legend:{position:'right'},
                    chartArea:{width:'75%', height:'65%'},
                    curveType: 'function',
                        pointSize: 7,
                        dataOpacity: 0.3,
                        vAxis: {
                          title: 'Voltage',
                          textStyle: {
                             color: '#1a237e',
                             bold: true
                          }
                       },
                       hAxis: {
                        title: 'Time',
                        textStyle: {
                           color: '#1a237e',
                           bold: true
                        }
                     }
                    };
                        var chart = new google.visualization.LineChart(document.getElementById('line_chart2'));
                        chart.draw(data, options);
                    }



          },
          error: function() {
              console.log('Cannot retrieve data.');
          }
      });
    
    refresh();
  },500);
});

$(document).ready(function(){
  setInterval(function(){
    $.ajax({
          url: "./php/data3.php",
          type: "GET",
          async: true,
          success: function(results) {
              var results1 = JSON.parse(results);

                  google.load("visualization", "1", {packages:["corechart"]});
                  google.setOnLoadCallback(draw_chart);

                function draw_chart() {
                  var data = new google.visualization.DataTable(results1);

                  var options = {
                    title:'Sensors Data',
                    legend:{position:'right'},
                    chartArea:{width:'75%', height:'65%'},
                    curveType: 'function',
                        pointSize: 7,
                        dataOpacity: 0.3,
                        vAxis: {
                          title: 'Voltage',
                          textStyle: {
                             color: '#1a237e',
                             bold: true
                          }
                       },
                       hAxis: {
                        title: 'Time',
                        textStyle: {
                           color: '#1a237e',
                           bold: true
                        }
                     }
                    };
                        var chart = new google.visualization.LineChart(document.getElementById('line_chart3'));
                        chart.draw(data, options);
                    }


          },
          error: function() {
              console.log('Cannot retrieve data.');
          }
      });
    
    refresh();
  },500);
});

$(document).ready(function(){
  setInterval(function(){
    $.ajax({
          url: "./php/data4.php",
          type: "GET",
          async: true,
          success: function(results) {
              var results1 = JSON.parse(results);

                  google.load("visualization", "1", {packages:["corechart"]});
                  google.setOnLoadCallback(draw_chart);

                function draw_chart() {
                  var data = new google.visualization.DataTable(results1);

                  var options = {
                    title:'Sensors Data',
                    legend:{position:'right'},
                    chartArea:{width:'75%', height:'65%'},
                    curveType: 'function',
                        pointSize: 7,
                        dataOpacity: 0.3,
                        vAxis: {
                          title: 'Voltage',
                          textStyle: {
                             color: '#1a237e',
                             bold: true
                          }
                       },
                       hAxis: {
                        title: 'Time',
                        textStyle: {
                           color: '#1a237e',
                           bold: true
                        }
                     }
                    };
                        var chart = new google.visualization.LineChart(document.getElementById('line_chart4'));
                        chart.draw(data, options);
                    }



          },
          error: function() {
              console.log('Cannot retrieve data.');
          }
      });
    
    refresh();
  },500);
});

var times = "";


$(document).ready(function(){
  setInterval(function(){
    $.ajax({
          url: "./php/gauge.php",
          type: "GET",
          async: true,
          success: function(results) {
            var results1 = JSON.parse(results);
            var volts = "";
             var times1 = results1.rows[0].c[0].v;
             var volts1 = results1.rows[0].c[1].v;
             if(times == times1 ){
               volts = "0";
             }
             else {
               volts = volts1;
               times = times1;
             }
             results1.rows[0].c[1].v = volts;

                  google.load("visualization", "1", {packages:["gauge"]});
                  google.setOnLoadCallback(draw_chart);

                function draw_chart() {
                  var data = new google.visualization.DataTable(results1);

                  var options = {
                    width: 500, height: 200,
                    redFrom: 9,
                    redTo: 10,
                    yellowFrom:7,
                    yellowTo: 9,
                    minorTicks: 5,
                    min: 0,
                    max: 10,
                    animation:{
                      duration: 1000,
                      easing: 'inAndOut',
                    },
                    title:'Piezo Sensor Data',
                    legend:{position:'bottom'},
                  };
                        var chart = new google.visualization.Gauge(document.getElementById('gauge_chart1'));
                        chart.draw(data, options);
                    }


          },
          error: function() {
              console.log('Cannot retrieve data.');
          }
      });
    
    refresh();
  },1500);
});
