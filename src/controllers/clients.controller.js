import dayjs from "dayjs"
import { getClientByIdQuery, insertClients } from "../repositories/clients.repository.js"
import { getClientsOrderByIdQuery } from "../repositories/order.repository.js"

export async function createClients(req, res) {
    const { name, address, phone } = req.body

    try {
        await insertClients(name, address, phone)
        
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function getClientOrdersById(req, res){
    const clientId = req.params.id

    try{
        const clientExists = await getClientByIdQuery(clientId)
        if(clientExists.rowCount === 0){
            return res.status(404).send('Cliente não encontrado.')
        }
        const result = await getClientsOrderByIdQuery(clientId)

        const clientOrders = result.rows.map(order => {
            const obj = {
                ...order,
                createdAt:dayjs(order.createdAt).format('YYYY-MM-DD HH:mm')
            }
            return obj
        })

        res.status(200).send(clientOrders)
    }catch (err) {
        return res.status(500).send(err.message)
    }
}
