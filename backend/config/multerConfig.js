const multer = require('multer');

//configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({storage : storage});

module.exports = upload;