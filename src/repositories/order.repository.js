import { db } from "../database.js"

export async function getClientQuery(clientId){
    return db.query(
        `SELECT * FROM clients WHERE id=$1`, [ clientId]
        )
}

export async function getCakeQuery( cakeId){
  return db.query(
      `SELECT * FROM cakes WHERE id=$1`, [ cakeId]
      )
}

export async function insertOrder(clientId, cakeId, quantity, totalPrice){
    return db.query(
        `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice", "createdAt") 
         VALUES ($1, $2, $3, $4, NOW()) 
         `, [clientId, cakeId, quantity, totalPrice]
    )

}

export async function getAllOrdersQuery(){
  return db.query(`
    SELECT orders.*,
     clients.name AS "clientName",
     cakes.name AS "cakeName",
     clients.address,
     clients.phone,
     cakes.price,
     cakes.image,
     cakes.description
      FROM orders
      JOIN clients ON clients.id = orders."clientId"
      JOIN cakes ON cakes.id = orders."cakeId"
      `)
}