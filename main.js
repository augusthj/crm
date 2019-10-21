$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "http://5da7897d23fa740014697829.mockapi.io/customer"
  })
  .done(function(data){
    console.log(data);
  })
});
