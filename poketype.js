var result=[]; //debugging id
var isAtk=true;
const pokeType=["norm","fire","water","grass","elec","ice","fight","pois","grnd","fly","psych","bug","rck","ghst","drag","drk","steel","fairy"]
var attack = document.getElementById('atknav');
var defence = document.getElementById('defnav');

hideAllTypes();
isAtk=true;
attack.style.color = 'white';
attack.style.background = 'red';

defence.style.color = 'black';
defence.style.background = 'white';
// start

function clicky(poke){

  if (poke=="atknav"){ //sets atk/def
    isAtk=true;
    getType(poke);
    attack.style.color = 'white';
    attack.style.background = 'red';

    defence.style.color = 'black';
    defence.style.background = 'white';
      
  } else if (poke=="defnav"){ //sets atk/def
    isAtk=false;
    getType(poke);
    attack.style.color = 'black';
    attack.style.background = 'white';

    defence.style.color = 'white';
    defence.style.background = 'blue';

  } else {
    result=[];
    getType(poke);
  }

  display();
}

function getType(clicky){
  for (var i=0; i<=18; i+=1){
    if (clicky==pokeType[i]){
      result.push(pokeType[i]);
    }       
  }
}

function display(){ //if atk t-f
  if (isAtk) {
    if (result[0]=="norm"){
      hideAllTypes()
      atkNorm();
    } else if (result[0]=="fire") {
      hideAllTypes()
      atkFire();
    } else if (result[0]=="water") {
      hideAllTypes()
      atkWater();
    } else if (result[0]=="grass") {
      hideAllTypes()
      atkGrass();
    } else if (result[0]=="elec") {
      hideAllTypes()
      atkElec();
    } else if (result[0]=="ice") {
      hideAllTypes()
      atkIce();
    } else if (result[0]=="fight") {
      hideAllTypes()
      atkFight();
    } else if (result[0]=="pois") {
      hideAllTypes()
      atkPois();
    } else if (result[0]=="grnd") {
      hideAllTypes()
      atkGrnd();      
    } else if (result[0]=="fly") {
      hideAllTypes()
      atkFly();
    } else if (result[0]=="psych") {
      hideAllTypes()
      atkPsych();
    } else if (result[0]=="bug") {
      hideAllTypes()
      atkBug();
    } else if (result[0]=="rck") {
      hideAllTypes()
      atkRck();
    } else if (result[0]=="ghst") {
      hideAllTypes()
      atkGhst();
    } else if (result[0]=="drag") {
      hideAllTypes()
      atkDrag();
    } else if (result[0]=="drk") {
      hideAllTypes()
      atkDrk();
    } else if (result[0]=="steel") {
      hideAllTypes()
      atkSteel();
    } else if (result[0]=="fairy") {
      hideAllTypes()
      atkFairy();
    }
  } else {
    if (result[0]=="norm"){
      hideAllTypes()
      defNorm();
    } else if (result[0]=="fire") {
      hideAllTypes()
      defFire();
    } else if (result[0]=="water") {
      hideAllTypes()
      defWater();
    } else if (result[0]=="grass") {
      hideAllTypes()
      defGrass();
    } else if (result[0]=="elec") {
      hideAllTypes()
      defElec();
    } else if (result[0]=="ice") {
      hideAllTypes()
      defIce();
    } else if (result[0]=="fight") {
      hideAllTypes()
      defFight();
    } else if (result[0]=="pois") {
      hideAllTypes()
      defPois();
    } else if (result[0]=="grnd") {
      hideAllTypes()
      defGrnd();      
    } else if (result[0]=="fly") {
      hideAllTypes()
      defFly();
    } else if (result[0]=="psych") {
      hideAllTypes()
      defPsych();
    } else if (result[0]=="bug") {
      hideAllTypes()
      defBug();
    } else if (result[0]=="rck") {
      hideAllTypes()
      defRck();
    } else if (result[0]=="ghst") {
      hideAllTypes()
      defGhst();
    } else if (result[0]=="drag") {
      hideAllTypes()
      defDrag();
    } else if (result[0]=="drk") {
      hideAllTypes()
      defDrk();
    } else if (result[0]=="steel") {
      hideAllTypes()
      defSteel();
    } else if (result[0]=="fairy") {
      hideAllTypes()
      defFairy();
    }

  }
}

