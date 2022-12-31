var upPositionsData = [
    [564, 197],
    [72, 314],
    [66, 252],
    [145, 313],
    [148, 176], // Б танцпол за ящиком
    [93,  74 ], // Б даль
    [210, 314], // Б за машиной
    [310, 120],
    [70,  440], // тёмка за ящиком
    [274, 438], // тёмка винт на ящике
    [284, 388], // тёмка нижняя на ящике
    [645, 332], // short за лестницей
    [608, 250], // 
    [836, 184], // 
    [936, 260], //
    [910, 492], // long платформа за углом
];

var hideShowUpPositions = false; // скрыть/показать позиции

function upPositions (){
    var upPositions = document.querySelector('.upPositions');
    
    if (hideShowUpPositions == false){
        
        for (i=0; i<upPositionsData.length; i++){
            var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            newElement.setAttribute("cx", upPositionsData[i][0]);
            newElement.setAttribute("cy", upPositionsData[i][1]);
            newElement.setAttribute("r", "4");
            newElement.setAttribute("fill", "red");
            positions.appendChild(newElement);
        };
        
        hideShowUpPositions = true;
        
    }
    else {
        upPositions.innerHTML = '';
        hideShowUpPositions = false;
    }
}