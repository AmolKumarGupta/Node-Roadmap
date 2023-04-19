const { ObjectId } = require("mongodb");
const getDB = require("../database");

class ApiUser {
    constructor(data) {
        if (data.name) {
            this.name = data.name;
        }
        if (data.email) {
            this.email = data.email;
        }
        if (data.age) {
            this.age = data.age;
        }
        if (data._id) {
            this._id = new ObjectId(data._id);
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

    async update() {
        let db = getDB();
        let collection = await db.collection('users');
        let result = await collection.updateOne({_id: this._id}, {
            $set: {...this}
        });
        return result;
    }

    static async delete(id) {
        try {
            let objId = new ObjectId(id);
            let db = getDB();
            let collection = await db.collection('users');
            let result = await collection.deleteOne({ _id: objId });
            return result;
        }catch (e) {
            console.error(e);
        }
    }
}

module.exports = ApiUser