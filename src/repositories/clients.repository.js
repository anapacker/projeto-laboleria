import { db } from "../database.js"

export function insertClients(name, address, phone){
    return db.query(
        `INSERT INTO cakes (name, address, phone) 
         VALUES ($1, $2, $3) 
         RETURNING id
         `, [name, address, phone]
    )

}