//clear all
function hideAllTypes(){
  //clear choice
  var choice = document.getElementById('choice');
  choice.textContent = " ";
  choice.style.background = 'White';

  //clear noeffect column
  var noEffect = document.getElementsByClassName("noEffect"); 
  //returns an array
  for (var i=0;i<noEffect.length;i+=1){
    noEffect[i].style.display = 'none';
  }

  //clear strong column
  var strong = document.getElementsByClassName("stype"); 
  //returns an array
  for (var i=0;i<strong.length;i+=1){
    strong[i].style.display = 'none';
  }

  //clear weak column
  var weak = document.getElementsByClassName("wtype");
  //returns an array
  for (var i=0;i<weak.length;i+=1){
    weak[i].style.display = 'none';
  }
}

//attacking

function atkNorm() {
  //hide all 
  hideAllTypes(); 

  //var fairy = document.getElementById("fairy");

  //You chose Fairy!
  var choice = document.getElementById('choice');
  choice.textContent = "Normal";
  choice.style.color = 'black';
  choice.style.background = 'gainsboro';

  //show strong
  //nothing. it weak

  //show weak
  var rock = document.getElementById('wRck');
  var steel = document.getElementById('wSteel');
  rock.style.display="block";
  steel.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Ghost";
  noEffect.style.display="block";
}

function atkFire() {
  //hide all 
  hideAllTypes(); 

  //var fairy = document.getElementById("fairy");

  //You chose Fire!
  var choice = document.getElementById('choice');
  choice.textContent = "Fire";
  choice.style.color = 'MistyRose';
  choice.style.background = 'OrangeRed';

  //show strong
  //grass, ice, bug
  var grass = document.getElementById('sGrass');
  var ice = document.getElementById('sIce');
  var bug = document.getElementById('sBug');
  var steel = document.getElementById('sSteel');

  grass.style.display="block";
  ice.style.display="block";
  bug.style.display="block";
  steel.style.display="block";

  //show weak
  //fire, water, rock, dragon
  var fire = document.getElementById('wFire');
  var water = document.getElementById('wWater');
  var rock = document.getElementById('wRck');
  var drag = document.getElementById('wDrag');

  fire.style.display="block";
  water.style.display="block";
  rock.style.display="block";
  drag.style.display="block";

  //NO EFFECT
  // n/a
}

function atkWater() {
  //hide all 
  hideAllTypes(); 

  //You chose Water!
  var choice = document.getElementById('choice');
  choice.textContent = "Water";
  choice.style.background = 'LightSkyBlue';
  choice.style.color = 'Black';


  //show strong
  //fire, grnd, rck
  var fire = document.getElementById('sFire');
  var grnd = document.getElementById('sGrnd');
  var rock = document.getElementById('sRck');

  fire.style.display="block";
  grnd.style.display="block";
  rock.style.display="block";

  //show weak
  //water, grass, drag
  var water = document.getElementById('wWater');
  var grass = document.getElementById('wGrass');
  var drag = document.getElementById('wDrag');

  water.style.display="block";
  grass.style.display="block";
  drag.style.display="block";

  //NO EFFECT
  // n/a
}

function atkGrass(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Grass";
  choice.style.background = 'ForestGreen';
  choice.style.color = 'White';

  //show strong
  //water, grnd, rck
  var water = document.getElementById('sWater');
  var grnd = document.getElementById('sGrnd');
  var rock = document.getElementById('sRck');

  water.style.display="block";
  grnd.style.display="block";
  rock.style.display="block";

  //show weak
  //fire, grass, poison, flying, bug, dragon,steel
  var fire = document.getElementById('wFire');
  var grass = document.getElementById('wGrass');
  var pois = document.getElementById('wPois');
  var fly = document.getElementById('wFly');
  var bug = document.getElementById('wBug');
  var drag = document.getElementById('wDrag');
  var steel = document.getElementById('wSteel');

  fire.style.display="block";
  grass.style.display="block";
  pois.style.display="block";
  fly.style.display="block";
  bug.style.display="block";
  drag.style.display="block";
  steel.style.display="block";
  

  //NO EFFECT
  // n/a
}

