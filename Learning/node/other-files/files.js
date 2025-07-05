const fs = require("fs");

// read files
fs.readFile("./docs/blog1", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// write files
fs.writeFile("./docs/blog1.txt", "It's now evening my man", () => {
    console.log("file was written");
});

// directory

if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    });
}

// delete files
if (fs.existsSync("./docs/new_file.txt")) {
    fs.unlink("./docs/new_file.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    });
}
