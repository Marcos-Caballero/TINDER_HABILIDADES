/* Levantando express */
import express from "express";

const app = express ();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hola mundo')
});
/* Guardar todo lo anterior para exportarlo y usarlo en otro lugar */
export default app;