function atkElec(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Electric";
  choice.style.background = 'Gold';
  choice.style.color = 'Black';

  //show strong
  //water, flying
  var water = document.getElementById('sWater');
  var fly = document.getElementById('sFly');

  water.style.display="block";
  fly.style.display="block";

  //show weak
  //grass, electric, dragon
  var grass = document.getElementById('wGrass');
  var elec = document.getElementById('wElec');
  var drag = document.getElementById('wDrag');

  fire.style.display="block";
  grass.style.display="block";
  pois.style.display="block";
  fly.style.display="block";
  bug.style.display="block";
  drag.style.display="block";
  steel.style.display="block";
  

  //NO EFFECT
  // ground
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Ground";
  noEffect.style.display="block";
}

function atkIce() {
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Ice";
  choice.style.background = 'AliceBlue';
  choice.style.color = 'Black';

  //show strong
  //grass, ground, fly, dragon
  var grass = document.getElementById('sGrass');
  var ground = document.getElementById('sGrnd');
  var fly = document.getElementById('sFly');
  var drag = document.getElementById('sDrag');

  grass.style.display="block";
  ground.style.display="block";
  fly.style.display="block";
  drag.style.display="block";

  //show weak
  //fire, water, ice, steel
  var fire = document.getElementById('wFire');
  var water = document.getElementById('wWater');
  var ice = document.getElementById('wIce');
  var steel = document.getElementById('wSteel');

  fire.style.display="block";
  water.style.display="block";
  ice.style.display="block";
  steel.style.display="block";
  

  //NO EFFECT
  // n/a
}

function atkFight(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Fighting";
  choice.style.background = 'DarkRed';
  choice.style.color = 'White';

  //show strong
  //norm, ice, rock, dark, steel
  var norm = document.getElementById('sNorm');
  var ice = document.getElementById('sIce');
  var rck = document.getElementById('sRck');
  var drk = document.getElementById('sDrk');
  var steel = document.getElementById('sSteel');

  norm.style.display="block";
  ice.style.display="block";
  rck.style.display="block";
  drk.style.display="block";
  steel.style.display="block";

  //show weak
  //poison, flying, psychic, bug, fairy

  var pois = document.getElementById('wPois');
  var fly = document.getElementById('wFly');
  var psychic = document.getElementById('wPsych');
  var bug = document.getElementById('wBug');
  var fairy = document.getElementById('wFairy');
    

  pois.style.display="block";
  fly.style.display="block";
  psychic.style.display="block";
  bug.style.display="block";
  fairy.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Ghost";
  noEffect.style.display="block";

}

function atkPois(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Poison";
  choice.style.background = 'Indigo';
  choice.style.color = 'White';

  //show strong
  //grass, fairy
  var grass = document.getElementById('sGrass');
  var fairy = document.getElementById('sFairy');  

  grass.style.display="block";
  fairy.style.display="block";

  //show weak
  //poison, ground, rock, ghost

  var pois = document.getElementById('wPois');
  var grnd = document.getElementById('wGrnd');
  var rock = document.getElementById('wRck');
  var ghost = document.getElementById('wGhst');

  pois.style.display="block";
  grnd.style.display="block";
  rck.style.display="block";
  ghost.style.display="block";    

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');  
  noEffect.textContent = "Steel";
  noEffect.style.display="block";

}

