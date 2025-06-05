function task1() {
  const task = true; // Change to false to simulate failure
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (task) {
        resolve("Task 1 completed.");
      } else {
        reject("Task 1 failed.");
      }
    }, 1000);
  });
}

function task2() {
  const task = true; // Change to false to simulate failure
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (task) {
        resolve("Task 2 completed.");
      } else {
        reject("Task 2 failed.");
      }
    }, 3000);
  });
}

function task3() {
  const task = false; // Change to true to simulate success
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (task) {
        resolve("Task 3 completed.");
      } else {
        reject("Task 3 failed."); // This will now correctly trigger
      }
    }, 2000);
  });
}

function finish() {
  const task = true; // Change to false to simulate failure
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (task) {
        resolve("All tasks finished!");
      } else {
        reject("Final task failed.");
      }
    }, 500);
  });
}

// Chaining Promises with Error Handling
task1()
  .then((message) => {
    console.log(message); // Logs success of Task 1
    return task2();
  })
  .then((message) => {
    console.log(message); // Logs success of Task 2
    return task3();
  })
  .then((message) => {
    console.log(message); // Logs success of Task 3 if resolved
    return finish();
  })
  .then((message) => {
    console.log(message); // Logs success of finish
  })
  .catch((error) => {
    console.error("An error occurred:", error); // Logs error and halts execution
  });
