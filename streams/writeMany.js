const fs = require("node:fs/promises");


// Execution time: 3.604s
//node	(null)	2.44	11	0	Apple	0.0	0.00	59929	alfredoguillen	0 bytes		0 bytes	0 bytes	0 bytes	No	No	No	(null)	No	0 bytes	0	0 bytes	0	0 bytes	0 bytes	-	0 bytes	0 bytes	No	(null)	
//Memory: 2.2GB

(async () => {
  console.time("writeMany")
  const fileHandle = await fs.open("test.txt", "w")

  for (let i = 0; i < 1000000; i ++ ) {
    await fileHandle.write(` ${i} `)
  }

  console.timeEnd("writeMany")
})();


