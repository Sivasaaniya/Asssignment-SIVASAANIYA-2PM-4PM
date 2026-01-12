function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                resolve("Login successful!");
            } else {
                reject("Invalid credentials");
            }
        }, 1500);
    });
}

async function simulateLogin(username, password) {
    try {
        let result = await loginUser(username, password);
        console.log(result);
        console.log("Redirecting to dashboard...");
    } catch (err) {
        console.log("Login Error:", err);
    }
}
simulateLogin("admin", "1234"); 
simulateLogin("user", "wrong"); 