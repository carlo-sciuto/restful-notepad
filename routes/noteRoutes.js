import noteList from '../controllers/NoteControllers.js'


export default (app) => {
  // noteList Routes
  app.route('/note')
    .get(noteList.listNotes)
    .post(noteList.createNote);

  app.route('/note/:noteId')
    .get(noteList.readNote)
    .put(noteList.updateNote)
    .delete(noteList.deleteNote);
};