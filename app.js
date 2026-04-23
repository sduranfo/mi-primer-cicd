// app.js — API lista para producción

function sumar(a, b) {
  return a + b;
}

function iniciarServidor() {
  const http = require('http');

  // process.env.PORT es el puerto que Render asigna automáticamente
  // Si no existe (desarrollo local), usamos 3000
  const PORT = process.env.PORT || 3000;

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola DevOS\n');
  });

  server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = { sumar };

if (require.main === module) {
  iniciarServidor();
}