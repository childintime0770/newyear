// axal wlamde darchenili dge, saati, wuti, wami

function countDiff(date){
    const presentDay = new Date();  //axlandeli dro 

    let timeLeft = (date - presentDay)/1000; // darchenili dro wamebshi

    let seconds = Math.floor(timeLeft) % 60;
    let minutes = Math.floor(timeLeft / 60) % 60;
    let hours = Math.floor(timeLeft / 60 / 60) % 24;
    let days = Math.floor(timeLeft / 24 / 60 /60);

    if(seconds < 10){              // 0-is damateba tu 10ze naklebia
        seconds = "0" + seconds;
    } 

    if(minutes < 10){
        minutes = "0" + minutes;  
    } 

    if(hours < 10){
        hours = "0" + hours;
    }

    if(days < 10){
        days = "0" + days;
    } 

    if(timeLeft < 0){
        document.getElementById("time").textContent = "HAPPY NEW YEAR";
    } else {
        document.getElementById("time")
            .textContent = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
    }
}


const newYear = new Date("jan 1, 2021"); // axali weli


setInterval(countDiff, 1000, newYear);
