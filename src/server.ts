import "reflect-metadata";
import express from "express";
import cors from "cors"
import { AppDataSource } from "./database/data-source";

const port:number = 3030
const app = express();

app.use(cors());
app.use(express.json());
AppDataSource.initialize().then(async () =>{
    console.log("Database Conected!!!");
    app.listen(port, () => console.log(`http://localhost:${port}`));
}).catch((error) => {
    console.error("Eita:", error);
    process.exit(1);
});