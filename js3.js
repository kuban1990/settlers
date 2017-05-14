document.addEventListener("DOMContentLoaded", function(){
    
    
    // funkcja - dodawanie surowców
    
    var addingRes = function(x){
        x.wood += 1
        x.bricks += 1
        x.food += 1
        x.wheat += 1
};
    
// funckja - pokzywanie wszystkich kart gracza   
var showPlyerCards = function(x){   
    for (var i = 0; i < x.length; i++){
                    var newCardDisplay = document.createElement("div");
                    newCardDisplay.style.float = "left";
                    newCardDisplay.style.width = "40px";
                    newCardDisplay.style.height = "60px";
                    newCardDisplay.style.margin = "5px";
                    newCardDisplay.style.border = "1px solid black";
                    newCardDisplay.style.backgroundColor = "white";
                    newCardDisplay.classList.add("smallCard")
                    displayingCards.appendChild(newCardDisplay);
                    newCardDisplay.addEventListener('click', function(){
                    buyField.style.display = "inline-block";
                    buyField.style.zIndex = "1";  
                    buyField.firstElementChild.innerText = this.innerText;
                    });
                    newCardDisplay.style.fontSize = "5px";
                    displayingCards.children[i+2].innerText = playerCards1[i]; 
                    
                }   
}    
    
    
// funckja - surowce gracza
    
var playerDisplayData = function(x, y){
    playerData.style.color = x;
    playerName.innerText = y.name;
    playerResources.innerText = "Resources:";
    playerWood.innerText = "Wood = " + y.wood;
    playerBricks.innerText = "Bricks = " + y.bricks;
    playerIron.innerText = "Iron = " + y.iron;
    playerSheeps.innerText = "Food = " + y.food;
    playerStones.innerText = "Stones = " + y.stones;
    playerWheat.innerText = "Wheat = " + y.wheat;
    playerCommodities.innerText = "Commodities:"
    playerLeather.innerText = "leather = " + y.leather;
    playerCoins.innerText = "Coins = " + y.coins;
    playerPaper.innerText = "Paper = " + y.paper;
    
    
}
    
    
  //menu do kupowania nieruchomości
var displayMenu = function (){



  console.log(this.className)


  var newMenu = document.getElementById(this.id + " menu");
  if (this.getAttribute("number1") != null || this.getAttribute("number2") != null || this.getAttribute("number3") != null ){
    newMenu.style.display = "inline-block";


  var lis = document.querySelectorAll("li")
  for (var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "black";
    })
    lis[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    })
    }
  }
  };
    
    //funkcja budowa drogi
    
var rotation = '';
var minus = '';
var multAttr1 = '';
var indexAttr0 = '';
var indexAttr1 = '';
var indexAttr2 = '';
var indexAttr3 = '';
var minus2 = '';
var minus3 = '';
var numberx = 0;
var numbery = 0;
var roadDirection = '';
var minusFunc = '';
var minusFunc2 = '';
    
    var roadBuilding = function(rotation, indexAttr0, multAttr1, indexAttr1, indexAttr2, indexAttr3, minus3, numberx, numbery, roadDirection){
    
    var newDivRoad = document.createElement("div");
  newDivRoad.style.width = "8px";
  newDivRoad.style.height = "8px";
  newDivRoad.style.display = "inline-block";
  newDivRoad.style.position = "absolute";
  newDivRoad.style.top = numbery + y + "px";
  newDivRoad.style.left = numberx + x + "px";
  newDivRoad.id = "road = row " + i + " no " + j + roadDirection;
  newDivRoad.setAttribute("row", i);
  newDivRoad.setAttribute("number", j);
            
  var menuRoad = document.createElement("ul");
    menuRoad.style.position = "absolute";
    menuRoad.style.padding = "0";
    menuRoad.style.display = "none";
    menuRoad.style.zIndex = "1";

    newDivRoad.appendChild(menuRoad);

    var li1Road = document.createElement("li");
    li1Road.innerText = "road";
    var li2Road = document.createElement("li");
    li2Road.innerText = "none";
    
    li1Road.addEventListener("click", function(){
    this.parentElement.parentElement.setAttribute("road", "yes");
  event.stopPropagation();
  var road = document.createElement("div");
  road.style.width = "20px";
  road.style.height = "5px";
  road.style.display = "inline-block";
  road.style.position = "absolute";
road.style.left = "-5px";
road.style.transform = rotation;


        
 
   if(roadDirection == " middle" && this.parentElement.parentElement.getAttribute("row")%2 == 0){
        minus = 0;
    } else if (roadDirection == " middle" && this.parentElement.parentElement.getAttribute("row")%2 != 0){
        minus = 0;
    } else if (roadDirection == " left" && this.parentElement.parentElement.getAttribute("row")%2 == 0) {
        minus = 1;
    } else if (roadDirection == " left" && this.parentElement.parentElement.getAttribute("row")%2 != 0) {
        minus = 0;
    } else if (roadDirection == " right" && this.parentElement.parentElement.getAttribute("row")%2 != 0) {
        minus = -1;
    } else if (roadDirection == " right" && this.parentElement.parentElement.getAttribute("row")%2 == 0){
         minus = 0;
    }
           
        
  
roadPossessorAttr0 = document.querySelector(".row"+this.parentElement.parentElement.getAttribute("row")+"no"+this.parentElement.parentElement.getAttribute("number")+indexAttr0).getAttribute("roadPossessor");
        
roadPossessorAttr1 = document.querySelector(".row" +(this.parentElement.parentElement.getAttribute("row")*1 +multAttr1)+"no"+(this.parentElement.parentElement.getAttribute("number")*1 - minus) +indexAttr1).getAttribute("roadPossessor");
                         

      
        
if (playerTurns === 2){
    road.style.backgroundColor = "blue";
      roadPossessorAttr0 += 0;
      roadPossessorAttr1 += 0;
document.querySelector(".row"  + this.parentElement.parentElement.getAttribute("row")+"no"+(this.parentElement.parentElement.getAttribute("number")*1+indexAttr0)).setAttribute("roadPossessor", roadPossessorAttr0);
document.querySelector(".row"  + (this.parentElement.parentElement.getAttribute("row")*1 + multAttr1) +"no"+(this.parentElement.parentElement.getAttribute("number")*1 - minus) + indexAttr1).setAttribute("roadPossessor", roadPossessorAttr1);
  } else if (playerTurns === 3){
    road.style.backgroundColor = "black";
    roadPossessorAttr0 += 1;
      roadPossessorAttr1 += 1;
document.querySelector(".row"  + this.parentElement.parentElement.getAttribute("row")+"no"+(this.parentElement.parentElement.getAttribute("number")*1+indexAttr0)).setAttribute("roadPossessor", roadPossessorAttr0);
document.querySelector(".row"  + (this.parentElement.parentElement.getAttribute("row")*1 + multAttr1) +"no"+(this.parentElement.parentElement.getAttribute("number")*1 - minus) + indexAttr1).setAttribute("roadPossessor", roadPossessorAttr1);
  } else if (playerTurns === 4){
    road.style.backgroundColor = "red";
    roadPossessorAttr0 += 2;
      roadPossessorAttr1 += 2;
document.querySelector(".row"  + this.parentElement.parentElement.getAttribute("row")+"no"+(this.parentElement.parentElement.getAttribute("number")*1+indexAttr0)).setAttribute("roadPossessor", roadPossessorAttr0);
document.querySelector(".row"  + (this.parentElement.parentElement.getAttribute("row")*1 + multAttr1) +"no"+(this.parentElement.parentElement.getAttribute("number")*1 - minus) + indexAttr1).setAttribute("roadPossessor", roadPossessorAttr1);
  } else if (playerTurns === 1){
    roadPossessorAttr0 += 3;
      roadPossessorAttr1 += 3;
    road.style.backgroundColor = "green";
document.querySelector(".row"  + this.parentElement.parentElement.getAttribute("row")+"no"+(this.parentElement.parentElement.getAttribute("number")*1+indexAttr0)).setAttribute("roadPossessor", roadPossessorAttr0);
document.querySelector(".row"  + (this.parentElement.parentElement.getAttribute("row")*1 + multAttr1) +"no"+(this.parentElement.parentElement.getAttribute("number")*1 - minus) + indexAttr1).setAttribute("roadPossessor", roadPossessorAttr1);
  };
roadPossessorAttr0 = [];
roadPossessorAttr1 = [];
this.parentElement.parentElement.appendChild(road);

    this.parentElement.style.display = "none";

});
    
    
    li2Road.addEventListener("click", function(){
  event.stopPropagation();
    this.parentElement.style.display = "none";

});
    
  menuRoad.appendChild(li1Road);
  menuRoad.appendChild(li2Road); 
    
    
    newDivRoad.setAttribute("i", i);
    newDivRoad.addEventListener('click', function(){
        
        if(this.getAttribute("road") != "yes"){
    
        
        if (roadDirection == " middle" && this.getAttribute("row")%2 == 0){
      minus2 = 0;
    } else if (roadDirection == " middle" && this.getAttribute("row")%2 != 0) {
        minus2 = 0;
    } else if (roadDirection == " left" && this.getAttribute("row")%2 == 0){
      minus2 = -1;
    } else if (roadDirection == " left" && this.getAttribute("row")%2 != 0){
      minus2 = 0;
    } else if (roadDirection == " right" && this.getAttribute("row")%2 == 0){
          minus2 = 0;
    } else if (roadDirection == " right" && this.getAttribute("row")%2 != 0) {
          minus2 = 1;
    }        
        

    var road1 = document.querySelector(".row"  + (this.getAttribute("row")*1 + multAttr1) + "no"+(this.getAttribute("number")*1 + minus2)+indexAttr2).getAttribute("roadPossessor")
    var road2 = document.querySelector(".row"  + this.getAttribute("row")+"no"+this.getAttribute("number")+indexAttr3).getAttribute("roadPossessor")
    
       console.log(".row"  + (this.getAttribute("row") *1 + multAttr1) + "no"+this.getAttribute("number")+indexAttr2)


if (((document.getElementById("number = row "+(this.getAttribute("row")*1) + " no " +this.getAttribute("number")) != null) || (document.getElementById("number = row "+(this.getAttribute("row")*1 - minus3) + " no " +(this.getAttribute("number")*1 + minus2)) != null)) &&
      
      
      
      (document.querySelector('.row'+(this.getAttribute("row")*1 + multAttr1) +'no' + (this.getAttribute("number")*1 + minus2) +indexAttr2).getAttribute('possessor') - playerTurns == 2 ||
 document.querySelector('.row'+(this.getAttribute("row")*1 + multAttr1) +'no' + (this.getAttribute("number")*1 + minus2) +indexAttr2).getAttribute('possessor') - playerTurns == - 2 ||
  document.querySelector('.row'+this.getAttribute("row")+'no'+this.getAttribute("number")+indexAttr3).getAttribute('possessor') - playerTurns == -2 ||
  document.querySelector('.row'+this.getAttribute("row")+'no'+this.getAttribute("number")+indexAttr3).getAttribute('possessor') - playerTurns == 2 ||
      
      road1[0]*1 - playerTurns == 2 ||
      road1[0]*1 - playerTurns == -2 ||
      road1[1]*1 - playerTurns == 2 ||
      road1[1]*1 - playerTurns == -2 ||      
      road2[0]*1 - playerTurns == 2 ||
      road2[0]*1 - playerTurns == -2 ||
      road2[1]*1 - playerTurns == 2 ||
      road2[1]*1 - playerTurns == -2 )) 

  {
    this.firstElementChild.style.display = "inline-block";
  } 
        }

  })
        
    
body.appendChild(newDivRoad);
    
}
    
