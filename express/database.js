const { MongoClient } = require("mongodb");
const uri = require("./dbconfig").uri;

let db;

(async () => {
    try {
        let conn;
        const client = new MongoClient(uri);
        conn = await client.connect();
        db = conn.db('express');
    }catch (e) {
        console.error(e);
    }
})();

const getDB = () => {
    if (db) {
        return db;
    }
    console.error("DB connection not found");
}
module.exports = getDB;