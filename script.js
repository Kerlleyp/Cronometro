var sec = 0
var min = 0
var hr = 0 
var interval

 function twoDigits(Digit) {
     if( Digit < 10){
     return(`0` + Digit)
     }else{
         return(Digit)
     }
 }
 function start(){
     watch()
     interval = setInterval(watch,10)
 }
 function pausa() {
     clearInterval(interval)
 }
 function stop() {
     clearInterval(interval)

     sec = 0
     min = 0
     hr = 0
     document.getElementById(`watch`).innerText = `00:00:00`
 }
 function watch() {
     sec++
     if(sec == 60){
        min++
        sec = 0
     if(min == 60){
        min = 0
        hr++
        }
     }
     document.getElementById(`watch`).innerText =twoDigits(hr)+ `:` +twoDigits(min)+ `:`+twoDigits(sec)
 }