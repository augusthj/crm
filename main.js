$(document).ready(function() {
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
            "<button id='" + value.id + "'>More</button>" + "</div>" + "</div>"
          );
      });
    });
  let modal = $("#newCompany");
  $("#addCompany").click(function() {
    modal.attr("style", "display:block");
  });
  $(".close").click(function() {
    modal.attr("style", "display:none");
  });
  $("#submit").click(function() {
    $.ajax({
        method: "POST",
        url: "https://5da7897d23fa740014697829.mockapi.io/customer",
        data: {
          companyName: $("#company_name").val(),
          email: $("#email").val(),
          phoneNumber: $("#phone").val(),
          firstName: $("#contact_first_name").val(),
          lastName: $("#contact_last_name").val()
        }
      })
      .done(function(msg) {
        console.log(msg);
      });
      $(".newCompany-content :input").val("");
      modal.attr("style", "display:none");
  });
  $("#cancel").click(function() {
    modal.attr("style", "display:none");
    $(".newCompany-content :input").val("");
  });
  window.onclick = function(event) {
    if (event.target == document.getElementById("newCompany")) {
      modal.attr("style", "display:none");
    }
  }
});
