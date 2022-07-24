const GetDB = require("../db")
const { ObjectId } = require("mongodb")

module.exports = {
    async getAll() {
        try {
            const db = await GetDB()
            return db.collection("Course").find({}).toArray()
        }catch(err) {
            console.error(err)
            return null
        } 
    },

    async get(id) {
        try {
            const db = await GetDB()
            return db.collection("Course").findOne({_id: ObjectId(id)})
        }catch(err) {
            console.error(err)
            return null
        }
    },

    async create(data) {
        try {
            const db = await GetDB()
            await db.collection("Course").insertOne(data)
            return true
        }catch {
            console.error(err)
            return false
        }
    },

    async edit(id, data) {
        try {
            const db = await GetDB()
            await db.collection("Course").updateOne({_id: ObjectId(id)}, {$set: data})
            return true
        }catch {
            console.error(err)
            return false
        }
    },

    async delete(id) {
        try {
            const db = await GetDB()
            await db.collection("Course").deleteOne({_id: ObjectId(id)})
            return true
        }catch {
            console.error(err)
            return false
        }
    }
}