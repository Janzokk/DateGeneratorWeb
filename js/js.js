var days = [31, 28, 31, 30, 31, 30 ,31, 31, 30, 31, 30, 31]
var mesos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = 2022;

var dates = new Array(5);
var positions = new Array(5);
var currentLang;

function getRandomDates(){
    document.getElementById("result").innerHTML = "";
    for(i = 0; i <= 4; i++){
        pos = Math.round(Math.random()*11);
        positions[i] = pos;
    }

    positions.sort(function(a,b){return(a-b)});
    var e = document.getElementById("lang");
    currentLang = e.value;
    createDate(positions);

    for(i = 0; i < dates.length; i++){
        document.getElementById("result").innerHTML += dates[i]+"<br>";
    }
    
}

function createDate(months){
    var previousDays;
    for(i=0; i<=4; i++){
        if(currentLang == "es"){
            var randomM = mesos[months[i]];
            
        }else if(currentLang == "en"){
            var randomM = month[months[i]];
        }
        var daysN = days[months[i]];
        var randomD = Math.round(Math.random()*(daysN-1)+1);
        
        if(i != 0 && months[i] == months[i-1] && previousDays > randomD){
            dates[i] = dates[i-1];
            dates[i-1] = (parseInt(randomD)+" de "+ randomM + " del "+ year);
        }else{
            dates[i] = (parseInt(randomD)+" de "+ randomM + " del "+ year);
        }
        previousDays = randomD;
        
    }
    
}

function changeLang(newLang){
    currentLang = newLang;
}
