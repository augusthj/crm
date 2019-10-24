document.addEventListener("DOMContentLoaded", function (event) {

   let eventHere = document.getElementById("event-here");
   let newEvent;

   /* set addListener to all buttons*/
   for (let i = 1; i <= 31; i++) {
      let tempElement = document.getElementById("day" + i);
      tempElement.addEventListener("click", showEvent);
   }

   function showEvent() {
      newEvent = document.createElement("p");
      //console.log(newEvent);
      let clicked = this.innerHTML; // innerHTML of the clicked button

      for (const iterator of events) {
         if (iterator.date.getDate() == clicked) {
            console.log("Yes: " + clicked);
            newEvent.innerHTML = iterator.getEvent();
            newEvent.classList.add("event");
            eventHere.appendChild(newEvent);
         }
      }
   }

   loadEventsOnCalendar();

   // Shows on the calender the days with events
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

/*
   Copy and paste this on the mockapi proyect
   in case they are deleted so we have events to
   show on October. Paste on IDs 10-15.

{
    "id": "10",
    "userid": 58456,
    "custmerid": 57759,
    "date": "2019-10-02T03:52:27.710Z",
    "description": "11:30 - Lunch Dynamic and Patricia",
    "content": "content 10"
  },
  {
    "id": "11",
    "userid": 42828,
    "custmerid": 13698,
    "date": "2019-10-21T23:31:44.991Z",
    "description": "09:00 - Regional meeting",
    "content": "content 11"
  },
  {
    "id": "12",
    "userid": 22357,
    "custmerid": 78831,
    "date": "2019-10-08T14:16:22.608Z",
    "description": "11:00 - Lunch Dynamic",
    "content": "content 12"
  },
  {
    "id": "13",
    "userid": 22255,
    "custmerid": 12082,
    "date": "2019-10-14T19:52:06.360Z",
    "description": "09:00 - International AB meeting",
    "content": "content 13"
  },
  {
    "id": "14",
    "userid": 78370,
    "custmerid": 61109,
    "date": "2019-10-11T19:08:45.732Z",
    "description": "13:00 - Boss's Birthday",
    "content": "content 14"
  },
  {
    "id": "15",
    "userid": 80300,
    "custmerid": 65144,
    "date": "2019-10-23T10:12:23.833Z",
    "description": "09:00 - Global meeting",
    "content": "content 15"
  },


 */