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
            /*
            "<tr><td>" + value.id + "</td>" +
            "<td><a href='' id=" + value.id + ">" + value.companyName +
            "</a></td><td>" + value.email + "</td><td>" +
            value.phoneNumber + "</td><td>" + value.firstName +
            " " + value.lastName + "</td></tr>"
            */
          );
      });
    });
});
/*
<div class="card">
            <img class="card_style" src="https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-03-512.png" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>Facebook</b></h4>
                <button>More</button>
            </div>
        </div>
*/
