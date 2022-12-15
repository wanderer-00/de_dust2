var areaData = [
    {
        "name": "мид",
        "points": "400 146, 500 146, 500 846, 400 846",
        "fill": "#16A085",
        "secondName": [""]
    },
    {
        "name": "лонг",
        "points": "810 34, 910 34, 910 684, 810 684",
        "fill": "green",
        "secondName": [""]
    },
    {
        "name": "шорт",
        "points": "500 260, 660 260, 660 580, 500 580",
        "fill": "yellow",
        "secondName": [""]
    },
];

var hideShowArea = false; // скрыть/показать позиции

function area(){
    var area = document.querySelector('.area');
    
    if (hideShowArea == false){
        
        for (i=0; i<areaData.length; i++){
            var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
            newElement.setAttribute("points", areaData[i].points);
            newElement.setAttribute("fill", areaData[i].fill);
            area.appendChild(newElement);
        };
        
        hideShowArea = true;
        
    }
    else {
        area.innerHTML = '';
        hideShowArea = false;
    }
}