//budowa drogi koniec
                                
var buildingNumber = 0;
var x = 0;
var y = 0;
var t = 0;
var h = 0;
var height = 22;
var width = 12;
var id = 0;
var gameStart = false;
var totalNumber = 0;
var roadPossessorAttr0 = [];
var roadPossessorAttr1 = [];
var emptyArray = "";
var playerIndex = "";
var pick1 = {};
var pick2 = {};
var pick3 = {};
var freeRoad = {};
var collectRessource = {};
var thief = {};
var exchangeBonus = {};
var exchangeBonus2 = {};
var collectIron = {};
var collectFood = {};    
var collectWheat = {};
var collectStones = {};
var collectBricks = {}; 
var collectWood = {}; 
var arm = {};
var soldiersSpeed = {};
var boatSpeed = {};
    
//zawartość kart    
    
var cards = [pick1 = {
             text: "Pick 3 chosen cards." 
             }, pick2 = {
             text: "Pick 4 chosen cards." 
             }, pick3 = {
             text: "Pick 5 chosen cards." 
             }, freeRoad = {
             text: "Build 2 roads."
             }, collectRessource = {
             text: "Choose a random resource. If other players have it, they must give it to you."
             }, thief = {
             text: "Expel the thief."
             }, exchangeBonus = {
             text: "In this turn you may exchange cheaper all your resources (2:1)."
             }, collectIron = {
             text: "Collect 1 iron for each your building near the iron field."
             }, collectFood = {
             text: "Collect 1 food for each your building near the food field."
             }, collectWheat = {
             text: "Collect 1 wheat for each your building near the wheat field."
             }, collectStones = {
             text: "Collect 1 stone for each your building near the stones field."
             }, collectBricks = {
             text: "Collect 1 brick for each your building near the bricks field."
             }, collectWood = {
             text: "Collect 1 wood for each your building near the wood field."
             }, exchangeBonus2 = {
             text: "Chose 1 resource. From now on its exchage rate increase into 2:1"
             }, arm = {
             text: "You may arm all your towers"
             }, soldiersSpeed = {
             text: "The speed of all your soldiers increases (+1)" 
             }, boatSpeed = {
             text: "The speed of all your soldiers increases (+1)" 
             }
            ];


//generowanie planszy    
    
var painting = function (x, y, field){

        var img =new Image();
            img.src = field;
            img.onload = function() {

                  var pattern=ctx.createPattern(img,'repeat');
                  ctx.strokeStyle = "white";
                  ctx.fillStyle = pattern;
                  ctx.lineWidth = 10;
                  ctx.beginPath();
                  ctx.moveTo(60 + x, 50 + y);
                  ctx.lineTo(101 + x, 50 + y);
                  ctx.lineTo(122 + x, 86 + y);
                  ctx.lineTo(101 + x, 121 + y);
                  ctx.lineTo(60 + x, 121 + y);
                  ctx.lineTo(40 + x, 85 + y);
                  ctx.lineTo(60 + x, 50 + y);
                  ctx.fill();
                  ctx.stroke();
                };
      }
    
    
var body = document.querySelector("body")
var fields = [ "desert.jpg", "bricks.jpg", "wood.jpg", "iron.jpg", "food.jpg", "stones.jpg", "wheat.jpg", "bricks.jpg", "wood.jpg", "iron.jpg", "food.jpg", "stones.jpg", "wheat.jpg", "bricks.jpg", "wood.jpg", "iron.jpg", "food.jpg", "stones.jpg", "wheat.jpg"];
var sea = ["sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg", "sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","bricks.jpg", "gold.jpg", "gold.jpg", "wood.jpg", "iron.jpg", "food.jpg", "stones.jpg", "wheat.jpg"];
var cost = ["sea.jpg", "sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg" ,"sea.jpg","sea.jpg" ,"sea.jpg","sea.jpg","sea.jpg", "sea.jpg","sea.jpg","sea.jpg", "sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg", "sea.jpg","sea.jpg","sea.jpg","sea.jpg","sea.jpg", "bricks.jpg", "wood.jpg", "iron.jpg", "food.jpg", "stones.jpg", "wheat.jpg"];
var value = [2, 3, 4, 5, 6, 8, 9, 10, 11, 12];


