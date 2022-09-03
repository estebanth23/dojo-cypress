const {Task} = require('../models/index');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const task = await Task.build(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.send(tasks);
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const task = await Task.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;