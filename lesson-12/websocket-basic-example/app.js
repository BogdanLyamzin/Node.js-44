const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const sockets = [];

wsServer.on("connection", (socket)=> {
    // console.log("New frontend connect");
    sockets.push(socket);
    setTimeout(() => {
        socket.send("Welcome to websocket server");
    }, 3000);

    sockets.forEach(item => {
        if(item !== socket) {
            item.send("New member connect")
        }
    })
});