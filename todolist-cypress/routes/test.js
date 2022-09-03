const express = require('express');
const router = express.Router();
const {Task} = require("../models");

router.post('/reset', async (req, res) => {
    try {
        await Task.destroy({ force: true });
        res.send('OK');
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;