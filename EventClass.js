class CalEvent {
   constructor(event, date) {
      this.event = event;
      this.date = new Date("2019-10-" + date);
   }

   getEvent() {
      return this.event;
   }
}

/* 
   Load here events that will appear on the calender.
   'date' is the day of the month.
*/
var preEvents = [
   {
      event:   "08:00 - Make the proyect",
      date:    "01"
   },
   {
      event:   "13:30 - Call Isabella",
      date:    "23"
   },
   {
      event:   "16:00 - Reprogram the program",
      date:    "15"
   },
];

/*
   'events' is the array of all events
   to add a new event use:
   events.push(new Event("This is a new event", "8"));
   The second parameter ("8") is the day of the month 
*/
let events = [];

for (const iterator of preEvents) {
   events.push(new CalEvent(iterator.event, iterator.date))
}

// console.log(events);
