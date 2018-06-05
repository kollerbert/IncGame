var dollar = 0;
var totalclicks = 0;
var totalclicksupgrade = 0;
var automate1totalclick = 0;
var costA1 = 10;

function dollarUpdate() {
    document.getElementById('dollars').innerHTML = dollar.toFixed(3);
}

function clickMe() {
    dollar = dollar + 1;
    totalclicks = totalclicks + 1;
    document.getElementById('dollars').innerHTML = dollar.toFixed(3);
}

function automate1Totalclick() {
    if (dollar > costA1) {
        automate1totalclick = automate1totalclick + 1;
        dollar = dollar - costA1;
        costA1 = costA1 * 1000;
        document.getElementById('automate1totalclicks').innerHTML = automate1totalclick;
        document.getElementById('costA1s').innerHTML = costA1.toFixed(3);
        document.getElementById('dollars').innerHTML = dollar.toFixed(3);
    }
}

function CpsGutschreiben() {
    if (automate1totalclick > 0) {
        dollar = dollar + automate1totalclick * totalclicks / 1000;
    }
}


window.setInterval(function() {
    // funktionen 1x pro Sekunden Updaten (CPS)

    dollarUpdate();
    CpsGutschreiben();
}, 1000);
