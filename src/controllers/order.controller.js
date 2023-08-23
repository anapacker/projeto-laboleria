import dayjs from "dayjs"
import { getAllOrdersQuery, getCakeQuery, getClientQuery, insertOrder } from "../repositories/order.repository.js"

export async function getOrders(req, res){
  try{
    const response = await getAllOrdersQuery()

    const orders = response.rows.map(order => {
      const obj = {
        client:{
          id:order.clientId,
          name:order.clientName,
          address: order.address,
          phone:order.phone
        },
        cake:{
          id:order.cakeId,
          name:order.cakeName,
          price:order.price,
          description:order.description,
          image:order.image
        },
        orderId:order.id,
        quantity:order.quantity,
        totalPrice:order.totalPrice,
        createdAt:dayjs(order.createdAt).format('YYYY-MM-DD HH:mm')
      }
      return obj
    })
    res.status(200).send(orders)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

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