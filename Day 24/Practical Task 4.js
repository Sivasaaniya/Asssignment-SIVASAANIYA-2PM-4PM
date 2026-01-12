
function login(username, password) {
    try {
        if (username === "" || password === "") {
            throw "Username and password cannot be empty";
        }
        if (username !== "admin" || password !== "1234") {
            throw "Invalid login credentials";
        }
        console.log("Login successful");
    } catch (err) {
        console.log("Login Error:", err);
    }
}
login("admin", "");
login("admin", "1234");

