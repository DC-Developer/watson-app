$(function() {
    
      $("#search-button").on("click", function(event) {
         
        event.preventDefault();
        console.log("You clicked me");
    /*
        var newCat = {
          name: $("#ca").val().trim(),
          sleepy: $("[name=sleepy]:checked").val().trim()
        };
        */
        var newSearch ={
          name: $("#search-input").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/watson", {
          type: "POST",
          data: newSearch
        }).then(
          function() {
            console.log("created new term");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });
    