window.addEventListener("load",init);
var valtozo = 0;
function ID(elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return document.getElementsByClassName(elem);
}
function selector(elem){
    return document.querySelectorAll(elem);
}

function init(){
    feltoltes();
}

function feltoltes(){
    var div = "";
    for (let index = 0; index < 9; index++) {
        div = div + "<div class='elem' id='"+index+"'></div>"
    }
    ID("tarolo").innerHTML = div;
    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click",kattint);
        
    }
}

function kattint(){
    var szam = valtozo;
    var iindex = (event.target.id);
    ID(iindex).style.backgroundColor = "red";
    if (szam % 2 === 0) {
        ID(iindex).innerHTML = "<p>X</p>";
        ID(iindex).removeEventListener("click",kattint);
        ID("kov").innerHTML = "<p><span>Következő játékos: "+ID("name1").value;+"</span></p>";
        valtozo+=1;
    }else if (szam === 0){
        ID(iindex).innerHTML = "<p>X</p>";
        ID(iindex).removeEventListener("click",kattint);
        ID("kov").innerHTML = "<p><span>Következő játékos: "+ID("name1").value;+"</span></p>";
        valtozo+=1;
    }else{
        ID(iindex).innerHTML = "<p>O</p>";
        ID(iindex).removeEventListener("click",kattint);
        ID("kov").innerHTML = "<p><span>Következő játékos: "+ID("name2").value;+"</span></p>";
        valtozo+=1;
    }
    if(valtozo === 9){
        valtozo = 0;
        document.querySelector("#aa").innerHTML = "<button id='gomb'>Újra</button>"
        ID("gomb").addEventListener("click",ujra);
    }
    

}
function ujra(){
    for (let index = 0; index < 9; index++) {
        document.querySelectorAll(".elem")[index].innerHTML = "";
        document.querySelectorAll(".elem")[index].style.backgroundColor = "white";
        ID(index).addEventListener("click",kattint);
        
    }
    ID("gomb").style.display = "none";
}

function jatekos(szam){
    var jatekos1 = ID("name1").value;
    var jatekos2 = ID("name2").value;

}