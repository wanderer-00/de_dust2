google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var red = [
    ['№', maps[0], maps[1], maps[2], maps[3]],
    ['1', one[0][0][0], one[1][0][0], one[2][0][0], one[3][0][0]],
    ['2', one[0][1][0], one[1][1][0], one[2][1][0], one[3][1][0]],
    ['3', one[0][2][0], one[1][2][0], one[2][2][0], one[3][2][0]],
    ['4', one[0][3][0], one[1][3][0], one[2][3][0], one[3][3][0]]
]
//console.log(red);



/***********************************************/
var green = []; // создание массива

var columns = one.length;
var lines = one[0].length;

green.push(['№'])
for (i=0; i<)


for (i=0; i<one.length; i++){
    
}
console.log(green);
/***********************************************/



var blue = [
    ['№', maps[0], maps[1], maps[2]],
    ['1', 31.734, 2, 3],
    ['2', 2, 4, 4],
    ['3', 3, 2, 1],
    ['4', 1, 2, 4]
]


function drawChart() {
var data = google.visualization.arrayToDataTable(red);

var options = {
  title: 'Время (секунда)',
  hAxis: {title: 'попытка',  titleTextStyle: {color: '#333'}},
  vAxis: {minValue: 0}
};

var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
chart.draw(data, options);
}