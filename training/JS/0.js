var main = document.querySelector('.main');
var Warmup = document.createElement('div');
Warmup.className = 'warmup';
Warmup.innerHTML = `[<div class="server">CGOSTATS.GG</div>] Warmup <br>[<div class="server">CGOSTATS.GG</div>] Prefire Summary<br>`;
document.body.append(Warmup);


for (i=0; i<one.length; i++){
    if (one[i][0][0] !== ''){
        var box = document.createElement('div');
        box.className = 'box';
        box.innerHTML += `
        [<div class="server">CGOSTATS.GG</div>] ${maps[0]} cleared in <div class="number">${one[i][0][0]}</div> after <div class="number">${one[i][0][1]}</div> attempt(s).<br>
        [<div class="server">CGOSTATS.GG</div>] ${maps[1]} cleared in <div class="number">${one[i][1][0]}</div> after <div class="number">${one[i][1][1]}</div> attempt(s).<br>
        [<div class="server">CGOSTATS.GG</div>] ${maps[2]} cleared in <div class="number">${one[i][2][0]}</div> after <div class="number">${one[i][2][1]}</div> attempt(s).<br>
        [<div class="server">CGOSTATS.GG</div>] ${maps[3]} cleared in <div class="number">${one[i][3][0]}</div> after <div class="number">${one[i][3][1]}</div> attempt(s).<br>
    `;
        main.append(box);
    } else {
        console.log('code 0');
    }
}

function best_attempts (){
    
}

function parser_results(){
    
}