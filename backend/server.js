import { createServer } from 'http';
import color from 'colors';
import { config } from 'dotenv';
import app from './app.js';

config();

try {
    const server = createServer(app);

    const PORT = process.env.PORT;

    server.listen(PORT, () => {
        console.log(`Server in ${process.env.MODE_DEV} and Running on ${PORT}`.yellow.underline.bold);
    })

} catch (error) {
    console.log("Server Error to Start".red.underline.bold);
}
