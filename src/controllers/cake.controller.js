import { getCakesName, insertCake } from "../repositories/cake.repository.js"

export async function createCake(req, res) {
    const { name, price, image, description } = req.body

    try {
        const cake = await getCakesName(name)
        if (cake.rowCount > 0) return res.status(409).send( "Esse nome de bolo já existe.")

        await insertCake(name, price, image, description)
        
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}


