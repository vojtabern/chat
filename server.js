const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');



const app = express();
const server = http.createServer(app);
const io = socketio(server);

//statické soubory
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    //uchová poslanou zprávu
    socket.on('chat', msg => {
        //rozesilá ostatním
        io.emit('chat', msg);
    });
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, function() {
    console.log(`Server nasloucha na portu ${PORT}`);
})



