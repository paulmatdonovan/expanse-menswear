const fs = require("fs");
//  what is 'fs'?

const readStream = fs.createReadStream("./docs/blog3.txt", {
    encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//     console.log("new CHUNK----");
//     console.log(chunk);
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);
