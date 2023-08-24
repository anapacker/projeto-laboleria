import { db } from "../database.js"

export function insertClients(name, address, phone){
    return db.query(
        `INSERT INTO clients (name, address, phone) 
         VALUES ($1, $2, $3)
         `, [name, address, phone]
    )

}
export function getClientByIdQuery(clientId){
    return db.query(`
        SELECT * FROM clients WHERE id=$1    
    `,[clientId])
}