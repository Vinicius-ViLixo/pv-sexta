import "dotenv/config"
import express from "express"
import cors from "cors"

import endpoints  from './endpoint.js'

const server = express();
server.use(express.json());
server.use(cors());
server.use(endpoints);


server.listen(process.env.PORT, () => console.log(`api vai abrir na ${process.env.PORT}`));