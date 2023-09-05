

//1
//  setTimeout(myName,7000)
// function myName(){
//     myDiv.innerHTML+=`<h1>omer</h1>`
// }


//2
//  setTimeout(hello,5000)
// function hello(){
//     myDiv.innerHTML+=`<h1>omer</h1>`
// }
// var bye =myDiv.innerHTML+=`<h1>bye</h1>`


//3
// var date = new Date
// function whatsTheHour(){
//     myDiv.innerHTML=`<h1>${date.getHours()}</h1>`
// }
// setTimeout(whatsTheHour,90000)


// 4
// setTimeout(iLove,10000)
// function iLove(){
//     myDiv.innerHTML+=`<h1>i love timers</h1>`
// }
// var ans= confirm("stop timer?")
// if(ans){
//     clearTimeout(iLove,10000)
// }



//4.5
// var myTimeOut =setTimeout(iLove,10000)
// function iLove(){
//     myDiv.innerHTML+=`<h1>i love timers</h1>`
// }
// myDiv.innerHTML+=`<button id="myBtn">press here</button>`
// myBtn.addEventListener("click",cancel)
// function cancel(){
// clearTimeout(myTimeOut)
// }




//5
// myDiv.innerHTML=`<h1>i love timers</h1>`
// myDiv.style.color="red"
// setTimeout(iLove,3000)
// function iLove(){
//     myDiv.style.color="blue" 
// }






//1
// setInterval(timer,4000)
// function timer(){
//     myDiv.innerHTML+=`<h1>timer</h1>`
// }



//2
// setInterval(counter,6000)
// var counter=0
// function counter(){
//     myDiv.innerHTML+=`<h1>${counter++}</h1>`
// }




// 3
// var myInterval =setInterval(iLove,1000);
// function iLove(){
//     myDiv.innerHTML+=`<h1>i love timers</h1>`
// }
// myDiv.innerHTML+=`<button id="myBtn" onclick="cancel()">press here</button>`
// // myBtn.addEventListener("click",cancel)

// function cancel(){
// clearInterval(myInterval)
// }




//4
// var myInterval= setInterval(rightNow,1000);
// function rightNow(){
//     var myDate= new Date()
//     myDiv.innerHTML=`<h1>${myDate.getHours()}</h1>`
//     myDiv.innerHTML+=`<h1>${myDate.getMinutes()}</h1>`
//     myDiv.innerHTML+=`<h1>${myDate.getSeconds()}</h1>`
// }


    //(תעשה את זה בלולאה)
    // var timeElements = ["Hours", "Minutes", "Seconds"];
    
    // for (var i = 0; i < timeElements.length; i++) {
    //     myDiv.innerHTML += `<h1>${myDate[timeElements[i]]()}</h1>`;
    // }



    //5
    // var numOfMinutesFromUser=+prompt("enter a number")
    // var myInterval= setInterval(downTimer,1000);
    // var counter= numOfMinutesFromUser*60
    // function downTimer(){
    //     myDiv.innerHTML=`<h1>${--counter}</h1>`
    //     if(counter==0){
    //         clearInterval(myInterval) 
    //         myDiv.innerHTML=`<h1>BOOM!</h1>`  
    //     }
    // }



  
    //7
    // var startCounting;
    // var counter=0
// myDiv.innerHTML=`<button id="myBtn" onclick="restart()">press here to restart</button>`
// function timeInWeb(){
//     if (!startCounting) {
//     startCounting= setInterval(timeInWeb,1000)
//     }
//     myOtherDiv.innerHTML=`<h1>you are in this web ${counter++} seconds</h1>`
// }
// function restart(){
//     counter=0
//     }
//     myDiv.innerHTML+=`<button id="myThirdBtn" onclick="cancel()">press here to stop</button>`
//     function cancel(){
//         clearInterval(startCounting)
//         }




//8

var myDiv = document.getElementById("myDiv"); 
var counter=0
var myArray = ["omer","sagi","matan","itzhak"]
var myInterval= setInterval(studentName,500);
function studentName(){
    if(counter<myArray.length){
        myDiv.innerHTML = `<h1>${myArray[counter]};</h1>`
    
    counter++
    if(counter==4){
        counter=0
    }
}
}
myOtherDiv.innerHTML=`<button id="myBtn" onclick="cancel()">press here to stop</button>`
function cancel(){
    clearInterval(myInterval)
    }
    






















//2
// setTimeout(jump,7000)
// function jump(){
//     myDiv.innerHTML+=`<img src=""></img>`
// }