for (var i = 0; i < height; i++){
  for (var j = 0; j < width; j++) {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    if ((j === 0 && i%2 === 0) || i === 0 || i === 1 || i === 21 || i === 20 || (j === 11 && i%2 != 0)) {

      var field = "sea.jpg";

      painting(x, y, field);

    } else if (j < 4){

var field = fields[Math.floor(Math.random() * fields.length)];

      painting(x, y, field);

    } else if ( j === 4){

var field = cost[Math.floor(Math.random() * cost.length)];

      painting(x, y, field);


    } else {

      var field = sea[Math.floor(Math.random() * sea.length)];

      painting(x, y, field);
  }


if (field != "sea.jpg"){
    var newDiv = document.createElement("div");
    body.appendChild(newDiv);
    newDiv.classList.add("numbers");
    if (field != "desert.jpg") {
    newDiv.style.width = "20px";
    newDiv.style.height = "20px"
    newDiv.style.borderRadius = "50%";
    newDiv.style.top = 82 + y + "px";
    newDiv.style.left = 77 + x + "px";
    newDiv.style.border = "1px solid black";
    newDiv.innerText = value[Math.floor(Math.random() * value.length)];
    newDiv.setAttribute("number", newDiv.innerText);
    newDiv.style.textAlign = "center";
    newDiv.style.backgroundColor = "white";
    if (newDiv.innerText === "6" || newDiv.innerText === "8"){
      newDiv.style.color = "red";
      newDiv.style.fontWeight = "bold";
    }
}
    var fieldString = field.replace(".jpg", "");
    newDiv.setAttribute('resource', fieldString);
    newDiv.id = "number = row " + i + " no " + j;
    newDiv.style.display = "inline-block"
    newDiv.setAttribute("row", i);
    newDiv.setAttribute("no", j);
    newDiv.style.position = "absolute";

    
    newDiv.addEventListener("click", function(){
        console.log(this.id)
    })
    
}
for (var z = 0; z < 2; z++){

  if (z%2 == 0){
//budowa drogi nr1

    var roadMiddleCons = function(){

rotation = 0;
indexAttr0 = "index0";
multAttr1 = 0;
indexAttr1 = "index1";
indexAttr2 = "index0";
indexAttr3 = "index1";
minus3 = 2;
numbery = 53;
numberx = 85;
roadDirection = " middle";

     roadBuilding(rotation, indexAttr0, multAttr1, indexAttr1, indexAttr2, indexAttr3, minus3, numberx, numbery, roadDirection);
     
 }
     
roadMiddleCons();

  
      
      
} else {
    //budowa drogi nr 2
    
  var roadLeftCons = function(){

rotation = "rotate(-60deg)";
indexAttr0 = "index0";
multAttr1 = 1;
indexAttr1 = "index1";
indexAttr2 = "index1";
indexAttr3 = "index0";
minus3 = 1;
numbery = 71;
numberx = 54;
roadDirection = " left";

       roadBuilding(rotation, indexAttr0, multAttr1, indexAttr1, indexAttr2, indexAttr3, minus3, numberx, numbery, roadDirection);

 }
 
 roadLeftCons();
  
    
   var roadRightCons = function(){
    
rotation = "rotate(60deg)"
indexAttr0 = "index1";
multAttr1 = 1;
indexAttr1 = "index0";
indexAttr2 = "index0";
indexAttr3 = "index1";
minus3 = 1;
numbery = 71;
numberx = 116;
roadDirection = " right";

roadBuilding(rotation, indexAttr0, multAttr1, indexAttr1, indexAttr2, indexAttr3, minus3, numberx, numbery, roadDirection);
}

 roadRightCons(); 
    
   
}


// pola do budowania nieruchomości
    
var newDivField = document.createElement("div");
body.appendChild(newDivField);
newDivField.id = id;
newDivField.setAttribute("row", i)
newDivField.setAttribute("no", j)
newDivField.setAttribute("index", z);
newDivField.setAttribute("realEstate", "none");
newDivField.setAttribute("possessor", "none");
newDivField.setAttribute("roadPossessor", emptyArray);
newDivField.classList.add("row"+i+"no"+j+"index"+z);
newDivField.classList.add("connections");
newDivField.style.width = "10px";
newDivField.style.height = "10px";
newDivField.style.position = "absolute";
newDivField.style.top = 50 + t + "px";
newDivField.style.left = 60 + h + "px";
newDivField.style.borderRadius = "50px";

var menu = document.createElement("ul");
  menu.style.position = "absolute";
  menu.style.padding = "0";
  menu.style.display = "none";
  menu.style.zIndex = "1";
  menu.id = id + " menu";

  newDivField.appendChild(menu);

  var li1 = document.createElement("li");
  li1.innerText = "village";
  var li2 = document.createElement("li");
  li2.innerText = "town";
  var li3 = document.createElement("li");
  li3.innerText = "capital";
  var li4 = document.createElement("li");
  li4.innerText = "port village"
  var li5 = document.createElement("li");
  li5.innerText = "castle";
  var li6 = document.createElement("li");
  li6.innerText = "walls";
   var li7 = document.createElement("li");
  li7.innerText = "1st tower"
  var li8 = document.createElement("li");
  li8.innerText = "2nd tower";
  var li9 = document.createElement("li");
  li9.innerText = "3rd tower"; 
  var li10 = document.createElement("li");
  li10.innerText = "none";
    
    menu.appendChild(li1);
    menu.appendChild(li2);
    menu.appendChild(li3);
    menu.appendChild(li4);
    menu.appendChild(li5);
    menu.appendChild(li6);
    menu.appendChild(li7);
    menu.appendChild(li8);
    menu.appendChild(li9);
    menu.appendChild(li10);

// budowa pierwszej osady

  li1.addEventListener("click", function(){
      
      
      var no1 = this.parentElement.parentElement.getAttribute("no");
      var row1 = this.parentElement.parentElement.getAttribute("row");
      var no2 = this.parentElement.parentElement.getAttribute("no");
      var ind2 = this.parentElement.parentElement.getAttribute("index");
      var row2 = this.parentElement.parentElement.getAttribute("row")-1;
      var no3 = this.parentElement.parentElement.getAttribute("no");
      var ind3 = this.parentElement.parentElement.getAttribute("index");
      var row3 = this.parentElement.parentElement.getAttribute("row")*1+1;
      var ind1 = this.parentElement.parentElement.getAttribute("index");
      
    if (ind1 === "0"){
      ind1++;
      }
      else if (ind1 === "1"){
        ind1--;
      }


//definiowanie sąsiadów
      
var neibourgh1 = document.querySelector(".row"+row1+"no"+no1+"index"+ind1);

    if (ind2 == 0 && row2%2 == 0){
      ind2++;
    } else if (ind2 == 0 && row2%2 != 0){
      ind2++;
      no2--;
    }
      else if (ind2 == 1 && row2%2 == 0){
        ind2--;
        no2++;
      } else if (ind2 == 1 && row2%2 != 0){
        ind2--;
      }



var neibourgh2 = document.querySelector(".row"+row2+"no"+no2+"index"+ind2);



if (ind3 == 0 && row3%2 == 0){
  ind3++;
} else if (ind3 == 0 && row3%2 != 0){
  ind3++;
  no3--;
}
  else if (ind3 == 1 && row3%2 == 0){
    ind3--;
    no3++;
  } else if (ind3 == 1 && row3%2 != 0){
    ind3--;
  }

var neibourgh3 = document.querySelector(".row"+row3+"no"+no3+"index"+ind3);

if(playerSettling != 10 && (this.parentElement.parentElement.getAttribute("water") == "true" || this.parentElement.parentElement.getAttribute("no") > 4)){
   this.parentElement.style.display = "none";
    event.stopPropagation();
    return
}
      
      
      if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      playerIndex = player1;
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
    playerIndex = "2";
         playerIndex = player2;
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
 playerIndex = player3;
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
    playerIndex = player4;
    };
      
      
// usuwanie elementów z listy pól sąsiednich
      
if (neibourgh1.firstElementChild.children.length > 4){ 
   
neibourgh1.firstElementChild.children[0].parentNode.removeChild(neibourgh1.firstElementChild.children[0]);
neibourgh1.firstElementChild.children[0].parentNode.removeChild(neibourgh1.firstElementChild.children[0]);
neibourgh1.firstElementChild.children[0].parentNode.removeChild(neibourgh1.firstElementChild.children[0]);
neibourgh1.firstElementChild.children[0].parentNode.removeChild(neibourgh1.firstElementChild.children[0]);
neibourgh1.firstElementChild.children[0].parentNode.removeChild(neibourgh1.firstElementChild.children[0]);
neibourgh1.firstElementChild.children[0].parentNode.removeChild(neibourgh1.firstElementChild.children[0]);
};
if (neibourgh2.firstElementChild.children.length > 4){    
    
neibourgh2.firstElementChild.children[0].parentNode.removeChild(neibourgh2.firstElementChild.children[0]);
neibourgh2.firstElementChild.children[0].parentNode.removeChild(neibourgh2.firstElementChild.children[0]);
neibourgh2.firstElementChild.children[0].parentNode.removeChild(neibourgh2.firstElementChild.children[0]);
neibourgh2.firstElementChild.children[0].parentNode.removeChild(neibourgh2.firstElementChild.children[0]);
neibourgh2.firstElementChild.children[0].parentNode.removeChild(neibourgh2.firstElementChild.children[0]);
neibourgh2.firstElementChild.children[0].parentNode.removeChild(neibourgh2.firstElementChild.children[0]); 
};
if (neibourgh3.firstElementChild.children.length > 4){  

neibourgh3.firstElementChild.children[0].parentNode.removeChild(neibourgh3.firstElementChild.children[0]);
neibourgh3.firstElementChild.children[0].parentNode.removeChild(neibourgh3.firstElementChild.children[0]);
neibourgh3.firstElementChild.children[0].parentNode.removeChild(neibourgh3.firstElementChild.children[0]);
neibourgh3.firstElementChild.children[0].parentNode.removeChild(neibourgh3.firstElementChild.children[0]);
neibourgh3.firstElementChild.children[0].parentNode.removeChild(neibourgh3.firstElementChild.children[0]);
neibourgh3.firstElementChild.children[0].parentNode.removeChild(neibourgh3.firstElementChild.children[0]);  
};
 
      
//warunek możliwości budowy osady (surowce + drogi)      
if ((playerIndex.wood > 0 && playerIndex.bricks > 0 && playerIndex.wheat > 0 && playerIndex.food > 0) && (this.parentElement.parentElement.getAttribute("realEstate") === "none" && gameStart === true && (buildingNumber < 8 || this.parentElement.parentElement.getAttribute("roadPossessor") - playerTurns == 2 || this.parentElement.parentElement.getAttribute("roadPossessor") - playerTurns == -2))){
   
    
//odejmowanie surowców po budowie    
    playerIndex.wood -=1;
    playerIndex.bricks -=1;
    playerIndex.food -=1;
    playerIndex.wheat -=1;
    
    
//atualizowanie listy surowców
    playerWood.innerText = "Wood = " +   playerIndex.wood;
    playerBricks.innerText = "Bricks = " +  playerIndex.bricks;
    playerSheeps.innerText = "Food = " +   playerIndex.food;
    playerWheat.innerText = "Wheat = " +   playerIndex.wheat;

this.parentElement.parentElement.setAttribute("realEstate", "village");

    
      event.stopPropagation();
    
//określanie koloru ikonki i właściciela pola
    var icon = document.createElement("i");
    if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      icon.style.color = "blue";
      this.parentElement.parentElement.setAttribute("possessor", 0);
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
      icon.style.color = "black";
      this.parentElement.parentElement.setAttribute("possessor", 1);
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
      icon.style.color = "red";
      this.parentElement.parentElement.setAttribute("possessor", 2);
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
      icon.style.color = "green";
      this.parentElement.parentElement.setAttribute("possessor", 3);
    };

    icon.style.fontSize = "25px";
    icon.style.zIndex = "1";
    icon.style.position = "absolute";
    icon.style.top = "-9px";
    icon.style.left = "-5px";
    icon.classList.add("fa");
    icon.classList.add("fa-home");
    
//powiększanie ikonki
    icon.addEventListener("mouseover", function(){
    icon2 = icon.cloneNode(true);
    icon2.style.position = "absolute";
    icon2.style.top = "200px";
    icon2.style.left = "1600px";
    icon2.style.fontSize = "200px";
    icon2.id = 'bigger'
    body.appendChild(icon2);
        })
    
        icon.addEventListener("mouseout", function(){

            if (document.getElementById('bigger')){
          document.getElementById('bigger').parentNode.removeChild(document.getElementById('bigger'))
            };
        })
    
                
    this.parentElement.style.display = "none";
    this.parentElement.parentElement.appendChild(icon);

buildingNumber++;
};
      

  });
    
//budowania miasta

  li2.addEventListener("click", function(){

    if (this.parentElement.parentElement.getAttribute("realEstate") === "village"){
      console.log(this.parentElement.parentElement.getAttribute('possessor') - playerTurns)
      event.stopPropagation();
        if (this.parentElement.parentElement.getAttribute('possessor') - playerTurns == 2 || this.parentElement.parentElement.getAttribute('possessor') - playerTurns == -2){
      this.parentElement.parentElement.setAttribute("realEstate", "town");
    var icon = document.createElement("i");
    if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      icon.style.color = "blue";
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
      icon.style.color = "black";
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
      icon.style.color = "red";
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
      icon.style.color = "green";
    };
    icon.style.fontSize = "20px";
    icon.style.position = "absolute";
    icon.style.top = "-8px";
    icon.style.left = "-2px";
    icon.classList.add("fa");
    icon.classList.add("fa-industry");
        icon.addEventListener("mouseover", function(){
       icon2 = icon.cloneNode(true);
            icon2.style.position = "absolute";
               icon2.style.top = "200px";
              icon2.style.left = "1600px";
            icon2.style.fontSize = "200px";
            icon2.id = 'bigger'
              body.appendChild(icon2);
        console.log('sd')
        })
    
            icon.addEventListener("mouseout", function(){
                console.log(document.getElementById('bigger'))
            if (document.getElementById('bigger')){
          document.getElementById('bigger').parentNode.removeChild(document.getElementById('bigger'))
            };
        })
    this.parentElement.style.display = "none";
    this.parentElement.parentElement.appendChild(icon);
    var previousRealEstate = this.parentElement.parentElement.children
    console.log(previousRealEstate[previousRealEstate.length-2]);
   if (previousRealEstate[previousRealEstate.length-2].getAttribute('wallDiv') == "true"){
    previousRealEstate[previousRealEstate.length-3].parentNode.removeChild(previousRealEstate[previousRealEstate.length-3]);
   } else {
       previousRealEstate[previousRealEstate.length-2].parentNode.removeChild(previousRealEstate[previousRealEstate.length-2])
   }
  }
  }
  })
    
    
