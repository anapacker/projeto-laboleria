import { db } from "../database.js";

export async function getFlavourQuery(name){
  return db.query(
    `SELECT * FROM flavours WHERE name=$1`
  ,[name]
  )
}

export async function getFlavourIdQuery(flavourId){
  return db.query(`SELECT * FROM flavours WHERE id=$1`
  ,[flavourId])
}

export async function insertFlavoursQuery(name){
  return db.query(`
      INSERT INTO flavours (name) 
      VALUES ($1)
      `, [name]
  )
}