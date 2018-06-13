var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


var tickets = [];
var ticketNumber = 0;

function takeATicket(currentTickets) {
  ticketNumber++;
  currentTickets.push(ticketNumber);
  return `You are ticket number ${ticketNumber}.`;
}

function callATicket(currentTickets) {
  if (currentTickets.length > 0) {
    return `Currently serving ticket number ${currentTickets.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var i = 0;
  var line = "The line is currently: ";
  while (i < katzDeliLine.length) {
    var place = i + 1;
    line += `${place}. ${katzDeliLine[i]}, `;
    i++;
  }
  return line.slice(0, -2);
}


var namesAndTicketNumbers = {};

function addNameAndTicketNumber(currentLineandTickets, name) {
  ticketNumber++;
  currentLineandTickets[name] = ticketNumber;
  return `Welcome, ${name}. Your ticket number is ${ticketNumber}.`;
}

function callTicketbyName(currentLineandTickets) {
  if (Object.keys(currentLineandTickets).length > 0) {
    return `Currently serving ticket number ${Object.keys(currentLineandTickets)[0]}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}