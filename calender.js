document.addEventListener("DOMContentLoaded", function (event) {

   let eventHere = document.getElementById("event-here");
   let dayMonth = document.getElementById("day-month");
   let newEvent;

   /* set addListener to all buttons*/
   for (let i = 1; i <= 31; i++) {
      let tempElement = document.getElementById("day" + i);
      tempElement.addEventListener("click", showEvent);
   }

   function showEvent() {
      let clicked = this.innerHTML; // innerHTML of the clicked button
      showDayMonth(clicked);
      // Clear div before printing
      clearBox(eventHere);
     

      $.ajax({
         method: "GET",
         url: "https://5da7897d23fa740014697829.mockapi.io/events",
      })
         .done(function (msg) {
            for (const iterator of msg) {
               // .date from API are strings. Parsing to Date for easier handling.
               let tempDate = new Date(iterator.date);
               
               // Filter for 2019 - October - day clicked
               if (tempDate.getFullYear() == "2019" && tempDate.getMonth() == "9" && tempDate.getDate() == clicked) {
                  console.log(iterator.description);
                  newEvent = document.createElement("p");
                  newEvent.innerHTML = iterator.description;
                  newEvent.classList.add("event");
                  eventHere.appendChild(newEvent);
                  
               }
            }
         });

   }

   function showDayMonth(day) {
      dayMonth.innerHTML = "October " + day;
   }

   function clearBox(elementID) {
      while (elementID.firstChild) {
         elementID.removeChild(elementID.firstChild);
      }
   }

   loadEventsOnCalendar();

   // Shows/color on the calendar the days with events
   function loadEventsOnCalendar() {
      $.ajax({
         method: "GET",
         url: "https://5da7897d23fa740014697829.mockapi.io/events",
      })
         .done(function (msg) {
            for (const iterator of msg) {
               // .date from API are strings. Parsing to Date for easier handling.
               let tempDate = new Date(iterator.date);

               // Filter. Look after events for October (months index 0-11) 2019
               if (tempDate.getFullYear() == "2019" && tempDate.getMonth() == "9") {

                  // Add class "event-day" to days on calendar.
                  let fakeElement = eval("day" + tempDate.getDate());
                  console.log(iterator.date);
                  console.log(tempDate);
                  fakeElement.classList.add("event-day");
               }
            }
         });
   }


})











/*
$.ajax({
   method: "POST",
   url: "https://5da7897d23fa740014697829.mockapi.io/events",
   data: { date: "2020-04-26", description: "Do something else" }
 })
   .done(function( msg ) {
      console.log(msg)
     //alert( "Data Saved: " + msg );
   });


getMonthMockapiEvents();

function getMonthMockapiEvents() {

   let allEvents;

   $.ajax({
      method: "GET",
      url: "https://5da7897d23fa740014697829.mockapi.io/events",
   })
      .done(function (msg) {
         allEvents = msg;
         console.log(allEvents);
      });



}
*/

