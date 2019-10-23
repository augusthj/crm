$(document).ready(function() {
  console.log("Hello");
  $.ajax({
      method: "GET",
      url: "http://5da7897d23fa740014697829.mockapi.io/customer"
    })
    .done(function(data) {
      $.each(data, function(key, value) {
        $(".cards")
          .append(
            "<div class='card'>" + "<img class='card_style' src='" + value.avatar +
            "' alt='Avatar' style='width:100%'>" +
            "<div class='container'>" + "<h4>" + "<b>" + value.companyName + "</b>" + "</h4>" +
            "<button>More</button>" + "</div>" + "</div>"
          );
      });
    });
});
