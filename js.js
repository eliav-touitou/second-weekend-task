const data = [
  {
    topic: "JavaScript",

    startedAt: new Date("2020-01-01:09:30"),

    finishedAt: new Date("2020-01-01:12:30"),

    tasksGiven: 20,

    tasksFinished: 18,
  },
  {
    topic: "Css",

    startedAt: new Date("2020-01-02:09:30"),

    finishedAt: new Date("2020-01-02:16:00"),

    tasksGiven: 50,

    tasksFinished: 32,
  },
  {
    topic: "Html",

    startedAt: new Date("2020-01-02:09:30"),

    finishedAt: new Date("2020-01-02:12:30"),

    tasksGiven: 15,

    tasksFinished: 15,
  },
  {
    topic: "VSCode",

    startedAt: new Date("2020-01-03:09:30"),

    finishedAt: new Date("2020-01-03:12:00"),

    tasksGiven: 40,

    tasksFinished: 25,
  },
  {
    topic: "Github",

    startedAt: new Date("2020-01-04:09:30"),

    finishedAt: new Date("2020-01-04:11:00"),

    tasksGiven: 25,

    tasksFinished: 9,
  },
  {
    topic: "Arrays",

    startedAt: new Date("2020-01-05:09:30"),

    finishedAt: new Date("2020-01-05:11:30"),

    tasksGiven: 10,

    tasksFinished: 7,
  },
  {
    topic: "Functions",

    startedAt: new Date("2020-01-06:09:30"),

    finishedAt: new Date("2020-01-06:12:00"),

    tasksGiven: 10,

    tasksFinished: 8,
  },
  {
    topic: "Objects",

    startedAt: new Date("2020-01-07:09:30"),

    finishedAt: new Date("2020-01-07:11:30"),

    tasksGiven: 20,

    tasksFinished: 9,
  },
  {
    topic: "Dom",

    startedAt: new Date("2020-01-08:09:30"),

    finishedAt: new Date("2020-01-08:16:00"),

    tasksGiven: 10,

    tasksFinished: 7,
  },
  {
    topic: "Web Structure",

    startedAt: new Date("2020-01-09:09:30"),

    finishedAt: new Date("2020-01-09:15:00"),

    tasksGiven: 40,

    tasksFinished: 25,
  },
];
/*a loop to find the total time spent learning,
//  the percentage of done tasks out of the given ones, and to convert date to time*/
for (const obj of data) {
  obj.totalTime = Math.abs(obj.finishedAt - obj.startedAt) / 36e5;
  obj.percentDone = (obj.tasksFinished / obj.tasksGiven) * 100;
  obj.startedAt = obj.startedAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  obj.finishedAt = obj.finishedAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

//creating the table tag
const table = document.createElement("table");
document.body.append(table);

const heads = [
  "Topic:",
  "Started At:",
  "Finished At:",
  "Total time spent:",
  "Tasks given:",
  "Tasks finished:",
  "Task finished % :",
];

//loop to create the table head using "heads" array
for (let title of heads) {
  let tableTitle = document.createElement("th");
  tableTitle.innerText = title;
  table.append(tableTitle);
}

//loop that creates the rows and insert the data from the "data" array inside it
for (const obj of data) {
  const tableRow = document.createElement("tr");
  table.append(tableRow);

  let topic = document.createElement("th");
  topic.innerText = obj.topic;
  tableRow.append(topic);

  let startedAt = document.createElement("td");
  startedAt.innerText = obj.startedAt;
  tableRow.append(startedAt);

  let finishedAt = document.createElement("td");
  finishedAt.innerText = obj.finishedAt;
  tableRow.append(finishedAt);

  let totalTime = document.createElement("td");
  totalTime.innerText = obj.totalTime;
  //assigning classes to each time zone to color each one
  totalTime.className =
    obj.totalTime < 2.5 ? "quick" : obj.totalTime <= 3.5 ? "avg" : "slow";
  tableRow.append(totalTime);

  let tasksGiven = document.createElement("td");
  tasksGiven.innerText = obj.tasksGiven;
  tableRow.append(tasksGiven);

  let tasksFinished = document.createElement("td");
  tasksFinished.innerText = obj.tasksFinished;
  tableRow.append(tasksFinished);

  let percentDone = document.createElement("td");
  percentDone.innerText = obj.percentDone + "%";
  //assigning classes to each percent zone to color each one
  percentDone.className =
    obj.percentDone < 65 ? "bad" : obj.percentDone < 80 ? "mid" : "good";
  console.log(obj.percentDone);
  tableRow.append(percentDone);
}
