const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employeeDetail',
    },
});

module.exports = mongoose.model('dashboard', DashboardSchema);
