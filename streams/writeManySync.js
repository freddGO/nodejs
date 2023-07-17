const fs = require("node:fs");

// Time execution: 1.1 seconds

(async () => {
  console.time("writeMany");
  fs.open("test.txt", "w",(err, fd) => {
    for(let i = 0; i < 1000000; i++) {
      fs.writeSync(fd, ` ${i} - `);
    }

    if (err) console.error({...err})
  })
  console.timeEnd("writeMany");
})();