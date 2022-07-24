require("dotenv").config()
const { MongoClient } = require('mongodb');

async function GetDB() {
    const client = new MongoClient(process.env.CONNECTION_URI);
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(process.env.DB_NAME);

    return db;
}

module.exports = GetDB
