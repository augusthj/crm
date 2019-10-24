document.addEventListener("DOMContentLoaded", function(event) {
   
   let eventHere = document.getElementById("event-here");
   let newEvent;

   /* set addListener to all buttons*/
   for (let i=1; i <= 31; i++) {
      let tempElement = document.getElementById("day" + i);
      tempElement.addEventListener("click", showEvent);
   }

   function showEvent() {
      newEvent = document.createElement("p");
      //console.log(newEvent);
      let clicked = this.innerHTML; // innerHTML of the clicked button

      for (const iterator of events) {
         if (iterator.date.getDate() == clicked){
            console.log("Yes: " + clicked);
            newEvent.innerHTML = iterator.getEvent();
            newEvent.classList.add("event");
            eventHere.appendChild(newEvent);
         }
      }
   }

   loadEventsOnCalendar();

   function loadEventsOnCalendar() {
      for (const iterator of events) {
         let temp = eval("day" + iterator.date.getDate());
         temp.classList.add("event-day");
      }

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