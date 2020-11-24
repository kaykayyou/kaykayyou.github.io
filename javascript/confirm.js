function validateForm() {
    var fname = document.forms["checkout"]["fName"];
    var lname = document.forms["checkout"]["lName"];
    var email = document.forms["checkout"]["EMail"];
    var phone = document.forms["checkout"]["Telephone"];
    var address1 = document.forms["checkout"]["Address1"];
    var address2 = document.forms["checkout"]["Address2"];
    var zipcode = document.forms["checkout"]["ZipCode"];
    var city = document.forms["checkout"]["City"];
    var state = document.forms["checkout"]["State"];
    var country = document.forms["checkout"]["Country"];
    var fmessage = document.getElementById("fn");
    var lmessage = document.getElementById("ln");
    var pmessage = document.getElementById("phn");
    var emessage = document.getElementById("eid");
    var amessage = document.getElementById("adr1");
    var dmessage = document.getElementById("adr2");
    var zmessage = document.getElementById("zpc");
    var cmessage = document.getElementById("cty");
    var cnmessage = document.getElementById("cnty");
    var smessage = document.getElementById("stt");

    if (fname.value == "") {
        // lmessage.innerHTML ="Please enter your first name.");
        fmessage.innerHTML = "Please enter your first name.";
        fname.focus();
        return false;
    } else if (fname.value.length <= 4 || fname.value.length >= 15) {
        fmessage.innerHTML = "First name should contain 4-15 characters";
        fname.focus();
        return false;
    }
    if (lname.value == "") {
        lmessage.innerHTML = "Please enter your last name.";
        lname.focus();
        return false;
    } else if (lname.value.length <= 4 || lname.value.length >= 15) {
        lmessage.innerHTML = "Last name should contain 4-15 characters";
        lname.focus();
        return false;
    }
    if (phone.value == "") {
        pmessage.innerHTML = "Please enter your phone number.";
        phone.focus();
        return false;
    } else if (phone.value != "") {
        var phoneno = /^[0-9]{10}$/;
        if (!phoneno.test(phone.value)) {
            pmessage.innerHTML = "Please enter a valid phone number with 0-9 digits";
            return false;
        }
    }
    if (email.value == "") {
        emessage.innerHTML = "Please enter a valid e-mail address.";
        email.focus();
        return false;
    } else if (email.value != "") {
        var emailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if (!emailformat.test(email.value)) {
            emessage.innerHTML = "Please enter a valid email address";
            return false;
        }
    }
    if (address1.value == "") {
        amessage.innerHTML = "Please enter your address.";
        address1.focus();
        return false;
    } else if (address1.value.length <= 4 || address1.value.length >= 15) {
        amessage.innerHTML = "address1 should contain 4-15 characters";
        address1.focus();
        return false;
    }

    if (address2.value == "") {
        dmessage.innerHTML = "Please enter your address.";
        address2.focus();
        return false;
    } else if (address2.value.length <= 4 || address2.value.length >= 15) {
        dmessage.innerHTML = "address2 should contain 4-15 characters";
        address2.focus();
        return false;
    }

    if (zipcode.value == "") {
        zmessage.innerHTML = "Please enter your zipcode";
        zipcode.focus();
        return false;
    } else if (zipcode.value != "") {
        var zip = /^[0-9]{6}$/;
        if (!zip.test(zipcode.value)) {
            zmessage.innerHTML = "Please enter a valid zipcode with 0-9 digits";
            return false;
        }
    }
    if (city.value == "") {
        cmessage.innerHTML = "Please enter your city";
        city.focus();
        return false;
    } else if (city.value.length <= 4 || city.value.length >= 15) {
        cmessage.innerHTML = "city name should contain 4-15 characters";
        city.focus();
        return false;
    }
    if (country.value == "") {
        cnmessage.innerHTML = "Please enter your country";
        country.focus();
        return false;
    } else if (country.value.length <= 4 || country.value.length >= 15) {
        cnmessage.innerHTML = "country name should contain 4-15 characters";
        country.focus();
        return false;
    }
    if (state.value == "") {
        smessage.innerHTML = "Please enter your state";
        state.focus();
        return false;
    } else if (state.value.length <= 4 || state.value.length >= 15) {
        smessage.innerHTML = "state name should contain 4-15 characters";
        state.focus();
        return false;
    }
    return true;

}