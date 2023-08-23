import { getCakeQuery, getClientQuery, insertOrder } from "../repositories/order.repository.js"

export async function createOrder(req, res){
  const {clientId, cakeId, quantity, totalPrice} = req.body

  try {
    const clientQuery = await getClientQuery(clientId)
    if(clientQuery.rowCount === 0 ) return res.status(404).send('Cliente não encontrado.')

    const cakeQuery = await getCakeQuery(cakeId)
    if(cakeQuery.rowCount === 0) return res.status(404).send('Bolo não encontrado.')
    
    await insertOrder(clientId, cakeId, quantity, totalPrice)

    res.sendStatus(201)
} catch (err) {
    return res.status(500).send(err.message)
}
}