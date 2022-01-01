const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://dhanashma:Ei@16mp4@libraryapp.yp5xq.mongodb.net/Libraryapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;