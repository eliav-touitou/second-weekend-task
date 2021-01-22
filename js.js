const data = [
  {
    topic: "JavaScript",

    startedAt: new Date("2020-01-01:09:30"),

    finishedAt: new Date("2020-01-01:12:45"),

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

for (const obj of data) {
  obj.totalTime = Math.abs(obj.finishedAt - obj.startedAt) / 36e5;
  obj.percentDone = (obj.tasksFinished / obj.tasksGiven) * 100;
  obj.startedAt = obj.startedAt.toLocaleTimeString();
  obj.finishedAt = obj.finishedAt.toLocaleTimeString();
}
const heads = [
  "Topic:",
  "Started At:",
  "Finished At:",
  "Total time spent:",
  "Tasks given:",
  "Tasks finished:",
  "Task finished % :",
];

document.write(`<table>`);

for (let title of heads) {
  document.write(`<th class = "info" >  ${title} </th>`);
}

for (let i = 0; i < data.length; i++) {
  let classNameTime;
  let classNameTask;
  {
    if (data[i].totalTime < 2.5) {
      classNameTime = "quick";
    } else if (data[i].totalTime <= 3.5) {
      classNameTime = "avg";
    } else {
      classNameTime = "slow";
    }

    if (data[i].percentDone < 65) {
      classNameTask = "bad";
    } else if (data[i].percentDone < 80) {
      classNameTask = "mid";
    } else {
      classNameTask = "good";
    }

    document.write(`<tr>
        <th class = "topic"> ${data[i].topic} </th> 
           <td> ${data[i].startedAt} </td>
            <td> ${data[i].finishedAt}</td>
            <td class = "${classNameTime}"> ${data[i].totalTime} </td>
            <td> ${data[i].tasksGiven}</td>
            <td> ${data[i].tasksFinished} </td>
            <td class = "${classNameTask}"> ${data[i].percentDone} % </td>
            </tr>`);
  }
}
document.write(`</table>`);
