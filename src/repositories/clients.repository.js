import { db } from "../database.js"

export function insertClients(name, address, phone){
    return db.query(
        `INSERT INTO clients (name, address, phone) 
         VALUES ($1, $2, $3)
         `, [name, address, phone]
    )

}