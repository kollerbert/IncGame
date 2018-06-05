var dollar = 0;
var totalclicks = 0;
var totalclicksupgrade = 0;
var upgrade1unlock = 0;
var costU1 = 10;

function dollarUpdate() {
    document.getElementById('dollars').innerHTML = dollar.toFixed(2);
}

function clickMe() {
    dollar = dollar + 1;
    totalclicks = totalclicks + 1;
    document.getElementById('dollars').innerHTML = dollar.toFixed(2);
}

function upgrade1Unlock() {
    if (dollar > costU1) {
        upgrade1unlock = upgrade1unlock + 1;
        dollar = dollar - costU1;
        costU1 = costU1 * 1000;
        document.getElementById('upgrade1unlocks').innerHTML = upgrade1unlock;
        document.getElementById('costU1s').innerHTML = costU1.toFixed(2);
    }
}

function CpsGutschreiben() {
    if (upgrade1unlock > 0) {
        dollar = dollar + upgrade1unlock * totalclicks / 1000;
    }
}

/*
function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(dollar >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
        dollar = dollar - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('dollars').innerHTML = dollar;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
*/

window.setInterval(function() {
    // funktionen 1x pro Sekunden Updaten (CPS)

    dollarUpdate();
    CpsGutschreiben();
}, 1000);
