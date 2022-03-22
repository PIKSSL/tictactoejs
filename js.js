window.addEventListener("load",init);

var tomb = ["1.tartalom","2.tartalom","3.tartalom","4.tartalom"]

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
    ID("tablazat").innerHTML = "egy random szöveg";
    kiiras();
    CLASS("tarolo")[1].style.border = "1px solid purple";
    for (let index = 0; index < 2; index++) {
        selector(".tarolo")[index].style.fontSize = "30px";
        
    }    
}


function kiiras(){
    var divek = ""
    for (let index = 0; index < tomb.length; index++) {
        divek = divek + "<div> <p id='"+index+"'>"+tomb[index]+"</p></div>";
        
    }
    ID("tablazat").innerHTML = divek;
    for (let index = 0; index < tomb.length; index++) {
        ID(index).addEventListener("click",kattint);
        
    }
}

function kattint(){
    var aktindex = (event.target.id);
    ID(aktindex).style.color = "red";
    ID(aktindex).style.backgroundColor = "lightblue";
    ID(aktindex).className="formazas";
}