function atkGrnd() {
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Ground";
  choice.style.background = 'DarkKhaki';
  choice.style.color = 'Black';

  //show strong
  //Fire, electric, poison, rock, steel    
  var fire = document.getElementById('sFire');
  var elec = document.getElementById('sElec');
  var pois = document.getElementById('sPois');
  var rck = document.getElementById('sRck');
  var steel = document.getElementById('sSteel');


  fire.style.display="block";
  elec.style.display="block";
  pois.style.display="block";
  rck.style.display="block";
  steel.style.display="block";

  //show weak
  //grass, bug
  var grass = document.getElementById('wGrass');
  var bug = document.getElementById('wBug');

  grass.style.display="block";
  bug.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Flying";
  noEffect.style.display="block";
}

function atkFly(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Flying";
  choice.style.background = 'PaleTurquoise';
  choice.style.color = 'Black';

  //show strong
  //grass, fighting, bug  
  var grass = document.getElementById('sGrass');
  var fight = document.getElementById('sFight');
  var bug = document.getElementById('sBug');

  grass.style.display="block";
  fight.style.display="block";
  bug.style.display="block";

  //show weak
  //electric, rock, steel   
  var elec = document.getElementById('wElectric');
  var rock = document.getElementById('wRck');
  var steel = document.getElementById('wSteel'); 

  elec.style.display="block";
  rock.style.display="block";
  steel.style.display="block";

  //NO EFFECT
  // n/a
}

function atkPsych(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Psychic";
  choice.style.background = 'Fuchsia';
  choice.style.color = 'White';

  //show strong
  //fight, poison
  var fight = document.getElementById('sFight');
  var pois = document.getElementById('sPois');
  
  fight.style.display="block";
  pois.style.display="block";

  //show weak
  //psychic, steel  
  var psychic = document.getElementById('wPsych');
  var steel = document.getElementById('wSteel');    

  psychic.style.display="block";
  steel.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Dark";
  noEffect.style.display="block";
}

function atkBug() {
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Bug";
  choice.style.background = 'Olive';
  choice.style.color = 'White';


  //show strong
  //grass, psych, dark  
  var grass = document.getElementById('sGrass');
  var psychic = document.getElementById('sPsych');
  var drk = document.getElementById('sDrk');


  grass.style.display="block";
  psychic.style.display="block";
  drk.style.display="block";

  //show weak
  //fire, fight, poison, fly, ghost, steel, fairy  
  var fire = document.getElementById('wFire');
  var fight = document.getElementById('wFight');
  var pois = document.getElementById('wPois');
  var fly = document.getElementById('wFly');
  var ghost = document.getElementById('wGhst');
  var steel = document.getElementById('wSteel');
  var fairy = document.getElementById('wFairy');


  fire.style.display="block";
  fight.style.display="block";
  pois.style.display="block";
  fly.style.display="block";
  ghost.style.display="block";
  steel.style.display="block";
  fairy.style.display="block";
  //NO EFFECT
  // n/a
}

function atkRck(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Rock";
  choice.style.background = 'Sienna';
  choice.style.color = 'White';


  //show strong
  //fire, fight, fly, bug  
  var fire = document.getElementById('sFire');
  var fly = document.getElementById('sFly');
  var bug = document.getElementById('sBug');


  fire.style.display="block";
  fly.style.display="block";
  bug.style.display="block";

  //show weak
  //fight, ground, steel    
  var fight = document.getElementById('wFight');
  var grnd = document.getElementById('wGrnd');
  var steel = document.getElementById('wSteel');


  fight.style.display="block";
  grnd.style.display="block";
  steel.style.display="block";

  //NO EFFECT
  // n/a
}

function atkGhst(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Ghost";
  choice.style.background = 'MediumPurple';
  choice.style.color = 'White';


  //show strong
  //psych, ghost  
  var psychic = document.getElementById('sPsych');
  var ghost = document.getElementById('sGhst');

  psychic.style.display="block";
  ghost.style.display="block";

  //show weak
  //dark    
  var drk = document.getElementById('wDrk');

  drk.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Normal";
  noEffect.style.display="block";

}

