function fakeAPI(isSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) resolve({ data: "Fake API data loaded" });
            else reject("API failed to fetch data");
        }, 2000);
    });
}

fakeAPI(true)
    .then(res => console.log("Promise Result:", res.data))
    .catch(err => console.log("Promise Error:", err));
