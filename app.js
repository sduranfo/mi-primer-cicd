// app.js — Nuestra mini API
// Esta función es lo que vamos a probar con Jest

function sumar(a, b) {
  return a + b;
}

function iniciarServidor() {
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Mundo desde mi Pipeline CI/CD!\n');
  });

  server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
}

// Exportamos sumar para que el test pueda usarla
module.exports = { sumar };

// Solo iniciamos el servidor si ejecutamos este archivo directamente
if (require.main === module) {
  iniciarServidor();
}