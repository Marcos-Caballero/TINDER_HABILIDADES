import 'dotenv/config';
import app from "./src/app";

const port = 3000 || process.env.PORT;

app.listen(port, () => console.log('El servidor esta corriendo en el puerto ${port}'));