const express = require('express');
const path = require('path');

const app = express();

// Servir arquivos estáticos da pasta 'public'
app.use(express.static("public"));

app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

// Rotas para APIs

app.get('/consulta', (req, res) => { 
  res.sendFile(path.join(__dirname, 'public/html', 'consulta.html'));
});

app.listen(3000, () => {
  console.log(`Server running on port: http://localhost:3000`);
});
