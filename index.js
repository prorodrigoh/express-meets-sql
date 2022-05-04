import express from "express";
import cors from 'cors';
import {getPets, createPet} from './src/pets.js'

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/pets', async (req, res) => {
    try {
        const pets = await getPets()
        res.status(200).send(pets)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.post('/pets', async (req, res) => {
    try {
        const newPet = req.body;
        const result = await createPet(newPet)
        res.status(200).send(result)
    } catch (err) {
        res.status(500).send(err)
    }
})


app.listen(PORT, () => {
    console.log(`Listen to http://localhost:${PORT}`)
})