function atkDrag() {
  //hide all 
  hideAllTypes();

  var choice = document.getElementById('choice');
  choice.textContent = "Dragon";
  choice.style.background = 'SteelBlue';
  choice.style.color = 'White';

  //show strong
  //dragon  
  var drag = document.getElementById('sDrag');

  drag.style.display="block";

  //show weak
  //steel
  var steel = document.getElementById('wSteel');

  steel.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Fairy";
  noEffect.style.display="block";

}

function atkDrk(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Dark";
  choice.style.background = 'DimGray';
  choice.style.color = 'White';


  //show strong
  //psych, ghost
  var psychic = document.getElementById('sPsych');
  var ghost = document.getElementById('sGhst');

  psychic.style.display="block";
  ghost.style.display="block";

  //show weak
  //dark, fairy    
  var fight = document.getElementById('wFight');
  var drk = document.getElementById('wDrk');
  var fairy = document.getElementById('wFairy');

  fight.style.display="block";
  drk.style.display="block";
  fairy.style.display="block";

  //NO EFFECT
  // n/a
}

function atkSteel() {
  //var steel = document.getElementById("steel");

  //hide all 
  hideAllTypes();

  //You chose Fairy!
  var choice = document.getElementById('choice');
  choice.textContent = "Steel";
  choice.style.background = 'Silver';
  choice.style.color = 'Black';


  //show strong
  var ice = document.getElementById('sIce');
  var rck = document.getElementById('sRck');
  var fairy = document.getElementById('sFairy');


  ice.style.display="block";
  rck.style.display="block";
  fairy.style.display="block";

  //show weak
  var fire = document.getElementById('wFire');
  var water = document.getElementById('wWater');
  var electric = document.getElementById('wElectric');
  var steel = document.getElementById('sSteel');

  fire.style.display="block";
  water.style.display="block";
  electric.style.display="block";
  steel.style.display="block";
  
}

function atkFairy() {
  //var fairy = document.getElementById("fairy");

  //hide all 
  hideAllTypes(); 

  //You chose Fairy!
  var choice = document.getElementById('choice');
  choice.textContent = "Fairy";
  choice.style.background = 'HotPink';
  choice.style.color = 'White';


  //show strong
  //fight, dragon, dark
  var fighting = document.getElementById('sFight');
  var drag = document.getElementById('sDrag');
  var drk = document.getElementById('sDrk');


  fighting.style.display="block";
  drag.style.display="block";
  drk.style.display="block";

  //show weak
  //fire poison steel
  var fire = document.getElementById('wFire');
  var pois = document.getElementById('wPois');
  var steel = document.getElementById('wSteel');

  fire.style.display="block";
  pois.style.display="block";
  steel.style.display="block";
}

//defending

function defNorm() {
  //hide all 
  hideAllTypes(); 

  //var fairy = document.getElementById("fairy");

  var choice = document.getElementById('choice');
  choice.textContent = "Normal";
  choice.style.color = 'black';
  choice.style.background = 'gainsboro';

  //show strong  
  var fight = document.getElementById('sFight');
  fight.style.display="block";

  //show weak
  //nothing. it weak

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Ghost";
  noEffect.style.display="block";
}

function defFire() {
  //hide all 
  hideAllTypes(); 

  //var fairy = document.getElementById("fairy");

  //You chose Fire!
  var choice = document.getElementById('choice');
  choice.textContent = "Fire";
  choice.style.color = 'MistyRose';
  choice.style.background = 'OrangeRed';

  //show strong
  //ground rock water
  var ground = document.getElementById('sGrnd');
  var rock = document.getElementById('sRck');
  var water = document.getElementById('sWater');

  ground.style.display="block";
  rock.style.display="block";
  water.style.display="block";

  //show weak
  //bug steel fire grass ice fairy
  var bug = document.getElementById('wBug');
  var steel = document.getElementById('wSteel');
  var fire = document.getElementById('wFire');
  var grass = document.getElementById('wGrass');
  var ice = document.getElementById('wIce');
  var fairy = document.getElementById('wFairy');

  bug.style.display="block";
  steel.style.display="block";
  fire.style.display="block";
  grass.style.display="block";
  ice.style.display="block";
  fairy.style.display="block";


  //NO EFFECT
  // n/a
}

