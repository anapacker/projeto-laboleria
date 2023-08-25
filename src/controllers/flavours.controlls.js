import { getFlavourQuery, insertFlavoursQuery } from "../repositories/flavours.repository.js"

export async function createFlavours(req, res){
  const {name} = req.body

  try{

    const flavour = await getFlavourQuery(name)
    if(flavour.rowCount > 0 ) return res.status(409).send('Esse sabor já existe.')

    await insertFlavoursQuery(name)
    res.sendStatus(200)
  }catch (err) {
    return res.status(500).send(err.message)
  }
}

