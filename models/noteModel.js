import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Enter Note Title'
  },
  text: {
    type: String,
    required: 'Enter Note Text'
  },
  status: {
    type: [{
      type: String,
      enum: ['published', 'edited']
    }],
    default: ['published']
  }
}, { timestamps: true });

export default mongoose.model('Note', NoteSchema);