function defWater() {
  //hide all 
  hideAllTypes(); 

  //You chose Water!
  var choice = document.getElementById('choice');
  choice.textContent = "Water";
  choice.style.background = 'LightSkyBlue';
  choice.style.color = 'Black';


  //show strong
  //grass elec
  var grass = document.getElementById('sGrass');
  var elec = document.getElementById('sElec');

  grass.style.display="block";
  elec.style.display="block";

  //show weak
  //steel fire water ice
  var fire = document.getElementById('wFire');
  var water = document.getElementById('wWater');
  var ice = document.getElementById('wIce');
  var steel = document.getElementById('wSteel');
  
  fire.style.display="block";
  water.style.display="block";
  ice.style.display="block";
  steel.style.display="block";

  //NO EFFECT
  // n/a
}

function defGrass(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Grass";
  choice.style.background = 'ForestGreen';
  choice.style.color = 'White';

  //show strong
  //flying poison bug fire ice

  var fire = document.getElementById('sFire');
  var ice = document.getElementById('sIce');
  var pois = document.getElementById('sPois');
  var fly = document.getElementById('sFly');
  var bug = document.getElementById('sBug');

  fire.style.display="block";
  ice.style.display="block";
  pois.style.display="block";
  fly.style.display="block";
  bug.style.display="block";

  //show weak
  //ground water grass electric

  var water = document.getElementById('wWater');
  var grass = document.getElementById('wGrass');
  var elec = document.getElementById('wElectric');
  var grnd = document.getElementById('wGrnd');

  water.style.display="block";
  grass.style.display="block";
  elec.style.display="block";
  grnd.style.display="block";  

  //NO EFFECT
  // n/a
}

function defElec(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Electric";
  choice.style.background = 'Gold';
  choice.style.color = 'Black';

  //show strong
  //ground
  var ground = document.getElementById('sGrnd');

  ground.style.display="block";

  //show weak
  //flying steel electric
  var fly = document.getElementById('wFly');
  var steel = document.getElementById('wSteel');
  var elec = document.getElementById('wElectric');

  fly.style.display="block";
  steel.style.display="block";
  elec.style.display="block";
  

  //NO EFFECT
  // ground
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Ground";
  noEffect.style.display="block";
}

function defIce() {
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Ice";
  choice.style.background = 'AliceBlue';
  choice.style.color = 'Black';

  //show strong
  //fight rock steel fire
  var fight = document.getElementById('sFight');
  var rock = document.getElementById('sRck');
  var steel = document.getElementById('sSteel');
  var fire = document.getElementById('sFire');

  fight.style.display="block";
  rock.style.display="block";
  steel.style.display="block";
  fire.style.display="block";

  //show weak
  //ice
  var ice = document.getElementById('wIce');

  ice.style.display="block";
  

  //NO EFFECT
  // n/a
}

function defFight(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Fighting";
  choice.style.background = 'DarkRed';
  choice.style.color = 'White';

  //show strong
  //flying psychic fairy
  var fly = document.getElementById('sFly');
  var psych = document.getElementById('sPsych');
  var fairy = document.getElementById('sFairy');

  fly.style.display="block";
  psych.style.display="block";
  fairy.style.display="block";

  //show weak
  //rock bug dark

  var rock = document.getElementById('wRck');
  var bug = document.getElementById('wBug');
  var dark = document.getElementById('wDrk');

  rock.style.display="block";
  bug.style.display="block";
  dark.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Ghost";
  noEffect.style.display="block";

}

function defPois(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Poison";
  choice.style.background = 'Indigo';
  choice.style.color = 'White';

  //show strong
  //ground psychic
  var ground = document.getElementById('sGrnd');
  var psychic = document.getElementById('sPsych');  

  ground.style.display="block";
  psychic.style.display="block";

  //show weak
  //fight poison bug grass fairy
  var fight = document.getElementById('wFight');
  var poison = document.getElementById('wPois');
  var bug = document.getElementById('wBug');
  var grass = document.getElementById('wGrass');
  var fairy = document.getElementById('wFairy');

  fight.style.display="block";
  poison.style.display="block";
  bug.style.display="block";
  grass.style.display="block";    
  fairy.style.display="block"; 

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');  
  noEffect.textContent = "Steel";
  noEffect.style.display="block";

}

