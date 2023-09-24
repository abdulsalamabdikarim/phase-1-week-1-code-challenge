
//==> The function speedDetector has one parameter (which is speed).
function speedDetector(speed){
//==> For speeds below 70, the function prints out the message "Ok".
    if(speed < 70){
        console.log(`Ok`);
    }/*==> For speeds above the speed limit(70), then for every interval of five,
           the value is pushed into an array called intervalOfFive*/
    else{ 
        let intervalsOfFive = [];
        for(i = 75; i<=speed; i+=5){
            intervalsOfFive.push(i);
        } /*==>The length of this array is what is then used to determine
            the number of demerit points*/
        if(intervalsOfFive.length <= 12){
            console.log(`Points; ${[intervalsOfFive.length]}`);
        }
        //==> When demerit points exceed 12, the function prints out "License suspended".
        else{
        console.log(`License suspended.`);
        }
    }
}
//==== Example function call ====
speedDetector(69);
speedDetector(75);
speedDetector(80);
speedDetector(109);
speedDetector(134);
speedDetector(136);