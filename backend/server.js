import http from 'http';
import app from './app.js';
import color from 'colors';
import dotenv from 'dotenv';


/** Config the dotenv enviromental file  */
dotenv.config({
    path: './env/config.env'
});


try {
    const server = http.createServer(app);

    const PORT = process.env.PORT || 5000;

    server.listen(PORT, () => {
        console.log(`Server is Running on ${PORT}`.yellow.underline.bold);
    })

} catch (error) {
    console.log("Server Error to Start");
}
