function checkForm(name, email) {
    try {
        if (name === "" || email === "") {
            throw "All fields are required!";
        }
        console.log("Form is valid");
    } catch (err) {
        console.log("Form Error:", err);
    }
}
checkForm("saaniya", "");
checkForm("saaniya", "saaniya@gmail.com");
