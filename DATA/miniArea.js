var miniAreaData = [
    {
        "name": "банка",
        "points": "663 550, 720 550, 720 652, 663 652",
        "secondName": [""]
    },
    {
        "name": "яма",
        "points": "830 546, 900 546, 900 680, 830 680",
        "secondName": [""]
    },
    {
        "name": "суицид",
        "points": "436 675, 468 675, 468 853, 436 853",
        "secondName": [""]
    },
    {
        "name": "тёмка",
        "points": "64 320, 166 320, 166 376, 426 376, 426 562, 64 562",
        "secondName": [""]
    },
    {
        "name": "CT",
        "points": "560 150, 660 150, 660 254, 560 254",
        "secondName": [""]
    },
    {
        "name": "TT",
        "points": "289 854, 476 854, 476 936, 289 936",
        "secondName": [""]
    },
    {
        "name": "A",
        "fill": "orange",
        "points": "600 34, 920 34, 920 284, 600 284",
        "secondName": ["бомбплэйс А"]
    },
    {
        "name": "B",
        "fill": "purple",
        "points": "60 16, 250 16, 250 320, 60 320",
        "secondName": ["бомбплэйс Б"]
    },
    {
        "name": "",
        "points": "",
        "secondName": [""]
    },
    {
        "name": "",
        "points": "",
        "secondName": [""]
    },
    {
        "name": "",
        "points": "",
        "secondName": [""]
    },
    {
        "name": "",
        "points": "",
        "secondName": [""]
    },
];

var hideShowMiniArea = false; // скрыть/показать позиции

function miniArea (){
    var miniArea = document.querySelector('.miniArea.area');
    
    if (hideShowMiniArea == false){
        
        for (i=0; i<miniAreaData.length; i++){
            var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
            newElement.setAttribute("points", miniAreaData[i].points);
            newElement.setAttribute("fill", miniAreaData[i].fill);
            miniArea.appendChild(newElement);
        };
        
        hideShowMiniArea = true;
        
    }
    else {
        miniArea.innerHTML = '';
        hideShowMiniArea = false;
    }
}