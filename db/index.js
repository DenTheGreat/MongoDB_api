const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab4', {
    useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("error", (err)=>{
    console.log(`[DB >] ${err}`);
});

db.once("open", () =>{
console.log("[DB > ] Connection have been established");
});

module.exports = db;