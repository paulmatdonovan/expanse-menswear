// Visualise the global object

// console.log(global);

// functions available in node

setTimeout(() => {
    console.log("Run the timeout");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("Hello World");
}, 1000);

// gets absolute path
console.log(_dirname);

// gets absolute path and filename
console.log(_filename);
