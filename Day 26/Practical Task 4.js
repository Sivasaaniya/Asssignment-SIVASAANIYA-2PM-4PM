async function loadData() {
    try {
        let response = await fakeAPI(true); 
        console.log("Async/Await Data:", response.data);
    } catch (err) {
        console.log("Async/Await Error:", err);
    }
}
loadData();