function defGrnd() {
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Ground";
  choice.style.background = 'DarkKhaki';
  choice.style.color = 'Black';

  //show strong
  //water grass ice 
  var water = document.getElementById('sWater');
  var grass = document.getElementById('sGrass');
  var ice = document.getElementById('sIce');


  water.style.display="block";
  grass.style.display="block";
  ice.style.display="block";

  //show weak
  //poison rock
  var poison = document.getElementById('wPois');
  var rck = document.getElementById('wRck');

  poison.style.display="block";
  rck.style.display="block";

  //NO EFFECT
  //electric
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Electric";
  noEffect.style.display="block";
}

function defFly(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Flying";
  choice.style.background = 'PaleTurquoise';
  choice.style.color = 'Black';

  //show strong
  //rock electric ice
  var rock = document.getElementById('sRck');
  var elec = document.getElementById('sElec');
  var ice = document.getElementById('sIce');

  rock.style.display="block";
  elec.style.display="block";
  ice.style.display="block";

  //show weak
  //fight grass 
  var fight = document.getElementById('wFight');
  var grass = document.getElementById('wGrass');

  fight.style.display="block";
  grass.style.display="block";

  //NO EFFECT
  //ground
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Ground";
  noEffect.style.display="block";
}

function defPsych(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Psychic";
  choice.style.background = 'Fuchsia';
  choice.style.color = 'White';

  //show strong
  //bug ghost dark
  var bug = document.getElementById('sBug');
  var ghost = document.getElementById('sGhst');
  var dark = document.getElementById('sDrk');  
  
  bug.style.display="block";
  ghost.style.display="block";
  dark.style.display="block";

  //show weak
  //fight psychic
  var psychic = document.getElementById('wPsych');
  var fight = document.getElementById('wFight');    

  psychic.style.display="block";
  fight.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Dark";
  noEffect.style.display="block";
}

function defBug() {
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Bug";
  choice.style.background = 'Olive';
  choice.style.color = 'White';


  //show strong
  //flying rock fire
  var flying = document.getElementById('sFly');
  var rock = document.getElementById('sRck');
  var fire = document.getElementById('sFire');

  flying.style.display="block";
  rock.style.display="block";
  fire.style.display="block";

  //show weak
  //fight ground grass
  var fight = document.getElementById('wFight');
  var ground = document.getElementById('wGrnd');
  var grass = document.getElementById('wGrass');


  fight.style.display="block";
  ground.style.display="block";
  grass.style.display="block";
  //NO EFFECT
  // n/a
}

function defRck(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Rock";
  choice.style.background = 'Sienna';
  choice.style.color = 'White';


  //show strong
  //fight ground steel water grass  
  var fight = document.getElementById('sFight');
  var ground = document.getElementById('sGrnd');
  var steel = document.getElementById('sSteel');
  var water = document.getElementById('sWater');
  var grass = document.getElementById('sGrass');


  fight.style.display="block";
  ground.style.display="block";
  steel.style.display="block";
  water.style.display="block";
  grass.style.display="block";

  //show weak
  //normal flying poison fire  
  var norm = document.getElementById('wNorm');
  var fly = document.getElementById('wFly');
  var poison = document.getElementById('wPois');
  var fire = document.getElementById('wFire');


  norm.style.display="block";
  fly.style.display="block";
  poison.style.display="block";
  fire.style.display="block";

  //NO EFFECT
  // n/a
}

function defGhst(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Ghost";
  choice.style.background = 'MediumPurple';
  choice.style.color = 'White';


  //show strong
  //ghost dark
  var ghost = document.getElementById('sGhst');
  var dark = document.getElementById('sDrk');

  ghost.style.display="block";
  dark.style.display="block";

  //show weak
  //poison bug  
  var poison = document.getElementById('wPois');
  var bug = document.getElementById('wBug');

  poison.style.display="block";
  bug.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Normal & Fighting";
  noEffect.style.display="block";

}

