import { createServer } from 'http';
import color from 'colors';
import { config } from 'dotenv';
import app from './app.js';


/** Config the dotenv enviromental file  */
config({
    path: './env/config.env'
});


try {
    const server = createServer(app);

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, () => {
        console.log(`Server is Running on ${PORT}`.yellow.underline.bold);
    })

} catch (error) {
    console.log("Server Error to Start".red.underline.bold);
}
