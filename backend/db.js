const mongoose = require("mongoose");

// const mongoURI = 'mongodb+srv://harshpawar242003:edGpmAjMo96P1ey1@cluster0.rlohluo.mongodb.net/Medicine_nfc?retryWrites=true&w=majority';
const mongoURI = 'mongodb+srv://namanvashistha61:9RTrxKoBvM7zwGzP@cluster0.irfh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const fetched_data = mongoose.connection.db.collection("alternate");
        const data = await fetched_data.find({}).toArray();
        const alter_data = data;
        // console.log(alter_data[0].Symptom);
        //console.log('Data from "alternate" collection:', alter_data);
        return alter_data
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};

module.exports = { mongoDB } ;