//budowanie stolicy

  li3.addEventListener("click", function(){
    if (this.parentElement.parentElement.getAttribute("realEstate") === "town"){
      if (this.parentElement.parentElement.getAttribute('possessor') - playerTurns == 2 || this.parentElement.parentElement.getAttribute('possessor') - playerTurns == -2){
          this.parentElement.parentElement.setAttribute("realEstate", "capital");
      event.stopPropagation();
    var icon = document.createElement("i");
    if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      icon.style.color = "blue";
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
      icon.style.color = "black";
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
      icon.style.color = "red";
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
      icon.style.color = "green";
    };
    icon.style.fontSize = "20px";
    icon.style.position = "absolute";
    icon.style.top = "-7px";
    icon.style.left = "-3px";
    icon.classList.add("fa");
    icon.classList.add("fa-university");
     icon.addEventListener("mouseover", function(){
       icon2 = icon.cloneNode(true);
            icon2.style.position = "absolute";
               icon2.style.top = "200px";
              icon2.style.left = "1600px";
            icon2.style.fontSize = "200px";
            icon2.id = 'bigger'
              body.appendChild(icon2);
        console.log('sd')
        })
    
            icon.addEventListener("mouseout", function(){
                console.log(document.getElementById('bigger'))
            if (document.getElementById('bigger')){
          document.getElementById('bigger').parentNode.removeChild(document.getElementById('bigger'))
            };
        })
    this.parentElement.style.display = "none";
    this.parentElement.parentElement.appendChild(icon);
    var previousRealEstate = this.parentElement.parentElement.children;
   if (previousRealEstate[previousRealEstate.length-2].getAttribute('wallDiv') == "true"){
    previousRealEstate[previousRealEstate.length-3].parentNode.removeChild(previousRealEstate[previousRealEstate.length-3]);
   } else {
       previousRealEstate[previousRealEstate.length-2].parentNode.removeChild(previousRealEstate[previousRealEstate.length-2])
   }
  }
}
  })

//budowanie osady portowej
    
  li4.addEventListener("click", function(){
    if (this.parentElement.parentElement.getAttribute("realEstate") === "village" && this.parentElement.parentElement.getAttribute("water") === "true"){
      if (this.parentElement.parentElement.getAttribute('possessor') - playerTurns == 2 || this.parentElement.parentElement.getAttribute('possessor') - playerTurns == -2){
          this.parentElement.parentElement.setAttribute("realEstate", "port village");
      event.stopPropagation();
    var icon = document.createElement("i");
    if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      icon.style.color = "blue";
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
      icon.style.color = "black";
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
      icon.style.color = "red";
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
      icon.style.color = "green";
    };
    icon.style.fontSize = "20px";
    icon.style.position = "absolute";
    icon.style.top = "-7px";
    icon.style.left = "-3px";
    icon.classList.add("fa");
    icon.classList.add("fa-simplybuilt");
          icon.addEventListener("mouseover", function(){
       icon2 = icon.cloneNode(true);
            icon2.style.position = "absolute";
               icon2.style.top = "200px";
              icon2.style.left = "1600px";
            icon2.style.fontSize = "200px";
            icon2.id = 'bigger'
              body.appendChild(icon2);
        console.log('sd')
        })
    
            icon.addEventListener("mouseout", function(){
                console.log(document.getElementById('bigger'))
            if (document.getElementById('bigger')){
          document.getElementById('bigger').parentNode.removeChild(document.getElementById('bigger'))
            };
        })
    this.parentElement.style.display = "none";
    this.parentElement.parentElement.appendChild(icon);
    var previousRealEstate = this.parentElement.parentElement.children;
    if (previousRealEstate[previousRealEstate.length-2].getAttribute('wallDiv') == "true"){
    previousRealEstate[previousRealEstate.length-3].parentNode.removeChild(previousRealEstate[previousRealEstate.length-3]);
   } else {
       previousRealEstate[previousRealEstate.length-2].parentNode.removeChild(previousRealEstate[previousRealEstate.length-2])
   }
  }
}
  })

    //budowanie zamku
    
  li5.addEventListener("click", function(){
    if (this.parentElement.parentElement.getAttribute("realEstate") === "village"){
      if (this.parentElement.parentElement.getAttribute('possessor') - playerTurns == 2 || this.parentElement.parentElement.getAttribute('possessor') - playerTurns == -2){
          this.parentElement.parentElement.setAttribute("realEstate", "castle");
      event.stopPropagation();
    var icon = document.createElement("i");
    if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      icon.style.color = "blue";
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
      icon.style.color = "black";
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
      icon.style.color = "red";
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
      icon.style.color = "green";
    };
    icon.style.fontSize = "25px";
    icon.style.position = "absolute";
    icon.style.top = "-9px";
    icon.style.left = "-4px";
    icon.classList.add("fa");
    icon.classList.add("fa-fort-awesome");
             icon.addEventListener("mouseover", function(){
       icon2 = icon.cloneNode(true);
            icon2.style.position = "absolute";
               icon2.style.top = "200px";
              icon2.style.left = "1600px";
            icon2.style.fontSize = "200px";
            icon2.id = 'bigger'
              body.appendChild(icon2);
        console.log('sd')
        })
    
            icon.addEventListener("mouseout", function(){
                console.log(document.getElementById('bigger'))
            if (document.getElementById('bigger')){
          document.getElementById('bigger').parentNode.removeChild(document.getElementById('bigger'))
            };
        })
    
    this.parentElement.style.display = "none";
    this.parentElement.parentElement.appendChild(icon);
    var previousRealEstate = this.parentElement.parentElement.children;
    if (previousRealEstate[previousRealEstate.length-2].getAttribute('wallDiv') == "true"){
    previousRealEstate[previousRealEstate.length-3].parentNode.removeChild(previousRealEstate[previousRealEstate.length-3]);
   } else {
       previousRealEstate[previousRealEstate.length-2].parentNode.removeChild(previousRealEstate[previousRealEstate.length-2])
   }
  }
}
  })

