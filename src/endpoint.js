import { Router } from "express";
import {semaforo,diaSemana, fatorial} from "./services.js";

const server = Router();

server.get("/semaforo/:cor", (req, resp)=> {
    try{
        let a = req.params.cor;
        let x = semaforo(a);

        resp.send({
            msg: x
        })
    }
    catch(err){
        resp.status(404).send({
            err:err.message
        })
    }
})

server.get("/diaSemana", (req, resp)=> {
    try{
        const a = Number(req.query.a);
        const x = diaSemana(a);

        resp.send({
            dia: x
        })
    }
    catch(err){
        resp.status(404).send({
            err:err.message
        })
    }
})

server.post("/fatorial", (req, resp)=> {
    try{
        const a = req.body.a;
        const x = fatorial(a);

        resp.send({
            dia: x
        })
    }
    catch(err){
        resp.status(404).send({
            err:err.message
        })
    }
})

export default server;