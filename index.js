// Hide Error
function rem() {
    document.getElementById("display_error").style.display = "none";
}

// Show Error
function chkform() {

    var inputs = [];
    inputs[0] = document.getElementById("email_field");

    for (i = 0; i < inputs.length; i++) {

        if (inputs[i].value === "") {

            document.getElementById("display_error").innerHTML = "Please provide a valid email! <img src='images/icon-error.svg'>";
        }
    }
}