//budowanie muru    
    
  li6.addEventListener("click", function(){
    if (this.parentElement.parentElement.getAttribute("realEstate") === "village" || this.parentElement.parentElement.getAttribute("realEstate") === "town" || this.parentElement.parentElement.getAttribute("realEstate") === "capital" || this.parentElement.parentElement.getAttribute("realEstate") === "port village" || this.parentElement.parentElement.getAttribute("realEstate") === "castle"){
          this.parentElement.parentElement.setAttribute("walls", "true");
            
      event.stopPropagation();

      var siblings = this.parentElement.parentElement.children;
      for (var i = 0; i < siblings.length; i++){
        if(siblings[i].tagName === "I" ){
          var divWalls = document.createElement("div")
          divWalls.style.width = "25px";
          divWalls.style.height = "25px";
          divWalls.style.position = "absolute";
          divWalls.style.left = "-6px";
          divWalls.style.top = "-10px";
          divWalls.style.border = "3px solid black";
            divWalls.style.borderRadius = "50%";
            divWalls.setAttribute("wallDiv", "true");

          this.parentElement.parentElement.appendChild(divWalls);
        }

      }

this.parentElement.style.display = "none"

  }
  });
    
   //wieża 1
    
li7.addEventListener("click", function(){
    

      if ( this.parentElement.parentElement.getAttribute("realEstate") === "none"){
          this.parentElement.parentElement.setAttribute("realEstate", "1stTower");
                console.log('huj')
      event.stopPropagation();
    var icon = document.createElement("i");
    if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      icon.style.color = "blue";
         this.parentElement.parentElement.setAttribute("possessor", 0);
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
      icon.style.color = "black";
         this.parentElement.parentElement.setAttribute("possessor", 1);
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
      icon.style.color = "red";
         this.parentElement.parentElement.setAttribute("possessor", 2);
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
      icon.style.color = "green";
         this.parentElement.parentElement.setAttribute("possessor", 3);
    };
    icon.style.fontSize = "25px";
    icon.style.position = "absolute";
    icon.style.top = "-10px";
    icon.style.left = "-5px";
    icon.classList.add("fa");
    icon.classList.add("fa-chevron-up");
             icon.addEventListener("mouseover", function(){
       icon2 = icon.cloneNode(true);
            icon2.style.position = "absolute";
               icon2.style.top = "200px";
              icon2.style.left = "1600px";
            icon2.style.fontSize = "200px";
            icon2.id = 'bigger'
              body.appendChild(icon2);
      
        })
    
            icon.addEventListener("mouseout", function(){
                console.log(document.getElementById('bigger'))
            if (document.getElementById('bigger')){
          document.getElementById('bigger').parentNode.removeChild(document.getElementById('bigger'))
            };
        })
    
    this.parentElement.style.display = "none";
    this.parentElement.parentElement.appendChild(icon);

  }
})
  
    
  //wieża 2


li8.addEventListener("click", function(){
 
  
      if ( this.parentElement.parentElement.getAttribute("realEstate") == "1stTower"){
          if (this.parentElement.parentElement.getAttribute('possessor') - playerTurns == 2 || this.parentElement.parentElement.getAttribute('possessor') - playerTurns == -2){
          this.parentElement.parentElement.setAttribute("realEstate", "2ndTower");
      event.stopPropagation();
    var icon = document.createElement("i");
    if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      icon.style.color = "blue";
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
      icon.style.color = "black";
  
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
      icon.style.color = "red";
 
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
      icon.style.color = "green";

    };
             
    icon.style.fontSize = "25px";
    icon.style.position = "absolute";
    icon.style.top = "-8px";
    icon.style.left = "-5px";
    icon.classList.add("fa");
    icon.classList.add("fa-chevron-circle-up");

             icon.addEventListener("mouseover", function(){
       icon2 = icon.cloneNode(true);
            icon2.style.position = "absolute";
               icon2.style.top = "200px";
              icon2.style.left = "1600px";
            icon2.style.fontSize = "200px";
            icon2.id = 'bigger'
              body.appendChild(icon2);
      
        })
    
            icon.addEventListener("mouseout", function(){
                console.log(document.getElementById('bigger'))
            if (document.getElementById('bigger')){
          document.getElementById('bigger').parentNode.removeChild(document.getElementById('bigger'))
            };
        })
    
    this.parentElement.style.display = "none";
    this.parentElement.parentElement.appendChild(icon);
    var previousRealEstate = this.parentElement.parentElement.children;
    previousRealEstate[previousRealEstate.length-2].parentNode.removeChild(previousRealEstate[previousRealEstate.length-2]);
          }
  }
})

//wieża 3

li9.addEventListener("click", function(){
 
  
      if ( this.parentElement.parentElement.getAttribute("realEstate") == "2ndTower"){
          if (this.parentElement.parentElement.getAttribute('possessor') - playerTurns == 2 || this.parentElement.parentElement.getAttribute('possessor') - playerTurns == -2){
          this.parentElement.parentElement.setAttribute("realEstate", "3rdTower");
      event.stopPropagation();
    var icon = document.createElement("i");
    if (playerSettling === 1 || playerSettling === 8 || playerTurns === 2){
      icon.style.color = "blue";
    } else if (playerSettling === 2 || playerSettling === 7 || playerTurns === 3){
      icon.style.color = "black";
  
    } else if (playerSettling === 3 || playerSettling === 6 || playerTurns === 4){
      icon.style.color = "red";
 
    } else if (playerSettling === 4 || playerSettling === 5 || playerTurns === 1){
      icon.style.color = "green";

    };
             
    icon.style.fontSize = "25px";
    icon.style.position = "absolute";
    icon.style.top = "-8px";
    icon.style.left = "-5px";
    icon.classList.add("fa");
    icon.classList.add("fa-arrow-circle-up");

             icon.addEventListener("mouseover", function(){
       icon2 = icon.cloneNode(true);
            icon2.style.position = "absolute";
               icon2.style.top = "200px";
              icon2.style.left = "1600px";
            icon2.style.fontSize = "200px";
            icon2.id = 'bigger'
              body.appendChild(icon2);
      
        })
    
            icon.addEventListener("mouseout", function(){
                console.log(document.getElementById('bigger'))
            if (document.getElementById('bigger')){
          document.getElementById('bigger').parentNode.removeChild(document.getElementById('bigger'))
            };
        })
    
    this.parentElement.style.display = "none";
    this.parentElement.parentElement.appendChild(icon);
    var previousRealEstate = this.parentElement.parentElement.children;
    previousRealEstate[previousRealEstate.length-2].parentNode.removeChild(previousRealEstate[previousRealEstate.length-2]);
          }
  }
})





//wyjście z menu
    

  li10.addEventListener("click", function(){
    this.parentElement.style.display = "none";
    event.stopPropagation();
  });

    
newDivField.addEventListener("click", displayMenu);
id++;


    
if (z%2===0){
    h += 41
  } else {
    h += 82
  }
}


    x = x + 123;

    }
    if (i%2 === 0){
    x = 62;
    y +=  36;
    h = 62;

  } else {
    x = 0;
    y +=36;
    h = 0;
  }


  t += 36;

}

var positionTop = 0;
var positionLeft = 0;

// pętla dodajca do pól atrybut surowca i numeru   
    
