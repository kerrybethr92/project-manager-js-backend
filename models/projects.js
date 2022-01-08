const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    // add picture here, and some other properties
});

const Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;
