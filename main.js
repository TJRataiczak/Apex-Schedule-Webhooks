const webhookUrl = "https://discord.com/api/webhooks/1143361330791858206/Z8jxGJHDP8ohI8_LJCCOuwuq5NvFjOhPZzSg8vyMhBKN71NVe_qcqyBCqZ5ZYoRXZRPl"
const mydata = require("./json/events.json");
const todaysDate = new Date();

// console.log(todaysDate.setDate(todaysDate.getDate()+1));

console.log(mydata.events.length);

for (let i = 0; i < mydata.events.length; i++) {
    console.log(mydata.events[i]);
}