const GetDB = require("../db")
const { ObjectId } = require("mongodb")

module.exports = {
    async getAll() {
        try {
            const db = await GetDB()
            return db.collection("Course").find({}).toArray()
        }catch(err) {
            console.error(`Course GetAll Error:  ${err}`)
            return null
        }
    },

    async get(id) {
        try {
            const db = await GetDB()
            return db.collection("Course").findOne({_id: ObjectId(id)})
        }catch(err) {
            console.error(`Course Get Error:  ${err}`)
            return null
        }
    },

    async create(data) {
        try {
            const db = await GetDB()
            await db.collection("Course").insertOne(data)
            return true
        }catch(err) {
            console.error(`Course Create Error:  ${err}`)
            return false
        }
    },

    async edit(id, data) {
        try {
            const db = await GetDB()
            await db.collection("Course").updateOne({_id: ObjectId(id)}, {$set: data})
            return true
        }catch(err) {
            console.error(`Course Edit Error:  ${err}`)
            return false
        }
    },

    async delete(id) {
        try {
            const db = await GetDB()
            await db.collection("Course").deleteOne({_id: ObjectId(id)})
            return true
        }catch(err) {
            console.error(`Course Delete Error:  ${err}`)
            return false
        }
    }
}