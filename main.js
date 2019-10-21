$(document).ready(function() {
  $.ajax({
  url: "http://5da7897d23fa740014697829.mockapi.io/customer",
  data: {id: 0, firstName: "", lastName: "", avatar:"", email: "", phoneNumber:"", companyName: ""},
  success: console.log("Success"),
  dataType: "JSON"
})
.done(function(data){
  $.each(data.items, function(i, item ){
    console.log("hej");
    console.log(i + " " + item);
  });
});



  /*
  let customersJSON = $.get("http://5da7897d23fa740014697829.mockapi.io/customer", function() {
      console.log("Loading JSON file.");
    })
    .done(function() {
      console.log("JSON file loaded!");
    })
    .fail(function() {
      console.log("Could not load JSON file!");
    })
    .always(function() {
      console.log("Jquery GET completed.");
    });
    console.log(data);
    */
});
