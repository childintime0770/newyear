// axal wlamde darchenili dge, saati, wuti, wami

function countDiff(date){
    console.clear(); // yoveli wina davalebis washla
    const presentDay = new Date();  //axlandeli dro 

    let timeLeft = (date - presentDay)/1000; // darchenili dro wamebshi

    let seconds = timeLeft;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let sec = Math.floor(seconds % 60);
    let min = Math.floor(minutes % 60);
    let hour = Math.floor(hours % 24);
    

    if(sec < 10){              // 0-is damateba tu 10ze naklebia
        sec = "0" + sec;
    } 

    if(min < 10){
        min = "0" + min;  
    } 

    if(hour < 10){
        hour = "0" + hour;
    }

    if(days < 10){
        days = "0" + days;
    } 

    if(timeLeft == 0){
        console.log("HAPPY NEW YEAR");
    } else {
        console.log(days, hour, min, sec);    
    }
    

    


    
}

const newYear = new Date("jan 01, 2021"); // axali weli

setInterval(countDiff, 1000, newYear);


