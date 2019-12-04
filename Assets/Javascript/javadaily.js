window.onload = function () {
if (localStorage.getItem("planner") !== null) {
    for(let i = 0; i <= 8; i++) {
        let hour = i + 12;
        console.log(hour)
        $("#hour" + hour).val(JSON.parse(localStorage.planner)[i])
        console.log()
    }
}



function date_time ()
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById("displayTime").innerHTML = result;
        setTimeout(function () {
            date_time()
        }, 500);
        return true;
}
date_time();

}