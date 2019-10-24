$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://5da7897d23fa740014697829.mockapi.io/events"
      })
      .done(function(data) {
        $.each(data, function(key, value) {
            console.log(value);
          $(".events")              
            .append(
                "<tr>" +
                "<th scope='row'>" + value.id + "</th>" +
                "<td>" + value.date + "</td>" +
                "<td>" + value.custmerid + "</td>" +
                "<td>" + value.description + "</td>" +
              "</tr>"
            );
        });
      });
  });