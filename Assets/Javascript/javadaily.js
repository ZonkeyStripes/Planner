
$(".saveBtn").on("click", function () {
        let hour = $(this).parent().attr("id")
        let text = $(this).siblings(".form-control").val();
        let dataHour = $(this).data('hour')
        console.log(dataHour)
        localStorage.setItem('hour' + dataHour, text);
        // localStorage.setItem(hour, text)
})

function makeList() {
        let counter = 12;
        let someM = "PM"
        for(let i = 0; i < 24; i++) {
                // counter + i = 12 % 12;
                let actualTime = (counter + i) % 12;
                if(actualTime <= 0) {
                        actualTime = 12;
                       if (someM == "AM"){
                               someM = "PM";
                       } else if (someM == "PM") {
                               someM = "AM"
                       }
                }
                let div = $("<div>").addClass("row")
                let div1 = $("<div>").addClass("hour col-sm-1").text(actualTime + someM)
                let textArea = $("<textarea>").attr("id", "hour" + i).addClass("form-control col-sm-10").attr("rows", 3)
                let save = $("<button>").data("hour", i).addClass("saveBtn col-sm-1")
                let icon = $("<i>").addClass("fas fa-save fa-2x")
                
                save.append(icon)
                div.append(div1)
                div.append(textArea)
                div.append(save)

                $("#listorsomething").append(div)
        }
}
makeList();


for (let i = 0; i < 24; i++) {
        let dataHour = 'hour' + i; // = hour0
        let text = localStorage.getItem(dataHour); // getItem(hour0)
        if (text) { // If its not null
                // #hour0
                $("#" + dataHour).val(text);
        }
}

function date_time() {
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if (h < 10) {
                h = "0" + h;
        }
        m = date.getMinutes();
        if (m < 10) {
                m = "0" + m;
        }
        s = date.getSeconds();
        if (s < 10) {
                s = "0" + s;
        }
        result = '' + days[day] + ' ' + months[month] + ' ' + d + ' ' + year + ' ' + h + ':' + m + ':' + s;
        document.getElementById("displayTime").innerHTML = result;
        setTimeout(function () {
                date_time()
        }, 500);
        return true;
}
date_time();