function defDrag() {
  //hide all 
  hideAllTypes();

  var choice = document.getElementById('choice');
  choice.textContent = "Dragon";
  choice.style.background = 'SteelBlue';
  choice.style.color = 'White';

  //show strong
  //ice dragon fairy  
  var ice = document.getElementById('sIce');
  var drag = document.getElementById('sDrag');
  var fairy = document.getElementById('sFairy');

  ice.style.display="block";
  drag.style.display="block";
  fairy.style.display="block";

  //show weak
  //fire water grass electric
  var fire = document.getElementById('wFire');
  var water = document.getElementById('wWater');
  var grass = document.getElementById('wGrass');
  var elec = document.getElementById('wElectric');

  fire.style.display="block";
  water.style.display="block";
  grass.style.display="block";
  elec.style.display="block";

  //NO EFFECT
  // n/a

}

function defDrk(){
  //hide all 
  hideAllTypes(); 

  var choice = document.getElementById('choice');
  choice.textContent = "Dark";
  choice.style.background = 'DimGray';
  choice.style.color = 'White';


  //show strong
  //fight bug fairy
  var fight = document.getElementById('sFight');
  var bug = document.getElementById('sBug');  
  var fairy = document.getElementById('sFairy');

  fight.style.display="block";
  bug.style.display="block";
  fairy.style.display="block";

  //show weak
  //ghost dark    
  var ghost = document.getElementById('wGhst');
  var drk = document.getElementById('wDrk');

  ghost.style.display="block";
  drk.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Psychic";
  noEffect.style.display="block";
}

function defSteel() {
  //var steel = document.getElementById("steel");

  //hide all 
  hideAllTypes();

  //You chose Fairy!
  var choice = document.getElementById('choice');
  choice.textContent = "Steel";
  choice.style.background = 'Silver';
  choice.style.color = 'Black';


  //show strong
  //fight ground fire
  var fight = document.getElementById('sFight');
  var ground = document.getElementById('sGrnd');
  var fire = document.getElementById('sFire');

  fight.style.display="block";
  ground.style.display="block";
  fire.style.display="block";

  //show weak
  //normal flying rock bug steel grass psychic ice drag fairy
  var norm = document.getElementById('wNorm');
  var fly = document.getElementById('wFly');
  var rock = document.getElementById('wRck');
  var bug = document.getElementById('wBug');
  var steel = document.getElementById('wSteel');
  var grass = document.getElementById('wGrass');
  var psych = document.getElementById('wPsych');
  var ice = document.getElementById('wIce');
  var drag = document.getElementById('wDrag');
  var fairy = document.getElementById('wFairy');

  norm.style.display="block";
  fly.style.display="block";
  rock.style.display="block";
  bug.style.display="block";
  steel.style.display="block";
  grass.style.display="block";
  psych.style.display="block";
  ice.style.display="block";
  drag.style.display="block";
  fairy.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Poison";
  noEffect.style.display="block";
  
}

function defFairy() {
  //var fairy = document.getElementById("fairy");

  //hide all 
  hideAllTypes(); 

  //You chose Fairy!
  var choice = document.getElementById('choice');
  choice.textContent = "Fairy";
  choice.style.background = 'HotPink';
  choice.style.color = 'White';


  //show strong
  //poison steel
  var poison = document.getElementById('sPois');
  var steel = document.getElementById('sSteel');

  poison.style.display="block";
  steel.style.display="block";

  //show weak
  //fight bug dark
  var fight = document.getElementById('wFight');
  var bug = document.getElementById('wBug');
  var dark = document.getElementById('wDrk');

  fight.style.display="block";
  bug.style.display="block";
  dark.style.display="block";

  //NO EFFECT
  var noEffect = document.querySelector('.noEffect');
  noEffect.textContent = "Dragon";
  noEffect.style.display="block";
}


