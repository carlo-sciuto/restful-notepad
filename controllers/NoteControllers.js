import mongoose from 'mongoose'

const Note = new mongoose.model('Note');

const listNotes = (req, res) => {
  Note.find({}, (err, note) => {
    if (err)
      res.send(err);
    res.json(note);
  });
};

const createNote = (req, res) => {
  let new_note = new Note(req.body);
  new_note.save((err, note) => {
    if (err)
      res.send(err);
    res.json(note);
  });
};

const readNote = (req, res) => {
  Note.findById(req.params.noteId, (err, note) => {
    if (err)
      res.send(err);
    res.json(note);
  });
};

const updateNote = (req, res) => {
 Note.findOneAndUpdate({_id: req.params.noteId}, {title: req.body.title, text: req.body.text, status: "edited"}, {new: true}, (err, note) => {
    if (err)
      res.send(err);
    res.json(note);
  });
};

const deleteNote = (req, res) => {
  Note.remove({
    _id: req.params.noteId
  }, (err, note) => {
    if (err)
      res.send(err);
    res.json({ message: 'Note successfully deleted' });
  });
};

export default { listNotes, createNote, readNote, updateNote, deleteNote };