const express = require('express');
const router = express.Router();
const Garments = require('../models/projects.js');

// Index route
router.get('/', (req, res) => {
    Garments.find({}, (err, foundGarments) => {
        res.json(foundGarments);
    });
});

// Create Route
router.post('/', (req, res) => {
    Garments.create(req.body, (err, createdGarment) => {
        res.json(createdGarment);
    });
});

// Delete Route
router.delete('/:id', (req, res) => {
    Garments.findByIdAndRemove(req.params.id, (err, deletedGarment) => {
        res.json(deletedGarment);
    });
});

//// Update Route
router.put('/:id', (req, res) => {
    Garments.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGarment) => {
        res.json(updatedGarment);
    });
});

module.exports = router;
