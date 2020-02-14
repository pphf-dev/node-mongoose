const mongoose = require('mongoose');
const Schema = mongoose.Schema; //lets us avoid typing mongoose.Schema

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true //automatically gives createdAt and updatedAt props
});

//Mongoose will look for lower case and plural version of what we put here for the collection
//model is a de-sugared class
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;