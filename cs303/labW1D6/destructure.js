"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary, getDateAgo }; //add all of your function names here that you need for the node mocha tests

/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
function topSalary(salaries) {
    let maxPaid =0;
    let maxPerson=null;
    for(const [name , salary] of Object.entries(salaries)){
     if(maxPaid < salary){
         maxPaid = salary;
         maxPerson = name;
     }
    }
    return maxPerson;

  }

  /* Write a function getWeekDay(date) to show the weekday in 
short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’. */
function getWeekday(date){
  let days=["SU","MO","TU","WE","TH","FR","SA"]
  return days[date.getDay()]
  }

  /* European countries have days of week starting with Monday (number 1), 
  then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns 
  the “European” day of week for date. */
  function getLocalDay(date){
      if(date.getDay()===0)
         return 7;
      return date.getDay();
  }

  /*
  Create a function getDateAgo(date, days) to return the day of month days ago from the date.
For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
Should work reliably for days=365 or more:
*/

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
    
}

/*
  Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
Parameters:
    year – four-digits year, for instance 2012.
    month – month, from 0 to 11.
    */
    function getLastDayOfMonth(year, month) {
      let date = new Date(year, month + 1, 0);
      return date.getDate();
    }

    /* 
  Write a function formatDate(date) that should format date as follows:
    If since date passed less than 1 second, then "right now".
    Otherwise, if since date passed less than 1 minute, then "n sec. ago".
    Otherwise, if less than an hour, then "m min. ago".
    Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
*/
function formatDate(date) {
  let diff = new Date() - date; // the difference in milliseconds
  if (diff < 1000) { // less than 1 second
    return 'right now';
  }
  let sec = Math.floor(diff / 1000); // convert diff to seconds
  if (sec < 60) {
    return sec + ' sec. ago';
  }

  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + ' min. ago';
  }
  // format the date
  // add leading zeroes to single-digit day/month/hours/minutes
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // take last 2 digits of every component

  // join the components into date
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
