$(document).ready(function() {
  $.ajax({
      method: "GET",
      url: "http://5da7897d23fa740014697829.mockapi.io/customer"
    })
    .done(function(data) {
      $.each(data, function(key, value) {
        $("#companyTable > tbody")
          .append(
            "<tr><td>" + value.id + "</td>" +
            "<td><a href='' id=" + value.id + ">" + value.companyName +
            "</a></td><td>" + value.email + "</td><td>" +
            value.phoneNumber + "</td><td>" + value.firstName +
            " " + value.lastName + "</td></tr>"
          );
      });
    });
});