function notify(message, delay) {
    setTimeout(() => {
        console.log("Notification:", message);
    }, delay);
}

notify("You have a new message!", 2000); 
notify("Don't forget to check your tasks!", 4000); 

