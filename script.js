const ser = document.getElementById("ser") ;
const serbtn = document.getElementById("serbtn") ;


const city = document.getElementById("city") ;
const temp = document.getElementById("temp") ;
const win = document.getElementById("win") ;
const des = document.getElementById("des") ;


serbtn.addEventListener("click",()=> {

    weapi()

})

 async function weapi(){

        const res = await fetch("https://goweather.herokuapp.com/weather/" + ser.value);
       
        const data = await res.json();


       
        city.textContent = "weather in " + ser.value
       
        temp.textContent = data.temperature
       
        des.textContent = data.description
       
        win.textContent ="wind : " + data.wind
       
        ser.value = ""

    }

