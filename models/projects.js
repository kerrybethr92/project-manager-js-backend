const mongoose = require('mongoose');

const garmentSchema = new mongoose.Schema({
    title: String,
    isComplete: Boolean,
    // add picture here, and some other properties
});

const Garments = mongoose.model('Garment', garmentSchema);

module.exports = Garments;
