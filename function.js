function gettime()
{
    var time=new Date();
    var formatted=time.getMonth()+1+'-'+time.getDate()+'-'+time.getFullYear()+' '+time.getHours().toString().padStart(2,'0')+':'+time.getMinutes().toString().padStart(2,'0')+':'+time.getSeconds().toString().padStart(2,'0');

    document.getElementById("time").innerHTML=formatted;
}
setInterval(() => {
    gettime()
}, 1000);