for (var i = 0; i<id; i++){
  var fieldConnection = document.getElementById(i);
  if ((fieldConnection.getAttribute("row")%2 === 0) && (fieldConnection.getAttribute("index") == 0)) {
    var sourceColor1  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")-2) + " no " + (fieldConnection.getAttribute("no")));
    var sourceColor2  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")-1) + " no " + (fieldConnection.getAttribute("no") - 1));
    var sourceColor3  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")) + " no " + (fieldConnection.getAttribute("no")));

    if(sourceColor1 != null) {
    fieldConnection.setAttribute('resource1', sourceColor1.getAttribute("resource"));
    fieldConnection.setAttribute('number1', sourceColor1.getAttribute("number"));
  }

  if(sourceColor2 != null) {
  fieldConnection.setAttribute('resource2', sourceColor2.getAttribute("resource"));
    fieldConnection.setAttribute('number2', sourceColor2.getAttribute("number"));
}

if(sourceColor3 != null) {
fieldConnection.setAttribute('resource3', sourceColor3.getAttribute("resource"));
  fieldConnection.setAttribute('number3', sourceColor3.getAttribute("number"));
}


  } else if ((fieldConnection.getAttribute("row")%2 != 0 && fieldConnection.getAttribute("index") == 0) || (fieldConnection.getAttribute("row")%2 === 0 && fieldConnection.getAttribute("index") == 1)) {
    var sourceColor1  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")-2) + " no " + (fieldConnection.getAttribute("no")));
    var sourceColor2  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")-1) + " no " + (fieldConnection.getAttribute("no")));
    var sourceColor3  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")) + " no " + (fieldConnection.getAttribute("no")));

    if(sourceColor1 != null) {
    fieldConnection.setAttribute('resource1', sourceColor1.getAttribute("resource"));
      fieldConnection.setAttribute('number1', sourceColor1.getAttribute("number"));
  }

  if(sourceColor2 != null) {
  fieldConnection.setAttribute('resource2', sourceColor2.getAttribute("resource"));
    fieldConnection.setAttribute('number2', sourceColor2.getAttribute("number"));
  }

  if(sourceColor3 != null) {
  fieldConnection.setAttribute('resource3', sourceColor3.getAttribute("resource"));
    fieldConnection.setAttribute('number3', sourceColor3.getAttribute("number"));
  }



} else if ((fieldConnection.getAttribute("row")%2 != 0) && (fieldConnection.getAttribute("index") == 1)){
  var sourceColor1  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")-2) + " no " + (fieldConnection.getAttribute("no")));
  var sourceColor2  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")-1) + " no " + (fieldConnection.getAttribute("no") - (-1)));
  var sourceColor3  = document.getElementById("number = row " + (fieldConnection.getAttribute("row")) + " no " + (fieldConnection.getAttribute("no")));

  if(sourceColor1 != null) {
  fieldConnection.setAttribute('resource1', sourceColor1.getAttribute("resource"));
    fieldConnection.setAttribute('number1', sourceColor1.getAttribute("number"));
}

if(sourceColor2 != null) {
fieldConnection.setAttribute('resource2', sourceColor2.getAttribute("resource"));
  fieldConnection.setAttribute('number2', sourceColor2.getAttribute("number"));
}

if(sourceColor3 != null) {
fieldConnection.setAttribute('resource3', sourceColor3.getAttribute("resource"));
  fieldConnection.setAttribute('number3', sourceColor3.getAttribute("number"));
}



}

if ((fieldConnection.getAttribute("resource1") === null || fieldConnection.getAttribute("resource2") === null || fieldConnection.getAttribute("resource3") === null) && (fieldConnection.getAttribute("resource1") != null || fieldConnection.getAttribute("resource2") != null || fieldConnection.getAttribute("resource3") != null)){
  fieldConnection.setAttribute("water", "true");

}


}



var diceNumber1 = 0;
var diceNumber2 = 0;
var dice1Colors = ["black", "black", "black", "yellow", "green", "blue"]

var button = document.getElementById('settle');
var buttonTurn = document.getElementById('endturn');
var buyingCards = document.getElementById('buyCard');
var displayingCards = document.getElementById('cardDisplay');
var showCards = document.getElementById('showCard');
var buttonExchange = document.getElementById('exchange');
var fieldExchange = document.getElementById('exchangeField');
var removeChilds = document.getElementById('removeChilds');
var playerCards1 = [];  
var playerCards2 = [];    
var playerCards3 = [];    
var playerCards4 = [];
var buyField = document.getElementById('buyField');
var closeField = document.querySelectorAll('.close');
var playerSelection = document.getElementById('pexchange'); 
var bankSelection = document.getElementById('bexchange'); 
var exchange = document.getElementById('submit'); 
var paragraphs = document.querySelectorAll("p");
var playerName = document.getElementById('name');
var playerCarriage = document.getElementById('carriage');
var playerResources = document.getElementById('resources');
var playerWood = document.getElementById('wood');
var playerBricks = document.getElementById('bricks');
var playerIron = document.getElementById('iron');
var playerSheeps = document.getElementById('food');
var playerStones = document.getElementById('stones');
var playerWheat = document.getElementById('wheat');
var playerCommodities = document.getElementById('commodity');
var playerLeather = document.getElementById('leather');
var playerCoins = document.getElementById('coins');
var playerPaper = document.getElementById('paper');
var exchangePlayer = "";
var sell = ''
var buy = ''
var cardContent = document.getElementById("content")
var startExchange = function(){
      fieldExchange.style.display = "none";
        sell = playerSelection.value;
        buy = bankSelection.value;
        exchangePlayer[sell] -= 4;
        exchangePlayer[buy] += 1;
        playerWood.innerText = "Wood = " + exchangePlayer.wood;
    playerBricks.innerText = "Bricks = " + exchangePlayer.bricks;
    playerIron.innerText = "Iron = " + exchangePlayer.iron;
    playerSheeps.innerText = "Food = " + exchangePlayer.food;
    playerStones.innerText = "Stones = " + exchangePlayer.stones;
    playerWheat.innerText = "Wheat = " + exchangePlayer.wheat;
        playerLeather.innerText = "leather = " + exchangePlayer.leather;
    playerCoins.innerText = "Coins = " + exchangePlayer.coins;
    playerPaper.innerText = "Paper = " + exchangePlayer.paper;
}

var playerSettling = 0;
var playerTurns = 1000;
var allButtons = document.querySelectorAll('.button');    
    
    for (var b = 0; b < allButtons.length; b++){
        allButtons[b].addEventListener("mouseover", function() {
this.style.boxShadow = ("-5px -5px 10px 10px #888")
});
        
        allButtons[b].addEventListener("mouseout", function() {
this.style.boxShadow = ("")
});
    }

// kupowanie kart
    
    buyingCards.addEventListener("click", function(){
        if (playerTurns < 1000){
            if(playerTurns == 2){
                exchangePlayer = player1
            } else if (playerTurns == 3){
                exchangePlayer = player2;
            } else if (playerTurns == 4){
                exchangePlayer = player3
            } else if (playerTurns == 1){
                exchangePlayer = player4
            }
            
    if (exchangePlayer.food >= 0 && exchangePlayer.stones >= 0 && exchangePlayer.wheat >= 0) {
        fieldExchange.style.display = "none";
        if(buyField.style.display = "none"){
            buyField.style.display = "inline-block";
            var cardText = cards[Math.floor(Math.random() * cards.length)].text;
            cardContent.innerText = cardText;
            if(playerTurns == 2){
                playerCards1.push(cardText);
            } else if (playerTurns == 3){
                playerCards2.push(cardText);
            } else if (playerTurns == 4){
                playerCards3.push(cardText);
            } else if (playerTurns == 1){
                playerCards4.push(cardText);
            }
        } else {
            buyField.style.display = "none";
        }
        }
            
            
        }
        
            
    })
    
showCards.addEventListener('click', function(){
    if (displayingCards.style.display = 'none'){
        displayingCards.style.display = 'block';
        
        //pętla pokazująca wszystkie karty gracza
        
        if(playerTurns == 2){
                showPlyerCards(playerCards1)
            } else if (playerTurns == 3){
                showPlyerCards(playerCards2)
            } else if (playerTurns == 4){
                showPlyerCards(playerCards3)
            } else if (playerTurns == 1){
                showPlyerCards(playerCards4)
            }
        
        
    }
})
    
    
removeChilds.addEventListener("click", function(){
    var childs = this.parentElement.querySelectorAll(".smallCard");
    console.log(childs[0]);
    for (var i = 0; i < childs.length; i++){
        childs[i].parentNode.removeChild(childs[i]);
    }
})
        
//wymiana towarów - początek
    
    
    buttonExchange.addEventListener('click', function(){
        if (playerTurns < 1000){
            if(playerTurns == 2){
                exchangePlayer = player1
            } else if (playerTurns == 3){
                exchangePlayer = player2
            } else if (playerTurns == 4){
                exchangePlayer = player3
            } else if (playerTurns == 1){
                exchangePlayer = player4
            }
      
 
while (playerSelection.hasChildNodes()) {
  playerSelection.removeChild(playerSelection.lastChild);
}
             
            if (exchangePlayer.wood >= exchangePlayer.woodExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "wood");
                newOption.innerText = "wood";
                playerSelection.appendChild(newOption)
            }
            
              if (exchangePlayer.bricks >= exchangePlayer.bricksExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "bricks");
                newOption.innerText = "bricks";
                playerSelection.appendChild(newOption)
            }
              
            if (exchangePlayer.iron >= exchangePlayer.ironExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "iron");
                newOption.innerText = "iron";
                playerSelection.appendChild(newOption)
            }
            
            
            if (exchangePlayer.food >= exchangePlayer.foodExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "food");
                newOption.innerText = "food";
                playerSelection.appendChild(newOption)
            }
            
            
            if (exchangePlayer.stones >= exchangePlayer.stonesExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "stones");
                newOption.innerText = "stones";
                playerSelection.appendChild(newOption)
            }
            
            
            if (exchangePlayer.wheat >= exchangePlayer.wheatExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "wheat");
                newOption.innerText = "wheat";
                playerSelection.appendChild(newOption)
            }
            
            
            if (exchangePlayer.leather >= exchangePlayer.leatherExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "leather");
                newOption.innerText = "leather";
                playerSelection.appendChild(newOption)
            }
            
            
            if (exchangePlayer.coins >= exchangePlayer.coinsExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "coins");
                newOption.innerText = "coins";
                playerSelection.appendChild(newOption)
            }
            
             if (exchangePlayer.paper >= exchangePlayer.paperExchange){
                var newOption = document.createElement("option");
                newOption.setAttribute("value", "paper");
                newOption.innerText = "paper";
                playerSelection.appendChild(newOption)
            }

    
