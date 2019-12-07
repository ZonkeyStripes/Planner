
$(".saveBtn").on("click", function () {
        let hour = $(this).parent().attr("id")
        let text = $(this).siblings(".form-control").val();
        let dataHour = $(this).data('hour')
        console.log(dataHour)
        localStorage.setItem('hour' + dataHour, text);
})

function makeList() {
        let counter = 12;
        let meridiem = "PM"
        for (let i = 0; i < 24; i++) {
                // counter + i = 12 % 12;
                let actualTime = (counter + i) % 12;
                if (actualTime <= 0) {
                        actualTime = 12;
                        if (meridiem == "AM") {
                                meridiem = "PM";
                        } else if (meridiem == "PM") {
                                meridiem = "AM"
                        }
                }
                
                let div = $("<div>").addClass("row")
                let div1 = $("<div>").addClass("hour col-sm-1").text(actualTime + meridiem)
                let textArea = $("<textarea>").attr("id", "hour" + i).addClass("form-control col-sm-10").attr("rows", 3)
                let save = $("<button>").data("hour", i).addClass("saveBtn col-sm-1")
                let icon = $("<i>").addClass("fas fa-save fa-2x")
                let date = new Date();
                let time = date.getHours();
                console.log(time)



                if (i < time) {
                        div1.addClass("past");
                } else if (i == time) {
                        div1.addClass("present");
                } else {
                        div1.addClass("future");
                }


                save.append(icon)
                div.append(div1)
                div.append(textArea)
                div.append(save)

                $("#listorsomething").append(div)
        }
}
makeList();


// stores the data(almost) and updates the id tag for the loop of hours
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
        }, 1000);
        return true;
}

date_time();

// let date = new Date();
// let time = date.getHours();      
// console.log(time)
// function classChanger(relativeTime) {

//         if (relativeTime < time) {
//             $("div").addClass("past");
//         } else if (relativeTime == time) {
//             $("div").addClass("present");
//         } else {
//             $("div").addClass("future");
//         }
// }
// classChanger(); // 5 for example
// console.log(classChanger(relativeTime))





// function classChanger() {

//         for (let i = 0; i > 24; i++) {
//                 if(i > date_time.getHours) {
//                         $("<div>").addClass("future")
//                 }if(i < date_time.getHours) {
//                         $("<div>").addClass("past")
//                 }if(i = date_time.getHours) {
//                         $("<div>").addClass("present")
//                 }
//         }
// }

// classChanger();
// something for the time
//When t > current hour : future background
//  When t < current hour : pastbackground
// when t = current hour : present background
// for (let i = 0; i > 24; i++) {
//         let t = data.getHours();
//         if(i > t) {
//                 $("<div>").addClass(".future")
//         } else if (i < t) {
//                 $("<div>").addClass(".past")
//         } else (i = t) {
//                 $("<div>").addClass(".present")
//         }
// }
