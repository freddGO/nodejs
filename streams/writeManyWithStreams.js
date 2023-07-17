const fs = require("node:fs/promises");

// Time:  240.76ms
// fast
// no memory efficient, memory grows exponential depending on size on N
(async () => {
  console.time("writeMany")
  const fileHandle = await fs.open("test.txt", "w");

  const stream = fileHandle.createWriteStream()

  for (let i = 0; i < 1000000; i ++ ) {
    const buff = Buffer.from(` ${i}`, "utf-8");
    stream.write(buff)
  }


  console.timeEnd("writeMany")
})();