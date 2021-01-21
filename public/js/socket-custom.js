var socket = io();
socket.on("connect", function () {
  console.log("conectado al servidor");
});

// Escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

// Enviar información
socket.emit(
  "enviarMensaje",
  {
    usuario: "Rhon",
    mensaje: "Holis",
  },
  function (resp) {
    console.log("respuesta: ", resp);
  }
);

// Escuchar
socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor conectado", mensaje);
});
