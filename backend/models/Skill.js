const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'Frontend', 'Backend', 'Database'
  iconUrl: { type: String } // Optional icon or icon name
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
