const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => res.json({ message: 'Auth API is alivveeeeeee!, Yaqeen' }));

// new changes to the code do not need rebuild for the image, only adding new dependencies 
// :)
module.exports = router;