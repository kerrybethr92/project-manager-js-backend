const express = require('express');
const router = express.Router();
const Projects = require('../models/projects.js');

// Index route
router.get('/', (req, res) => {
    Projects.find({}, (err, foundProjects) => {
        res.json(foundProjects);
    });
});

// Create Route
router.post('/', (req, res) => {
    Projects.create(req.body, (err, createdProject) => {
        res.json(createdProject);
    });
});

// Delete Route
router.delete('/:id', (req, res) => {
    Projects.findByIdAndRemove(req.params.id, (err, deletedProject) => {
        res.json(deletedProject);
    });
});

//// Update Route
router.put('/:id', (req, res) => {
    Projects.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedProject) => {
        res.json(updatedProject);
    });
});

module.exports = router;