exchange.addEventListener('click', startExchange)
            
            
            
        }
        
if(playerSelection.children.length > 0){
      fieldExchange.style.display = "inline-block";
        buyField.style.display = "none";
}
    
    })
 
for (var i = 0; i < closeField.length; i++){
  
    closeField[i].addEventListener('click', function(){
        
        this.parentElement.style.display = "none";
    
    });
    }
    
     
//zmiana tur
var playerData = document.querySelector("#dataMenu");

button.addEventListener("click", function(){
gameStart = true;
button.innerText = "SETTLE"
  if (playerSettling === 0){
     addingRes(player1)
    playerDisplayData("blue", player1)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerSettling === 1){
addingRes(player2)
 playerDisplayData("black", player2)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerSettling === 2){
  addingRes(player3)
    playerDisplayData("red", player3)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerSettling === 3){
addingRes(player4) 
   playerDisplayData("green", player4)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerSettling === 4){
addingRes(player4)
  playerDisplayData("green", player4)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerSettling === 5){
addingRes(player3)
    playerDisplayData("red", player3)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerSettling === 6){
addingRes(player2)
      playerDisplayData("black", player2)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerSettling === 7){
addingRes(player1)  
  playerDisplayData("blue", player1)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  }

  if (playerSettling === 8){

    buttonTurn.style.display = "inline-block";
    playerSettling = 10;
    playerTurns = 1;
  } else {
    playerSettling++;
  }

  });

  buttonTurn.addEventListener("mouseover", function() {
  this.style.boxShadow = ("-5px -5px 10px 10px #888")
  });

  buttonTurn.addEventListener("mouseout", function() {
  this.style.boxShadow = ("")
  });

buttonTurn.addEventListener("click", function(){
  buttonTurn.innerHTML = "END </br> TURN";
  fieldExchange.style.display = "none";

   

if (playerTurns === 0){

  playerDisplayData("blue", player1)
  } else if (playerSettling === 1){
            
  playerDisplayData("black", player2)
  } else if (playerSettling === 2){
     playerDisplayData("red", player3)
  } else if (playerSettling === 3){
      
  playerDisplayData("green", player4)
  } 

    
//kostki    
  var dice1 = document.createElement("div");
  var dice2 = document.createElement("div");
  dice1.id = "dice1";
  dice2.id = "dice2";
  body.appendChild(dice1);
  body.appendChild(dice2);

  diceNumber1 = Math.ceil(Math.random() * 6);
  diceNumber2 = Math.ceil(Math.random() * 6);
  dice1Color = dice1Colors[Math.floor(Math.random()*6)];

  totalNumber = diceNumber1 + diceNumber2;
  var connections = document.querySelectorAll(".connections");

//pobieranie surowców przy wypadnięciu odpowiedniej liczby oczek dla osady

for (var i = 0; i < connections.length; i++){
  if (connections[i].getAttribute("realEstate") === "village"){
     if (connections[i].getAttribute("number1") == totalNumber ){
      var res1String = connections[i].getAttribute("resource1");
      players[connections[i].getAttribute("possessor")][res1String]++;
    }
      if (connections[i].getAttribute("number2") == totalNumber ){
       var res1String = connections[i].getAttribute("resource2");
       players[connections[i].getAttribute("possessor")][res1String]++;
     }
       if (connections[i].getAttribute("number3") == totalNumber ){
        var res1String = connections[i].getAttribute("resource3");
        players[connections[i].getAttribute("possessor")][res1String]++;

     }
  }
}


//dopisać towary handlowe!!

//pobieranie surowców przy wypadnięciu odpowiedniej liczby oczek dla miasta    
for (var i = 0; i < connections.length; i++){
  if (connections[i].getAttribute("realEstate") === "town"){
     if (connections[i].getAttribute("number1") == totalNumber ){
      var res1String = connections[i].getAttribute("resource1");
      if (res1String == "stones" || res1String == "wheat" || res1String == "bricks"){
      players[connections[i].getAttribute("possessor")][res1String] = players[connections[i].getAttribute("possessor")][res1String] + 2;
    } else if (res1String == "food"){
      players[connections[i].getAttribute("possessor")].food++;
      players[connections[i].getAttribute("possessor")].leather++;
    } else if (res1String == "iron"){
      players[connections[i].getAttribute("possessor")].iron++;
      players[connections[i].getAttribute("possessor")].coins++;
    } else if (res1String == "wood"){
      players[connections[i].getAttribute("possessor")].wood++;
      players[connections[i].getAttribute("possessor")].paper++;
    }
    }
      if (connections[i].getAttribute("number2") == totalNumber ){
       var res1String = connections[i].getAttribute("resource2");
       if (res1String == "stones" || res1String == "wheat" || res1String == "bricks"){
       players[connections[i].getAttribute("possessor")][res1String] = players[connections[i].getAttribute("possessor")][res1String] + 2;
       } else if (res1String == "food"){
         players[connections[i].getAttribute("possessor")].food++;
         players[connections[i].getAttribute("possessor")].leather++;
       } else if (res1String == "iron"){
         players[connections[i].getAttribute("possessor")].iron++;
         players[connections[i].getAttribute("possessor")].coins++;
       } else if (res1String == "wood"){
         players[connections[i].getAttribute("possessor")].wood++;
         players[connections[i].getAttribute("possessor")].paper++;
       }
     }
       if (connections[i].getAttribute("number3") == totalNumber ){
        var res1String = connections[i].getAttribute("resource3");
        if (res1String == "stones" || res1String == "wheat" || res1String == "bricks"){
        players[connections[i].getAttribute("possessor")][res1String] = players[connections[i].getAttribute("possessor")][res1String] + 2;
      } else if (res1String == "food"){
          players[connections[i].getAttribute("possessor")].food++;
          players[connections[i].getAttribute("possessor")].leather++;
        } else if (res1String == "iron"){
          players[connections[i].getAttribute("possessor")].iron++;
          players[connections[i].getAttribute("possessor")].coins++;
        } else if (res1String == "wood"){
          players[connections[i].getAttribute("possessor")].wood++;
          players[connections[i].getAttribute("possessor")].paper++;
        }
     }
  }
}

  if (playerTurns === 1){
  playerDisplayData("blue", player1);
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerTurns === 2){
       
  playerDisplayData("black", player2)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerTurns === 3){
      
  playerDisplayData("red", player3)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  } else if (playerTurns === 4){
       
  playerDisplayData("green", player4)
    body.style.backgroundImage = "-webkit-linear-gradient(" + Math.floor(Math.random()*360) + "deg, white, grey)";
  }

  if (playerTurns === 4){
playerTurns = 1
  } else {
    playerTurns++;
  }

//układ kostek

  if (diceNumber1 === 1){
  dice1.style.backgroundColor = dice1Color
  var newPoint = document.createElement("div");
  newPoint.classList.add("pointWhite");
  newPoint.style.margin = "34px";
  dice1.appendChild(newPoint);
} else if (diceNumber1 === 2) {
  dice1.style.backgroundColor = dice1Color
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("pointWhite");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("pointWhite");
    newPoint2.style.bottom = "5px";
    newPoint2.style.right = "5px";
dice1.appendChild(newPoint1);
dice1.appendChild(newPoint2);
} else if (diceNumber1 === 3){
  dice1.style.backgroundColor = dice1Color
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("pointWhite");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("pointWhite");
    newPoint2.style.top = "34px";
    newPoint2.style.left = "34px";
    var newPoint3 = document.createElement("div");
      newPoint3.classList.add("pointWhite");
      newPoint3.style.bottom = "5px";
      newPoint3.style.right = "5px";
dice1.appendChild(newPoint1);
dice1.appendChild(newPoint2);
dice1.appendChild(newPoint3);
} else if (diceNumber1 === 4){
  dice1.style.backgroundColor = dice1Color
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("pointWhite");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("pointWhite");
    newPoint2.style.top = "5px";
    newPoint2.style.right = "5px";
    var newPoint3 = document.createElement("div");
      newPoint3.classList.add("pointWhite");
      newPoint3.style.bottom = "5px";
      newPoint3.style.right = "5px";
    var newPoint4 = document.createElement("div");
      newPoint4.classList.add("pointWhite");
      newPoint4.style.bottom = "5px";
      newPoint4.style.left = "5px";
dice1.appendChild(newPoint1);
dice1.appendChild(newPoint2);
dice1.appendChild(newPoint3);
dice1.appendChild(newPoint4);
} else if (diceNumber1 === 5){
  dice1.style.backgroundColor = dice1Color
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("pointWhite");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("pointWhite");
    newPoint2.style.top = "34px";
    newPoint2.style.left = "34px";
    var newPoint3 = document.createElement("div");
      newPoint3.classList.add("pointWhite");
      newPoint3.style.bottom = "5px";
      newPoint3.style.right = "5px";
    var newPoint4 = document.createElement("div");
      newPoint4.classList.add("pointWhite");
      newPoint4.style.top = "5px";
      newPoint4.style.right = "5px";
    var newPoint5 = document.createElement("div");
      newPoint5.classList.add("pointWhite");
      newPoint5.style.bottom = "5px";
      newPoint5.style.left = "5px";
dice1.appendChild(newPoint1);
dice1.appendChild(newPoint2);
dice1.appendChild(newPoint3);
dice1.appendChild(newPoint4);
dice1.appendChild(newPoint5);
} else if (diceNumber1 === 6){
  dice1.style.backgroundColor = dice1Color
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("pointWhite");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("pointWhite");
    newPoint2.style.top = "5px";
    newPoint2.style.right = "5px";
    var newPoint3 = document.createElement("div");
      newPoint3.classList.add("pointWhite");
      newPoint3.style.bottom = "5px";
      newPoint3.style.right = "5px";
    var newPoint4 = document.createElement("div");
      newPoint4.classList.add("pointWhite");
      newPoint4.style.bottom = "5px";
      newPoint4.style.left = "5px";
    var newPoint5 = document.createElement("div");
      newPoint5.classList.add("pointWhite");
      newPoint5.style.bottom = "34px";
      newPoint5.style.left = "5px";
    var newPoint6 = document.createElement("div");
      newPoint6.classList.add("pointWhite");
      newPoint6.style.bottom = "34px";
      newPoint6.style.right = "5px";
dice1.appendChild(newPoint1);
dice1.appendChild(newPoint2);
dice1.appendChild(newPoint3);
dice1.appendChild(newPoint4);
dice1.appendChild(newPoint5);
dice1.appendChild(newPoint6);
}




  if (diceNumber2 === 1){
  var newPoint = document.createElement("div");
  newPoint.classList.add("point");
  dice2.appendChild(newPoint);
  newPoint.style.margin = "35px";
} else if (diceNumber2 === 2) {
    var newPoint1 = document.createElement("div");
      newPoint1.classList.add("point");
      newPoint1.style.top = "5px";
      newPoint1.style.left = "5px";
    var newPoint2 = document.createElement("div");
    newPoint2.style.bottom = "5px";
      newPoint2.classList.add("point");
      newPoint2.style.right = "5px";
  dice2.appendChild(newPoint1);
  dice2.appendChild(newPoint2);
} else if (diceNumber2 === 3){
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("point");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("point");
    newPoint2.style.top = "36px";
    newPoint2.style.left = "36px";
    var newPoint3 = document.createElement("div");
      newPoint3.classList.add("point");
      newPoint3.style.bottom = "5px";
      newPoint3.style.right = "5px";
dice2.appendChild(newPoint1);
dice2.appendChild(newPoint2);
dice2.appendChild(newPoint3);
} else if (diceNumber2 === 4){
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("point");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("point");
    newPoint2.style.top = "5px";
    newPoint2.style.right = "5px";
    var newPoint3 = document.createElement("div");
      newPoint3.classList.add("point");
      newPoint3.style.bottom = "5px";
      newPoint3.style.right = "5px";
    var newPoint4 = document.createElement("div");
      newPoint4.classList.add("point");
      newPoint4.style.bottom = "5px";
      newPoint4.style.left = "5px";
dice2.appendChild(newPoint1);
dice2.appendChild(newPoint2);
dice2.appendChild(newPoint3);
dice2.appendChild(newPoint4);
} else if (diceNumber2 === 5){
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("point");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("point");
    newPoint2.style.top = "36px";
    newPoint2.style.left = "36px";
    var newPoint3 = document.createElement("div");
      newPoint3.classList.add("point");
      newPoint3.style.bottom = "5px";
      newPoint3.style.right = "5px";
    var newPoint4 = document.createElement("div");
      newPoint4.classList.add("point");
      newPoint4.style.top = "5px";
      newPoint4.style.right = "5px";
    var newPoint5 = document.createElement("div");
      newPoint5.classList.add("point");
      newPoint5.style.bottom = "5px";
      newPoint5.style.left = "5px";
dice2.appendChild(newPoint1);
dice2.appendChild(newPoint2);
dice2.appendChild(newPoint3);
dice2.appendChild(newPoint4);
dice2.appendChild(newPoint5);
} else if (diceNumber2 === 6){
  var newPoint1 = document.createElement("div");
    newPoint1.classList.add("point");
    newPoint1.style.top = "5px";
    newPoint1.style.left = "5px";
  var newPoint2 = document.createElement("div");
    newPoint2.classList.add("point");
    newPoint2.style.top = "5px";
    newPoint2.style.right = "5px";
    var newPoint3 = document.createElement("div");
      newPoint3.classList.add("point");
      newPoint3.style.bottom = "5px";
      newPoint3.style.right = "5px";
    var newPoint4 = document.createElement("div");
      newPoint4.classList.add("point");
      newPoint4.style.bottom = "5px";
      newPoint4.style.left = "5px";
    var newPoint5 = document.createElement("div");
      newPoint5.classList.add("point");
      newPoint5.style.bottom = "36px";
      newPoint5.style.left = "5px";
    var newPoint6 = document.createElement("div");
      newPoint6.classList.add("point");
      newPoint6.style.bottom = "36px";
      newPoint6.style.right = "5px";
dice2.appendChild(newPoint1);
dice2.appendChild(newPoint2);
dice2.appendChild(newPoint3);
dice2.appendChild(newPoint4);
dice2.appendChild(newPoint5);
dice2.appendChild(newPoint6);
}

});

