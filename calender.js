document.addEventListener("DOMContentLoaded", function(event) {
   
   let eventHere = document.getElementById("event-here");

   let someText = "16:00 - Do the laundry";
   let newEvent;

   for (let i=1; i <= 31; i++) {
      let tempElement = document.getElementById("day" + i);
      tempElement.addEventListener("click", showEvent);
      console.log(tempElement);
   }



   function showEvent() {
      console.log("Boton oprimido");
      newEvent = document.createElement("p");
      console.log(newEvent);
      newEvent.innerHTML = someText;
      newEvent.classList.add("event");
      eventHere.appendChild(newEvent);
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



$.ajax({
   method: "GET",
   url: "https://5da7897d23fa740014697829.mockapi.io/events",
 })
   .done(function( msg ) {
      console.log(msg)
     
   });
*/