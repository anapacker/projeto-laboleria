import { insertClients } from "../repositories/clients.repository.js"

export async function createClients(req, res) {
    const { name, address, phone } = req.body

    try {
        await insertClients(name, address, phone)
        
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
