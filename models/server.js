const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Routes of the application
        this.routes();
    }

    middlewares() {

        // CORS 
        this.app.use(cors());

        // Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'GET - api'
            });
        });          

        this.app.put('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'PUT - api'
            });
        });         

        this.app.post('/api', (req, res) => {
            res.status(201).json({
                ok: true,
                msg: 'POST - api'
            });
        });       

        this.app.delete('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'DELETE - api'
            });
        });          
        
        this.app.patch('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'PATCH - api'
            });
        });          
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port} 🚀`);
        });
    }
}

module.exports = Server;