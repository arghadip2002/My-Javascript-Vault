function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed.");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed.");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed.");
    callback();
  }, 1000);
}

function finish() {
  setTimeout(() => {
    console.log("All tasks finished!");
  }, 1000);
}

// Nesting the Callbacks (Callback Hell)
task1(() => {
  task2(() => {
    task3(() => {
      finish();
    });
  });
});
