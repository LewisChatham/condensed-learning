// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment('23011997', 'DD MM YYYY').format(`MMM Do YYYY`);
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment(`01012022`, `DD MM YYYY`).format(`dddd`);
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var now = moment().dayOfYear();
$("#3a").text(now);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format(`h:mm:ss a`);
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().unix();
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment('1318781876', 'X').format(`DD MMM YYYY h:mm:ss a`);
$("#6a").text(unixFormat);

