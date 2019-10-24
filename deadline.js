$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://5da7897d23fa740014697829.mockapi.io/events"
      })
      .done(function(data) {
        $.each(data, function(key, value) {
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
        var number = 0;
        $.each(data, function(key, value) {
            if(number < 2){
            $(".modal-body")             
              .append(
                "<p>&#9679;" + value.date +  "&#10097;" +  value.custmerid + "</p>" +
                "<hr></hr>"
              );
            }else if(number < 3){
                $(".modal-body")             
                  .append(
                    "<p>&#9679;" + value.date +  "&#10097;" +  value.custmerid + "</p>"
                  );
                }else if(number > 3){
                return false;
                 }
          number += 1;
          });
      });
  });