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
                "<button class='historyButton' id='" + value.id + "'>History</button>" +
              "</div>" +
            "</div>"
          );
      });
    });
  let newCompanyModal = $("#newCompany");
  let companyModal = $("#company");
  let editCompanyModal = $("#editCompanyModal");
  let history = $("#history");

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
    history.attr("style", "display:none");
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
      .done(function() {
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
        $("#companyName").text(data.companyName);
        $("#phone").text(data.phoneNumber);
        $("#companyEmail").text(data.email);
        $("#firstName").text(data.firstName);
        $("#lastName").text(data.lastName);
        $("#companyId").text(data.id);
        //For the edit modal
        $("#nameForCompany").val(data.companyName);
        $("#emailForCompany").val(data.email);
        $("#phoneNumber").val(data.phoneNumber);
        $("#contactFirstName").val(data.firstName);
        $("#contactLastName").val(data.lastName);
        companyModal.attr("style", "display:block");
      });
  });

  
  /********* History - Comments MockApi ******/

  let qtyComments = [];
  for (let i=0; i<=60; i++) {
    // Random to get from 2 to 8 comments for each costumer
    qtyComments.push(Math.floor(Math.random() * 8) + 2);
  }

  $(".cards").on("click", ".historyButton", function(event) {
    $(".history-content").empty();

    let idOfHisButton = Number(event.target.id);
    console.log("Clicked!: " + idOfHisButton);
    
    // Get four comments from MockAPI. Mixed by Async-bug
    for(let i = 0; i < qtyComments[idOfHisButton]; i++) {
      console.log("i es: " + i);
      $.ajax({
        method: "GET",
        url: "http://5da7897d23fa740014697829.mockapi.io/comment/" + (idOfHisButton + i),
      })
      .done(function(data) {
        $(".history-content").append(
          "<div id='comment-container'>"+
            "<span>" +
              parseDate(data.date) +
            "</span>" +
            "<span>" +
              data.comment +
            "</span>" +
            "<span>" +
              data.name +
            "</span>" +
          "</div>"
        )
        console.log(idOfHisButton + " " + i + "=" + (idOfHisButton + i) );
      });
      history.attr("style", "display:block");
    }

    // Return MockApi date in format yyyy-mm-dd
    function parseDate(d) {
      let date = new Date(d);
      let newFormat = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
      return newFormat;
    }

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
