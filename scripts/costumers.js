$(document).ready(function() {
  $.ajax({
      method: "GET",
      url: "http://5da7897d23fa740014697829.mockapi.io/customer"
    })
    .done(function(data) {
      $.each(data, function(key, value) {
        $(".cards")
          .append(
            "<div class='card'>" +
            "<img src='" + value.avatar + "' alt='Avatar'>" +
            "<div>" +
            "<h4>" +
            value.companyName +
            "</h4>" +
            "</div>" +
            "<div>" +
            "<button class='companyCard' id='" + value.id + "'>More</button>" +
            "</div>" +
            "</div>"
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
          phoneNumber: $("#phone_number").val(),
          firstName: $("#contact_first_name").val(),
          lastName: $("#contact_last_name").val()
        }
      })
      .done(function() {});
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
        //Load data into companyModal.
        $("#companyName").text(data.companyName);
        $("#phone").text(data.phoneNumber);
        $("#companyEmail").text(data.email);
        $("#firstName").text(data.firstName);
        $("#lastName").text(data.lastName);
        $("#companyId").text(data.id);

        $("#companyModalButtons").
        append("<button class='mailLinkContainer'>" +
          "<a class='mailLink' target='_blank' href='mailto:someone@yoursite.com?" +
          "subject=We%20want%20your%20opinion!&body=This%20is%20just%20a%20test.'>" +
          "Send a survey</a></button>");
        //Load data into editCompanyModal inputs.
        $("#nameForCompany").val(data.companyName);
        $("#emailForCompany").val(data.email);
        $("#phoneNumber").val(data.phoneNumber);
        $("#contactFirstName").val(data.firstName);
        $("#contactLastName").val(data.lastName);
        companyModal.attr("style", "display:block");
      });
  });
  $("#deleteCustomer").click(function() {
    $.ajax({
        method: "DELETE",
        url: "http://5da7897d23fa740014697829.mockapi.io/customer/" + $("#companyId").text()
      })
      .done(function() {
        location.reload(true);
      });
  });
  $("#saveChanges").click(function() {
    $.ajax({
        method: "PUT",
        url: "http://5da7897d23fa740014697829.mockapi.io/customer/" + $("#companyId").text(),
        data: {
          companyName: $("#nameForCompany").val(),
          email: $("#emailForCompany").val(),
          phoneNumber: $("#phoneNumber").val(),
          firstName: $("#contactFirstName").val(),
          lastName: $("#contactLastName").val()
        }
      })
      .done(function() {
        editCompanyModal.attr("style", "display:none");
        location.reload(true);
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
