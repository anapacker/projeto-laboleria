import dayjs from "dayjs"
import { getAllOrdersQuery, getCakeQuery, getClientQuery, getOrderByIdQuery, insertOrder } from "../repositories/order.repository.js"

export async function getOrders(req, res) {
  const date = req.query.date

  try {
    const response = await getAllOrdersQuery(date)

    if (response.rowCount === 0) {
      return res.status(404).send([])
    }

    const orders = response.rows.map(order => {
      const obj = {
        client: {
          id: order.clientId,
          name: order.clientName,
          address: order.address,
          phone: order.phone
        },
        cake: {
          id: order.cakeId,
          name: order.cakeName,
          price: parseFloat(order.price),
          description: order.description,
          image: order.image
        },
        orderId: order.id,
        quantity: order.quantity,
        totalPrice: parseFloat(order.totalPrice),
        createdAt: dayjs(order.createdAt).format('YYYY-MM-DD HH:mm')
      }
      return obj
    })
    res.status(200).send(orders)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

export async function createOrder(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body

  try {
    const clientQuery = await getClientQuery(clientId)
    if (clientQuery.rowCount === 0) return res.status(404).send('Cliente não encontrado.')

    const cakeQuery = await getCakeQuery(cakeId)
    if (cakeQuery.rowCount === 0) return res.status(404).send('Bolo não encontrado.')

    await insertOrder(clientId, cakeId, quantity, totalPrice)

    res.sendStatus(201)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

export async function getOrderById(req, res) {
  const orderId = req.params.id
  try {
    const result = await getOrderByIdQuery(orderId)
    if (result.rowCount === 0) return res.status(404).send('Pedido não encontrado.')

    const order = result.rows[0]
    const obj = {
      client: {
        id: order.clientId,
        name: order.clientName,
        address: order.address,
        phone: order.phone
      },
      cake: {
        id: order.cakeId,
        name: order.cakeName,
        price: parseFloat(order.price),
        description: order.description,
        image: order.image
      },
      orderId: order.orderId,
      quantity: order.quantity,
      totalPrice: parseFloat(order.totalPrice),
      createdAt: dayjs(order.createdAt).format('YYYY-MM-DD HH:mm')
    }

    res.status(200).send(obj)
  } catch (err) {
    return res.status(500).send(err.message)
  }
}