import "reflect-metadata";
import 'dotenv/config';
import express from "express";
import cors from "cors"
import { AppDataSource } from "./database/data-source";
import {router} from "./routes"
const port:number = 3030
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Passei por aqui");
});
app.use(router);
AppDataSource.initialize().then(async () =>{
    console.log("Database Conectado!");
    app.listen(port, () => console.log(`http://localhost:${port}`));
}).catch((error) => {
    console.error("Eita:", error);
    process.exit(1);
});