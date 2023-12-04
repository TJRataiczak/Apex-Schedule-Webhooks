const webhookUrl =
  "";
const myData = require("./json/events.json");
let todaysDate = new Date().setHours(0, 0, 0, 0);
let daysOfWeek = [];
let weeklyEvents = [];

function putEventInDictionary(event, weekday, hours, minutes) {
  weeklyEvents.push([
    `${event}`,
    `${new Date(daysOfWeek[weekday]).setHours(hours, minutes, 0, 0) / 1000}`,
  ]);
}

// Put days of the week into an array to be referenced later
for (let i = 0; i < 8; i++) {
  if (i !== 0) {
    let newDate = new Date(todaysDate);
    newDate.setDate(newDate.getDate() + i);
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
      putEventInDictionary(
        myData["reoccuring-events"][i]["event-name"],
        6,
        Number(currentTime[0]),
        Number(currentTime[1])
      );
      break;
    case 1:
      putEventInDictionary(
        myData["reoccuring-events"][i]["event-name"],
        0,
        Number(currentTime[0]),
        Number(currentTime[1])
      );
      break;
    case 2:
      putEventInDictionary(
        myData["reoccuring-events"][i]["event-name"],
        1,
        Number(currentTime[0]),
        Number(currentTime[1])
      );
      break;
    case 3:
      putEventInDictionary(
        myData["reoccuring-events"][i]["event-name"],
        2,
        Number(currentTime[0]),
        Number(currentTime[1])
      );
      break;
    case 4:
      putEventInDictionary(
        myData["reoccuring-events"][i]["event-name"],
        3,
        Number(currentTime[0]),
        Number(currentTime[1])
      );
      break;
    case 5:
      putEventInDictionary(
        myData["reoccuring-events"][i]["event-name"],
        4,
        Number(currentTime[0]),
        Number(currentTime[1])
      );
      break;
    case 6:
      putEventInDictionary(
        myData["reoccuring-events"][i]["event-name"],
        5,
        Number(currentTime[0]),
        Number(currentTime[1])
      );
      break;
  }
}

for (let i = 0; i < myData["special-events"].length; i++) {
  currentTime = myData["special-events"][i]["event-date"].split(" ");
  currentTime = new Date(
    currentTime[0],
    currentTime[1],
    currentTime[2],
    currentTime[3],
    currentTime[4]
  );
  if (
    currentTime.getTime() >= daysOfWeek[0] &&
    currentTime.getTime() <= daysOfWeek[7]
  ) {
    weeklyEvents.push([
      `${myData["special-events"][i]["event-name"]}`,
      `${currentTime.getTime() / 1000}`,
    ]);
  } else {
    continue;
  }
}

let weeklyEventsArrSorted = weeklyEvents.sort((a, b) => a[1] - b[1]);

const { EmbedBuilder, WebhookClient } = require("discord.js");

const webhookClient = new WebhookClient({ url: webhookUrl });

const embed = new EmbedBuilder()
  .setTitle("Apex Gaming Events")
  .setColor(0x00ffff);

for (let i = 0; i < weeklyEventsArrSorted.length; i++) {
  embed.addFields({
    name: weeklyEventsArrSorted[i][0],
    value: `<t:${weeklyEvents[i][1]}:f>`,
    inline: true,
  });
}

webhookClient.send({
  username: "Apex Gaming",
  embeds: [embed],
});
