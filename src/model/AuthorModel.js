const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://dhanashma:Ei@16mp4@libraryapp.yp5xq.mongodb.net/Libraryapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;