const mongoose = require("mongoose");

function ConnectToDb () {
    mongoose.connect(process.env.MongoDbUri , () => {
        console.log('connected to db');
    })
}

module.exports = ConnectToDb;