var dollar = 0;
var totalclicks=0;
var totalclicksupgrade=0;
var upgrade1unlock=0;
var costU1=10;

function dollarUpdate(){
    document.getElementById("dollars").innerHTML = dollar.toPrecision(2);
};


function clickMe(){
dollar=dollar + 1;
totalclicks=totalclicks +1; 
document.getElementById("dollars").innerHTML = dollar.toPrecision(2);
}



function upgrade1Unlock() {
    if (dollar > costU1){
          upgrade1unlock= upgrade1unlock + 1
          dollar = dollar - costU1
          costU1 = costU1*1000
   }
}


function CpsGutschreiben(){
    if (upgrade1unlock > 0){
    dollar = dollar + (upgrade1unlock*totalclicks/1000);
    
}
};



window.setInterval(function(){          // funktionen 1x pro Sekunden Updaten (CPS)
	
    dollarUpdate();
    CpsGutschreiben();
	
}, 1000);
