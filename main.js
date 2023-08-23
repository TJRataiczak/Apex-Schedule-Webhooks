const webhookUrl = "https://discord.com/api/webhooks/1143361330791858206/Z8jxGJHDP8ohI8_LJCCOuwuq5NvFjOhPZzSg8vyMhBKN71NVe_qcqyBCqZ5ZYoRXZRPl"
const myData = require("./json/events.json");
const todaysDate = new Date();
let daysOfWeek = [];
let weeklyEvents = {};

function makeDateFromDay (weekday, daysOfWeek) {
    
}

// Put days of the week into an array to be checked later
for (let i = 0; i < 7; i++) {
    if (i !== 0) {
        let newDate = todaysDate.setDate(todaysDate.getDate()+1);
        daysOfWeek.push(newDate);
}
    else {
        daysOfWeek.push(todaysDate.getTime());
    }
}

// for (let i = 0; i < myData["reoccuring-events"].length; i++) {
//     switch (myData["reoccuring-events"][i]["event-day-of-week"]) {
//         case 0:

//     }
// }

// console.log(new Date(daysOfWeek[0]).setHours(18 , 30, 0, 0));