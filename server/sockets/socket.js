const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado");

  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "welcome",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // Escuchar
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    client.broadcast.emit("enviarMensaje", data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: "Todo chido",
    //   });
    // } else {
    //   callback({
    //     resp: "F mano",
    //   });
    // }
  });
});
