function cookieOk(){
    var cookie = document.getElementById("cookie");
    cookie.remove();
}

function message(){
    alert("Loading weather report...");

}

function temp(element){
    console.log(element.value);

    if(element.value == "far"){
        let todaymax = document.getElementById("todaymax");
        todaymax.innerText= (parseInt(todaymax.innerText) * 9/5) + 32;
        let tomorrowmax = document.getElementById("tomorrowmax");
        tomorrowmax.innerText= (parseInt(tomorrowmax.innerText) * 9/5) + 32;
        let fridaymax = document.getElementById("fridaymax");
        fridaymax.innerText= (parseInt(fridaymax.innerText) * 9/5) + 32;
        let saturdaymax = document.getElementById("saturdaymax");
        saturdaymax.innerText= (parseInt(saturdaymax.innerText) * 9/5) + 32;
  
        let todaymin = document.getElementById("todaymin");
        todaymin.innerText= (parseInt(todaymin.innerText) * 9/5) + 32;
        let tomorrowmin = document.getElementById("tomorrowmin");
        tomorrowmin.innerText= (parseInt(tomorrowmin.innerText) * 9/5) + 32;
        let fridaymin = document.getElementById("fridaymin");
        fridaymin.innerText= (parseInt(fridaymin.innerText) * 9/5) + 32;
        let saturdaymin = document.getElementById("saturdaymin");
        saturdaymin.innerText= (parseInt(saturdaymin.innerText) * 9/5) + 32;
    }else{
        let todaymax = document.getElementById("todaymax");
        todaymax.innerText= ((parseInt(todaymax.innerText) -32) * 5/9).toFixed();
        let tomorrowmax = document.getElementById("tomorrowmax");
        tomorrowmax.innerText= ((parseInt(tomorrowmax.innerText) -32) * 5/9).toFixed();
        let fridaymax = document.getElementById("fridaymax");
        fridaymax.innerText= ((parseInt(fridaymax.innerText) -32) * 5/9).toFixed();
        let saturdaymax = document.getElementById("saturdaymax");
        saturdaymax.innerText= ((parseInt(saturdaymax.innerText) -32) * 5/9).toFixed();
  
        let todaymin = document.getElementById("todaymin");
        todaymin.innerText= ((parseInt(todaymin.innerText) -32) *5/9).toFixed();
        let tomorrowmin = document.getElementById("tomorrowmin");
        tomorrowmin.innerText= ((parseInt(tomorrowmin.innerText) -32) *5/9).toFixed();
        let fridaymin = document.getElementById("fridaymin");
        fridaymin.innerText= ((parseInt(fridaymin.innerText) -32) *5/9).toFixed();
        let saturdaymin = document.getElementById("saturdaymin");
        saturdaymin.innerText= ((parseInt(saturdaymin.innerText) -32) *5/9).toFixed();
    }

}