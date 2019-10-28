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
            "<button class='companyCard' id='" + value.id + "'>More</button>" + "</div>" + "</div>"
          );
      });
    });
  let newCompanyModal = $("#newCompany");
  let companyModal = $("#company");
  let editCompanyModal = $("#editCompanyModal");

  $("#addCompany").click(function() {
    newCompanyModal.attr("style", "display:block");
  });

  $("#editCompany").click(function() {
    companyModal.attr("style", "display:none");
    editCompanyModal.attr("style", "display:block");
  });

  $(".close").click(function() {
    newCompanyModal.attr("style", "display:none");
    companyModal.attr("style", "display:none");
    editCompanyModal.attr("style", "display:none");
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
    newCompanyModal.attr("style", "display:none");
  });
  $("#cancel").click(function() {
    newCompanyModal.attr("style", "display:none");
    $(".newCompany-content :input").val("");
  });
  $(".cards").on("click", "button.companyCard", function(event) {
    let idOfButton = Number(event.target.id);
    $.ajax({
        method: "GET",
        url: "http://5da7897d23fa740014697829.mockapi.io/customer/" + idOfButton,
      })
      .done(function(data) {
        console.log(data);
        $("#companyName").text(data.companyName);
        // TODO: Make it so the email prints out into the H2 tag.
        $("#phone").text(data.phoneNumber);
        $("#companyEmail").text(data.email);
        $("#firstName").text(data.firstName);
        $("#lastName").text(data.lastName);
        $("#companyId").val(data.id);
        //For the edit modal
        $("#nameForCompany").val(data.companyName);
        $("#emailForCompany").val(data.email);
        $("#phoneNumber").val(data.phoneNumber);
        $("#contactFirstName").val(data.firstName);
        $("#contactLastName").val(data.lastName);
        companyModal.attr("style", "display:block");
      });
  });
  window.onclick = function(event) {
    if (event.target == document.getElementById("newCompany") || event.target == document.getElementById("company") || event.target == document.getElementById("editCompanyModal")) {
      newCompanyModal.attr("style", "display:none");
      companyModal.attr("style", "display:none");
      editCompanyModal.attr("style", "display:none");
    }
  }
});
