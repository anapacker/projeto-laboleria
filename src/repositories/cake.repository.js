import { db } from "../database.js"


export function getAllCakes(){
    return db.query(
        `SELECT * FROM cakes`
    )
}
export function getCakesName(name){
    return db.query(
        `SELECT cakes.name FROM cakes WHERE name=$1`
        ,[name]
    )
}
export function insertCake(name, price, image, description){
    return db.query(
        `INSERT INTO cakes (name, price, image, description) 
         VALUES ($1, $2, $3, $4) 
         RETURNING id, name
         `, [name, price, image, description]
    )

}