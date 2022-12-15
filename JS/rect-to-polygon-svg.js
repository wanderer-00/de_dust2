$( document ).ready(function() {
  
  function getDimensions (string) {
    var arrayDimensions = string.split(' ');
    
    //разбор строки 'getDimensions', чтобы получить x, y, ширину и высоту
    var x = Number(arrayDimensions[2].split('"')[1]);
    var y = Number(arrayDimensions[3].split('"')[1]);
    var w = Number(arrayDimensions[7].split('"')[1]);
    var h = Number(arrayDimensions[8].split('"')[1]);
  
    //создание массива с этими переменными
    var data = [];
    data.push(Number(arrayDimensions[2].split('"')[1])); //x
    data.push(Number(arrayDimensions[3].split('"')[1])); //y
    data.push(Number(arrayDimensions[7].split('"')[1])); //w
    data.push(Number(arrayDimensions[8].split('"')[1])); //h
    
    
    function rect() {
      var x = data[0];
      var y = data[1];
      var w = data[2];
      var h = data[3];
      
      //создание точек полигона
      var newX = x+w;
      var newY = y+h;
      
      //создать вывод jade/pug в виде полигона
      console.log('polygon#'+arrayDimensions[1].split('"')[1]+'(x="'+x+'", y="'+y+'", fill="'+arrayDimensions[4].split('"')[1]+'", stroke="'+arrayDimensions[5].split('"')[1]+'", stroke-miterlimit="'+arrayDimensions[6].split('"')[1]+'")');
      console.log('points="'+x+' '+y+' '+newX+' '+y+' '+newX+' '+newY+' '+x+' '+newY+'"')
    }

    rect(data);

  }
  
  //вызов функции со строкой - получение вывода в консоли
  getDimensions('<rect id="ad-3-4" x="539.5" y="399.5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="81" height="81"/>');
});