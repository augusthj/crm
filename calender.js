document.addEventListener("DOMContentLoaded", function(event) {
   let day08 = document.getElementById("day08");
   let eventHere = document.getElementById("event-here");
   day08.addEventListener("click", showEvent);
   let texto = "Do the laundry";
   let newEvent;

   function showEvent() {
      console.log("Boton oprimido");
      newEvent = document.createElement("p");
      console.log(newEvent);
      newEvent.innerHTML = texto;
      eventHere.appendChild(newEvent);
   }


})