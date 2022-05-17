import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import NoteModel from './models/noteModel.js'
import routeApp from './routes/noteRoutes.js'

const app = express()
const port = process.env.PORT || 3000
const uriDB = process.env.uriDB;

mongoose.connect(uriDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res=>{
  console.log("DB Connected!")
}).catch(err => {
  console.log(Error, err.message);
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

routeApp(app);

app.get('*', (req, res)=>{
res.status(404).send({url: req.originalUrl + ' not found'})
})


app.listen(port);

console.log('Note RESTFUL API on port: ' + port);