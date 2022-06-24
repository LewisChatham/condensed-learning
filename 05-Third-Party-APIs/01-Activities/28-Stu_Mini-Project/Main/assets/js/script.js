// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

// handle displaying the time
function displayTime() {
  var currentTime = moment().format(`MMMM DD, YYYY [at] h:mm:ss a`)
  timeDisplayEl.text(currentTime)
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate, days, earnings) {
  var projectRowEl = $(`<tr>`) // <tr> </tr>

  var projectNameEl = $(`<td>`).text(name) // <td> </td>
  var projectTypeEl = $(`<td>`).text(type)
  var projectRateEl = $(`<td>`).text(hourlyRate)
  var projectDateEl = $(`<td>`).text(dueDate)
  var projectDaysUntillDue = $(`<td>`).text(days)
  var projectEarnings = $(`<td>`).text(earnings)


  var deleteBtn = $(`<td>`).text(`X`).addClass(`delete-project-btn`)


  projectRowEl.append(projectNameEl, projectTypeEl, projectRateEl, projectDateEl, projectDaysUntillDue, projectEarnings, deleteBtn)
  
  projectDisplayEl.append(projectRowEl)

<<<<<<< HEAD
=======
  var totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);

  // You can also chain methods onto new lines to keep code clean
  var totalTdEl = $('<td>').addClass('p-2').text('$' + totalEarnings);

  var deleteProjectBtn = $('<td>').addClass('p-2 delete-project-btn text-center').text('X');

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  projectRowEl.append(
    projectNameTdEl,
    projectTypeTdEl,
    rateTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    totalTdEl,
    deleteProjectBtn
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal('hide');
}

function calculateTotalEarnings(rate, days) {
  var dailyTotal = rate * 8;
  var total = dailyTotal * days;
  return total;
>>>>>>> 9abb7718bed532cd03848302d598206ee522858d
}

function handleDeleteProject(event) {
  event.target.parentElement.remove()
}

// handle project form submission
function handleProjectFormSubmit(event) {
 event.preventDefault()

 var name = projectNameInputEl.val()
 var type = projectTypeInputEl.val()
 var hourlyRate = hourlyRateInputEl.val()
 var dueDate = dueDateInputEl.val()
 var daysUntilDue = moment(dueDate, `MM DD YYYY`).diff(moment(), "days")+1
 var earnings = (daysUntilDue * 8) * hourlyRate

 printProjectData(name, type, hourlyRate, dueDate, daysUntilDue, earnings)

 projectModalEl.modal(`hide`)
}

projectFormEl.on('submit', handleProjectFormSubmit);
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);



