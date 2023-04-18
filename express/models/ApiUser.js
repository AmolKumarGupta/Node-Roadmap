const getDB = require("../database");

class ApiUser {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        if (data._id) {
            this._id = data._id;
        }
    }

    static async find() {
        let db = getDB();
        let collection = await db.collection('users');
        let result = await collection.find().toArray();
        return result;
    }

    async save() {
        let db = getDB();
        let collection = await db.collection('users');
        let result = await collection.insertOne(this);
    }
}

module.exports = ApiUser