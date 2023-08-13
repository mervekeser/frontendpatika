let myName = prompt("Isminizi girin:");
document.getElementById("myName").innerHTML = myName;

function showTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    let day = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();

    document.getElementById("hour").innerText= hour;
    document.getElementById("minute").innerText= minute;
    document.getElementById("second").innerText= second;
    document.getElementById("date").innerText= day+" / " + month + " / " + year + " tarihinde";
}
    
setInterval(function(){showTime();},1000);
 

