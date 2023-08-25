import { getCakesName, insertCake } from "../repositories/cake.repository.js"
import { getFlavourIdQuery } from "../repositories/flavours.repository.js"

export async function createCake(req, res) {
    const { name, price, image, description, flavourId } = req.body

    try {
        const flavourQuery = await getFlavourIdQuery(flavourId)
        if(flavourQuery.rowCount === 0) return res.status(404).send("Digite um sabor de bolo válido.")

        const cake = await getCakesName(name)
        if (cake.rowCount > 0) return res.status(409).send( "Esse nome de bolo já existe.")

        await insertCake(name, price, image, description, flavourId)
        
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}


