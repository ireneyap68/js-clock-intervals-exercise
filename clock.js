let seconds = 0;
let minutes = 0;
let hours = 0;



function secondRotation(seconds) {
      //code
    //360/60=6 degree per second 
    let degRotation = 6*seconds;
      return degRotation
    }
    
    function minuteRotation(minutes, seconds){
        
        //let minuteRotation = (minutes * 360/60) + (seconds* 360/60)/60;
       // return minuteRotation;

        let totalSecond = 60*minutes+seconds;

        let degRotation = .1*totalSecond;
        return degRotation;
    }

    function hourRotation(hours, minutes){
        //let hourRotation = hour*360/12 + ((minutes * 360/60)/12) ;
       // return hourRotation;

        let totalMinutes = 60*hours+minutes;
        let degRotation = .5*totalMinutes;
        return degRotation;
    }

    function tick(){

        seconds++;  

        if(seconds >= 60){
            minutes ++;
            seconds = 0;
        }

        if(minutes >= 60){
            hours ++;
            minutes = 0;
        }

        if(hours >= 12){
            hours = 0;
        }

        console.log('${hours}:${minutes}:${seconds}');

        secHand.style.transform = 'rotate('+secondRotation(seconds)+ 'deg)'
        minHand.style.transform = 'rotate('+minuteRotation(minutes, seconds)+ 'deg)'
        hourHand.style.transform = 'rotate('+hourRotation(hours, minutes)+ 'deg)'
        //secHand.style.transform = 'rotate($(secondRotation(seconds)deg)'
    }

    // this is the code that gets clock runs
    
    document.addEventListener('DOMContentLoaded', function(){
    
        secHand = document.getElementById('second');
        minHand = document.getElementById('minute');
        hourHand = document.getElementById('hour');

        setInterval(tick, 250);
    })