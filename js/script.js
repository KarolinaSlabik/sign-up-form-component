function send_form () {
    let first_name_value=$(".input_first_name input").val();
    if(first_name_value===""){
        $(".input_first_name").addClass("error");
    }

    let last_name_value=$(".input_last_name input").val();
    if(last_name_value===""){
        $(".input_last_name").addClass("error");
    }

    let email_address_value=$(".input_email_address input").val();
    if(!validateEmail(email_address_value) || email_address_value==="") {
        $(".input_email_address").addClass("error");
    }

    let password_value=$(".input_password input").val();
    if(password_value===""){
        $(".input_password").addClass("error");
    }


    return false;
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
