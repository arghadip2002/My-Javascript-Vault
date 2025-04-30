// Task functions remain the same but return Promises
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
  const task = false; // Change to false to simulate failure
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (task) {
        resolve("Task 3 completed.");
      } else {
        reject("Task 3 failed.");
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

// Using async/await to handle the tasks sequentially
async function executeTasks() {
  try {
    const message1 = await task1();
    console.log(message1);

    const message2 = await task2();
    console.log(message2);

    const message3 = await task3();
    console.log(message3);

    const finalMessage = await finish();
    console.log(finalMessage);
  } catch (error) {
    console.error("An error occurred:", error); // Handle any rejection
  }
}

// Call the async function
executeTasks();
