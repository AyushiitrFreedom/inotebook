const mongoose = require('mongoose');

const NotesSchema = new Schema({
    date: { type: Date, default: Date.now },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: "General"
    },
  });
  
  module.exports = mongoose.model1('notes',NotesSchema);