//pytanie o imiona graczy    

var name1 = prompt("what's your name?");
var name2 = prompt("what's your name?");
var name3 = prompt("what's your name?");
var name4 = prompt("what's your name?");
    
//tworzenie obiektów - graczy

var Play = function(n){
  this.name = n;
  this.carriage = 1;
  this.wood = 0;
  this.bricks = 0;
  this.wheat = 0;
  this.food = 0;
  this.stones = 0;
  this.leather = 0;
  this.iron = 0;
  this.coins = 0;
  this.paper = 0;
    this.woodExchange = 4;
    this.bricksExchange = 4;
    this.wheatExchange = 4;
    this.foodExchange = 4;
    this.stonesExchange = 4;
    this.leatherExchange = 4;
    this.ironExchange = 4;
    this.coinsExchange = 4;
    this.paperExchange = 4;
}

var player1 = new Play (name1);
var player2 = new Play (name2);
var player3 = new Play (name3);
var player4 = new Play (name4);

var players = [player1, player2, player3, player4]

//wyszukiwanie wszystkich pól sąsiadujących z wodą
var portFields = document.querySelectorAll('[water]');

var portProperty = ["wood", "food", "bricks", "stones", "wheat", "iron", ""]

//tworzenie portów handlowych z losowych pól nad wodą

for (var i = 0; i<portFields.length; i++){
  var randomPorts = Math.floor(Math.random()*8);
  var randomPortsProperty = Math.floor(Math.random()*7);
  if (randomPorts === 0){
    portFields[i].setAttribute("port", "yes");
    portFields[i].setAttribute("portProperty", portProperty[randomPortsProperty]);
    portFields[i].style.border = "3px solid black";
    portFields[i].style.backgroundColor = "red";

  }
}

//informacje o właściwościach portu
var ports = document.querySelectorAll('[port]');
var portInfo = document.createElement("div");
body.appendChild(portInfo);
portInfo.style.display = "none";
portInfo.style.position = "absolute"
portInfo.style.width = "350px";
portInfo.style.height = "40px";
portInfo.style.top = "0px";
portInfo.style.left = "5px";
portInfo.style.border = "5px solid black";
portInfo.style.fontSize = "25px";

for (var i = 0; i < ports.length; i++){
  ports[i].addEventListener("mouseover", function(){
  portInfo.style.display = "inline-block";
  if (this.getAttribute("portProperty") != ""){
  portInfo.innerText = this.getAttribute("portProperty") + " exchange 2:1";
} else {
  portInfo.innerText = "exchange all resources 3:1"
}
  });

ports[i].addEventListener("mouseout", function(){
  portInfo.style.display = "none";
});
}

    
//rozciąganie paska z surowcami
var resourceName = document.getElementById('dataName');
var resourceData = document.getElementById('data');
var resourcePar = document.querySelectorAll('.player');

    
resourceName.addEventListener('click', function(){
    if(resourceData.style.width == "10px"){
        resourceData.style.width = "280px";
        resourceData.style.backgroundImage = "-webkit-linear-gradient(300deg, lightblue, grey)";
        for (var u = 0; u < resourcePar.length; u++){
            resourcePar[u].style.display = 'block';
            }
        } else {
             resourceData.style.width = "10px";
               for (var u = 0; u < resourcePar.length; u++){
            resourcePar[u].style.display = 'none';
            }
        }
    })
    

    
})



