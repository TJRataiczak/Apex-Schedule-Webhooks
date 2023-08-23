const webhookUrl =
  "https://discord.com/api/webhooks/1143361330791858206/Z8jxGJHDP8ohI8_LJCCOuwuq5NvFjOhPZzSg8vyMhBKN71NVe_qcqyBCqZ5ZYoRXZRPl";
const myData = require("./json/events.json");
let todaysDate = new Date().setHours(0,0,0,0);
let daysOfWeek = [];
let weeklyEvents = {};

function putEventInDictionary (event, weekday, hours, minutes) {
    weeklyEvents[event] = {eventName: `${event}`,
                        eventDate: `${new Date(daysOfWeek[weekday]).setHours(hours, minutes, 0, 0)}`};
}

// Put days of the week into an array to be referenced later
for (let i = 0; i < 7; i++) {
  if (i !== 0) {
    let newDate = new Date(todaysDate);
    newDate.setDate(newDate.getDate() + i)
    daysOfWeek.push(newDate.getTime());
  } else {
    daysOfWeek.push(todaysDate);
  }
}

//Puts all reoccuring events from JSON into a dictionary
for (let i = 0; i < myData["reoccuring-events"].length; i++) {
  let currentTime = myData["reoccuring-events"][i]["event-time"].split(" ");

  switch (myData["reoccuring-events"][i]["event-day-of-week"]) {
    case 0:
      putEventInDictionary(myData["reoccuring-events"][i]["event-name"], 6, Number(currentTime[0]), Number(currentTime[1]));
      break;
    case 1:
        putEventInDictionary(myData["reoccuring-events"][i]["event-name"], 0, Number(currentTime[0]), Number(currentTime[1]));
      break;
    case 2:
        putEventInDictionary(myData["reoccuring-events"][i]["event-name"], 1, Number(currentTime[0]), Number(currentTime[1]));
      break;
    case 3:
        putEventInDictionary(myData["reoccuring-events"][i]["event-name"], 2, Number(currentTime[0]), Number(currentTime[1]));
      break;
    case 4:
        putEventInDictionary(myData["reoccuring-events"][i]["event-name"], 3, Number(currentTime[0]), Number(currentTime[1]));
      break;
    case 5:
        putEventInDictionary(myData["reoccuring-events"][i]["event-name"], 4, Number(currentTime[0]), Number(currentTime[1]));
      break;
    case 6:
        putEventInDictionary(myData["reoccuring-events"][i]["event-name"], 5, Number(currentTime[0]), Number(currentTime[1]));
      break;
  }
}


console.log(weeklyEvents);
console.log(daysOfWeek);