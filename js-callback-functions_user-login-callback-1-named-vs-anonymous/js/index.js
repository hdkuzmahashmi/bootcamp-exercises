console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

function showWelcomeMessage() {
  console.log("Called by named function : Welcome! You are logged in now.");
}
handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log("Called by anonymous function : Welcome! You are logged in now.");
});
