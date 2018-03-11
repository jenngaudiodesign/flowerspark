$("#form").submit(function(e) {
    if(/* Validate form */) {
        swal("Good job!", "You clicked the button!", "success");
        setTimeout(function() {
            window.location = "redirect page";
        }, 3000);
    } else {
        //Display alert
    }

    e.preventDefault();
});