const { Schema } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Category = mongoose.model('Categopry', categorySchema);