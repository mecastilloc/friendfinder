// Chosen config for Form fields styling
var config = {
  ".chosen-select": {
    css: { "background-color": "black !important" }
  },
  ".chosen-select-deselect": {
    allow_single_deselect: true
  },
  ".chosen-select-no-single": {
    disable_search_threshold: 10
  },
  ".chosen-select-no-results": {
    no_results_text: "Oops, nothing found!"
  },
  ".chosen-select-width": {
    width: "95%"
  },
};

///Chosen Aplying config to form's fields
for (var selector in config) {
  $(selector).chosen(config[selector]);
}

// Capture the form inputs
$("#submit").on("click", function (event) {
  event.preventDefault();

  // Form validation Function
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    // Aplying validation
    $(".chosen-select").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  // If all required fields are filled
  if (validateForm()) {
    // Create an object for the user"s data
    var userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

    // AJAX post the data to the friends API.
    $.post("/api/friends", userData, function (data) {

      // Grab the result (res.json(match) from the AJAX post so that the best match's name and photo are displayed.
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);
      $("#results-modal").modal({
        show: true,
        backdrop: 'static',
        keyboard: false
      });
    });
  } else {
    $("#alert-txt").text("Please fill out all fields before submitting!")
    $("#alert-modal").modal("toggle");
  }
});
