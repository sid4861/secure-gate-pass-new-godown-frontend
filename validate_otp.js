function validateOTP() {
    var gatepassOTP = document.getElementById("gatepassOTP").value

    var url = new URL("https://secure-gate-pass-new.cfapps.io/secure-gate-pass/inventory//validate-gatepass?otp=383645")
    url.searchParams.set('otp', gatepassOTP)
    console.log(url)

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.stringify(this.response);
        if (request.status >= 200 && request.status < 400) {
            var para_description = document.createElement('p');
            para_description.innerHTML = String(data);
            document.getElementsByTagName('body')[0].appendChild(para_description)

        } else {
            console.log('error');
        }

    }

    // Send request
    request.send();
}


function showPassword() {
    var x = document.getElementById("gatepassOTP");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}