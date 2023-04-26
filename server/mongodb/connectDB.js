const mongoose = require('mongoose')

const connectDB = (uri)=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(uri)
        .then(()=>{ console.log('connected to MongoDB');})
        .catch((err)=>{ console.log(err);})
}

module.exports = connectDB;
